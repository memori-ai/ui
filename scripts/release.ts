#!/usr/bin/env bun

import { readFileSync, writeFileSync } from 'fs'
import { execSync } from 'child_process'
import { join } from 'path'

const packageJsonPath = join(process.cwd(), 'package.json')

interface PackageJson {
  version: string
  [key: string]: unknown
}

function readPackageJson(): PackageJson {
  const content = readFileSync(packageJsonPath, 'utf-8')
  return JSON.parse(content)
}

function writePackageJson(pkg: PackageJson): void {
  writeFileSync(packageJsonPath, JSON.stringify(pkg, null, 2) + '\n')
}

function getNpmTag(version: string): string {
  if (version.includes('-alpha')) return 'alpha'
  if (version.includes('-beta')) return 'beta'
  if (version.includes('-rc')) return 'rc'
  return 'latest'
}

function checkVersionExistsOnNpm(
  packageName: string,
  version: string,
): boolean {
  try {
    const result = execSync(`npm view ${packageName}@${version} version`, {
      encoding: 'utf-8',
      stdio: 'pipe',
    }).trim()
    return result === version
  } catch {
    return false
  }
}

function isWorkingDirClean(): boolean {
  try {
    const status = execSync('git status --porcelain', {
      encoding: 'utf-8',
    }).trim()
    return status === ''
  } catch {
    return false
  }
}

function commitVersionBump(version: string): void {
  try {
    // Stage package.json
    execSync('git add package.json', { stdio: 'inherit' })

    // Check if there are actually changes to commit
    const stagedChanges = execSync('git diff --cached --name-only', {
      encoding: 'utf-8',
    }).trim()

    if (!stagedChanges || !stagedChanges.includes('package.json')) {
      console.log(
        '⚠️  No changes to commit (package.json may already be at this version)',
      )
      return
    }

    // Commit the version bump
    execSync(`git commit -m "chore: bump version to ${version}"`, {
      stdio: 'inherit',
    })
  } catch (error) {
    console.error('Failed to commit version bump:', error)
    process.exit(1)
  }
}

function main() {
  const args = process.argv.slice(2)

  if (args.length === 0) {
    console.error('Usage: bun scripts/release.ts <version> [--skip-commit]')
    console.error('Example: bun scripts/release.ts 1.0.3-alpha')
    process.exit(1)
  }

  const version = args[0]
  const skipCommit = args.includes('--skip-commit')

  // Validate version format
  if (!/^\d+\.\d+\.\d+(-[a-zA-Z0-9.-]+)?$/.test(version as string)) {
    console.error(`Invalid version format: ${version as string}`)
    console.error(
      'Expected format: X.Y.Z or X.Y.Z-prerelease (e.g., 1.0.3-alpha)',
    )
    process.exit(1)
  }

  console.log(`🚀 Starting release process for version ${version}...\n`)

  // Read current package.json
  const pkg = readPackageJson()
  const currentVersion = pkg.version

  console.log(`Current version: ${currentVersion}`)
  console.log(`New version: ${version}\n`)

  const versionAlreadySet = currentVersion === version

  // Check if working directory is clean
  if (!skipCommit) {
    const status = execSync('git status --porcelain', { encoding: 'utf-8' })
      .split('\n')
      .filter(line => line.trim())

    if (status.length > 0) {
      console.error('\n❌ Working directory has uncommitted changes:')
      status.forEach(line => console.error(`  ${line}`))
      console.error('\nPlease commit or stash your changes before releasing.')
      process.exit(1)
    }
  }

  // Determine npm tag
  const npmTag = getNpmTag(version as string)
  const packageName = pkg.name as string

  // Check if version already exists on npm
  const versionExists = checkVersionExistsOnNpm(packageName, version as string)

  // Run release-it
  // When version is already set, we need to handle it differently to avoid "Version not changed" error
  try {
    let releaseItCmd: string

    if (versionExists) {
      // Version exists on npm, skip npm publish but still create git tag
      console.log(`ℹ️  Version ${version} already exists on npm`)
      console.log('   Skipping npm publish, but will still create git tag\n')
      releaseItCmd = `bunx release-it ${version} --npm.publish=false`
    } else if (versionAlreadySet) {
      // Version is already in package.json but not on npm
      // Use release-it only for git/changelog, then publish directly with npm
      console.log(
        `📦 Version is already set, will publish directly to npm with tag: ${npmTag}\n`,
      )
      releaseItCmd = `bunx release-it ${version} --npm.publish=false`
    } else {
      // Normal flow: let release-it handle version bump and publish
      console.log(`📦 Publishing to npm with tag: ${npmTag}\n`)
      releaseItCmd = `bunx release-it ${version} --npm.tag=${npmTag}`
    }

    execSync(releaseItCmd, {
      stdio: 'inherit',
    })

    // If version was already set, publish directly with npm to avoid "Version not changed" error
    if (versionAlreadySet && !versionExists) {
      console.log('\n📦 Publishing directly to npm...\n')
      try {
        // Ensure we have a build before publishing
        console.log('🔨 Building package...\n')
        execSync('bun run build', { stdio: 'inherit' })

        execSync(`npm publish --tag ${npmTag}`, {
          stdio: 'inherit',
        })
        console.log('✅ Published to npm successfully!')
      } catch (npmError) {
        console.error(npmError)
        console.error('\n❌ npm publish failed. You may need to:')
        console.error("  1. Ensure you're logged in to npm: npm login")
        console.error("  2. Check that the version doesn't already exist")
        console.error('  3. Ensure the build completed successfully')
        process.exit(1)
      }
    }

    console.log(`\n✅ Successfully released version ${version}!`)
  } catch (error) {
    console.error(error)
    console.error('\n❌ Release failed. You may need to:')
    console.error("  1. Ensure you're logged in to npm: npm login")
    console.error("  2. Check that the version doesn't already exist")
    console.error('  3. Verify git remote is configured correctly')
    process.exit(1)
  }
}

main()
