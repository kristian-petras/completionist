# AGENTS.md - Project Context and Instructions

## Project Overview
This is **Completionist**, a modern Roblox game project built with industry-standard development tools and best practices. The project follows a professional workflow with automated CI/CD, semantic versioning, and comprehensive testing.

## Key Technologies & Tools

### Core Platform
- **Roblox Studio** - Target platform for game development
- **Luau** - Primary programming language (Lua with Roblox extensions)
- **Rojo** - File sync and project management tool

### Package Management
- **Wally** - Roblox package manager (similar to npm)
- **Rokit** - Toolchain manager for Roblox development tools

### Code Quality
- **StyLua** - Code formatter (4 spaces, 120 chars, double quotes)
- **Selene** - Static analysis and linting
- **Pre-commit hooks** - Automated quality checks

### Testing & Documentation
- **Lune** - Lua runtime for testing outside Roblox
- **Moonwave** - Documentation generator (installed via npm)
- **GitHub Pages** - Documentation hosting

### CI/CD
- **Release Please** - Automated semantic versioning and releases
- **GitHub Actions** - CI/CD pipeline

## Project Structure

```
src/
├── client/          # Client-side code (StarterPlayerScripts)
├── server/          # Server-side code (ServerScriptService)
└── shared/          # Shared code (ReplicatedStorage)

tests/               # Test files using Lune
docs-src/           # Documentation source files
Packages/           # Wally dependencies (auto-generated)
.github/workflows/  # CI/CD workflows
```

## Development Commands

### Essential Commands
```bash
# Install all tools and dependencies
rokit install --no-trust-check
wally install

# Build the place file
rojo build -o build/completionist.rbxlx

# Run tests
lune run tests/run-tests.luau

# Format code
stylua src/ tests/

# Lint code
selene src/ tests/

# Generate docs
moonwave build
```

### Package Management
```bash
# Add new dependency to wally.toml, then:
wally install

# Update dependencies
wally update
```

## LLM Instructions

### Code Style Requirements
- **Language**: Use `.luau` extension for all Roblox code
- **Formatting**: 4-space indentation, 120 character lines, double quotes
- **Functions**: Always use explicit return statements
- **Comments**: Use `--` for single line, `--[[]]` for multi-line
- **Naming**: PascalCase for modules, camelCase for functions/variables

### File Organization
- **Client code**: Place in `src/client/` for player-specific functionality
- **Server code**: Place in `src/server/` for game logic and authority
- **Shared code**: Place in `src/shared/` for utilities used by both
- **Tests**: Create in `tests/` with descriptive names ending in `.test.luau`

### Testing Requirements
- Write tests for all new functionality using Lune runtime
- Follow pattern: `local function testName() ... end`
- Use descriptive assertions with proper error messages
- Import shared modules relatively: `require("../src/shared/ModuleName")`

### Dependencies
- **Current packages**: `signal` (events), `comm` (networking)
- **Add new dependencies**: Update `wally.toml` [dependencies] section
- **Version format**: `author/package@version` (e.g., `sleitnick/signal@1.5.0`)

### Workflow Integration
- **Pre-commit hooks** automatically run on commit - ensure code passes
- **Release workflow** triggers on conventional commits to main branch
- **Documentation** auto-builds on doc-related file changes

### Conventional Commits
Use these prefixes for automatic semantic versioning:
- `feat:` - New features (minor version bump)
- `fix:` - Bug fixes (patch version bump)
- `docs:` - Documentation changes
- `refactor:` - Code refactoring
- `test:` - Test additions/updates
- `ci:` - CI/CD changes
- `BREAKING CHANGE:` - Major version bump

### Quality Checks
Before committing, ensure:
1. Code builds successfully: `rojo build`
2. Tests pass: `lune run tests/run-tests.luau`
3. Formatting is correct: `stylua --check src/ tests/`
4. No lint errors: `selene src/ tests/`

### Release Process
1. Make changes with conventional commit messages
2. Release Please automatically creates release PR
3. Review and merge release PR to create tagged release
4. Artifacts automatically attached to GitHub releases

### Common Patterns
- **Module structure**: `local Module = {} ... return Module`
- **Error handling**: Use `assert()` for critical errors, `warn()` for non-fatal
- **Networking**: Use `comm` package for client-server communication
- **Events**: Use `signal` package for custom events and callbacks

### Troubleshooting
- **Build issues**: Check `rokit install` ran successfully
- **Missing packages**: Run `wally install`
- **Test failures**: Ensure Lune is installed via Rokit
- **CI failures**: Check pre-commit hooks pass locally first

### Documentation
- Use `moonwave` style comments for API documentation
- Include examples in docstrings
- Update `docs-src/` for manual documentation
- Documentation auto-deploys to GitHub Pages on doc changes

This project prioritizes code quality, automated workflows, and professional development practices suitable for collaborative Roblox game development.
