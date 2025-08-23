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

## Post-Implementation Checklist
After implementing any feature, bugfix, or significant change, **ALWAYS** run through this checklist:

### Code Quality
- [ ] Run `npm run build` - build passes without errors
- [ ] Run `npm run typecheck` - no TypeScript errors
- [ ] Run `npm run lint` - no linting errors
- [ ] Run `npm test` - all tests pass
- [ ] Code follows established patterns and naming conventions
- [ ] Added appropriate JSDoc comments for public APIs
- [ ] No hardcoded values - use constants or configuration

### Testing
- [ ] Added tests for new functionality (maintain coverage thresholds)
- [ ] Updated existing tests if behavior changed
- [ ] Edge cases and error conditions are tested
- [ ] Mock external dependencies appropriately

### Documentation & Structure
- [ ] Updated relevant README/documentation if needed
- [ ] **If project structure changed**: Update this AGENTS.md file
- [ ] **If new commands/scripts added**: Update Commands section above
- [ ] **If new dependencies added**: Ensure they align with project goals
- [ ] **If new patterns introduced**: Document in Code Style section

### Integration
- [ ] Changes work in both client and server environments (if applicable)
- [ ] No breaking changes to existing APIs (or properly documented)
- [ ] Consider impact on Roblox-specific constraints and limitations

**Important**: If you modified project structure, configuration, or established patterns, update this AGENTS.md file to reflect those changes for future agents.