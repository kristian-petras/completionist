# Completionist
[![Release](https://github.com/kristian-petras/completionist/actions/workflows/release.yml/badge.svg)](https://github.com/kristian-petras/completionist/actions/workflows/release.yml)
[![Documentation](https://github.com/kristian-petras/completionist/actions/workflows/publish-docs.yml/badge.svg)](https://github.com/kristian-petras/completionist/actions/workflows/publish-docs.yml)
[![Dependabot](https://badgen.net/badge/Dependabot/enabled/green?icon=dependabot)](https://dependabot.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Wally](https://img.shields.io/badge/Wally-1.0.0-blue.svg)](https://wally.run/package/kristian-petras/completionist)

A modern Roblox game built with industry-standard development tools and best practices.

## Quick Start

### Prerequisites
- [Roblox Studio](https://create.roblox.com/docs/studio/setting-up-roblox-studio)
- [Git](https://git-scm.com/)

### Development Setup
```bash
# Clone the repository
git clone https://github.com/kristian-petras/completionist.git
cd completionist

# Install development tools
rokit install --no-trust-check

# Install dependencies
wally install

# Build the place file
rojo build -o completionist.rbxlx
```

Open `completionist.rbxlx` in Roblox Studio and start the development server:
```bash
rojo serve
```

## Documentation

- **📖 API Documentation**: https://kristian-petras.github.io/completionist/
- **🛠️ Development Guide**: See [AGENTS.md](./AGENTS.md) for comprehensive development instructions
- **📋 Contributing**: Follow conventional commits for automatic versioning

## Project Structure

```
src/
├── client/    # Client-side code
├── server/    # Server-side code
└── shared/    # Shared utilities

tests/         # Lune test files
docs-src/      # Documentation source
```

## Technology Stack

- **Roblox Studio** - Game development platform
- **Luau** - Programming language
- **Rojo** - Project management and sync
- **Wally** - Package manager
- **Rokit** - Toolchain manager
- **Release Please** - Automated versioning
- **GitHub Actions** - CI/CD pipeline

## Quality Assurance

This project maintains high code quality through:
- Automated formatting with StyLua
- Static analysis with Selene
- Comprehensive testing with Lune
- Pre-commit hooks and CI/CD validation
- Semantic versioning with conventional commits

## License

This project is licensed under the [MIT License](LICENSE).
