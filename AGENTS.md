# Completionist - Agent Guidelines

## Commands
- **Build**: `npm run build` (uses rbxtsc for Roblox TypeScript)
- **Watch**: `npm run watch` (continuous build)
- **Test**: `npm test` or `jest` (run all tests)
- **Single Test**: `jest path/to/test.ts` or `npm test -- --testPathPattern="GameUtils"`
- **Lint**: `npm run lint` (Biome linter)
- **Format**: `npm run format:fix` (auto-format with Biome)
- **Typecheck**: `npm run typecheck`

## Code Style (Biome Configuration)
- **Formatting**: 4-space indentation, double quotes, 120 character line width
- **Imports**: Auto-organize imports enabled, use absolute imports from `src/` with `@/` alias
- **Types**: Strict TypeScript mode, explicit any warnings, null assertions allowed
- **Naming**: camelCase for variables/functions, PascalCase for classes/interfaces
- **Error Handling**: Prefer explicit error handling over exceptions

## Testing (Jest)
- Test files: `*.test.ts` or `*.spec.ts` in `src/` or `__tests__/` folders  
- Use `@jest/globals` imports: `describe`, `it`, `expect`, `beforeEach`
- Mock setup in `src/__tests__/setup.ts`
- Coverage thresholds: 70% functions/lines/statements, 60% branches

## Project Structure
- Roblox TypeScript project with client/server/shared architecture
- Source code in `src/`, build output in `out/`
- Pre-commit hooks run Biome check and related tests