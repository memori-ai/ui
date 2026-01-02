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
    execSync('git add package.json', { stdio: 'inherit' })
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

  // Update version in package.json
  pkg.version = version as string
  writePackageJson(pkg)
  console.log('✅ Updated version in package.json')

  // Check if working directory is clean (excluding package.json changes we just made)
  if (!skipCommit) {
    // Check if there are other uncommitted changes
    const status = execSync('git status --porcelain', { encoding: 'utf-8' })
      .split('\n')
      .filter(line => line.trim() && !line.includes('package.json'))

    if (status.length > 0) {
      console.error('\n❌ Working directory has uncommitted changes:')
      status.forEach(line => console.error(`  ${line}`))
      console.error('\nPlease commit or stash your changes before releasing.')
      // Revert package.json change
      writePackageJson({ ...pkg, version: currentVersion })
      process.exit(1)
    }

    // Commit the version bump
    commitVersionBump(version as string)
    console.log('✅ Committed version bump\n')
  } else {
    console.log('⏭️  Skipping commit (--skip-commit flag)\n')
  }

  // Determine npm tag
  const npmTag = getNpmTag(version as string)
  console.log(`📦 Publishing to npm with tag: ${npmTag}\n`)

  // Run release-it
  try {
    execSync(`bunx release-it ${version} --npm.tag=${npmTag}`, {
      stdio: 'inherit',
    })
    console.log(`\n✅ Successfully released version ${version}!`)
  } catch (error) {
    console.error('\n❌ Release failed. You may need to:')
    console.error("  1. Ensure you're logged in to npm: npm login")
    console.error("  2. Check that the version doesn't already exist")
    console.error('  3. Verify git remote is configured correctly')
    process.exit(1)
  }
}

main()
