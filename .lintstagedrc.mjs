export default {
  'src/**/*.{js,ts,jsx,tsx}': ['bun run test:husky'],
  '**/*.{js,mjs,cjs,jsx,ts,mts,tsx,md,json,yml,toml,yaml}': [
    'bun run lint',
    'bun run format:check',
  ],
  'src/**/*.css': ['bun run lint:css', 'bun run format:check'],
}
