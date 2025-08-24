# Completionist

A Roblox simulator game built with TypeScript featuring class-based progression, grinding mechanics, and meta-progression through rebirth systems.

## 🎮 Game Concept

Completionist is a simulation game where players:

1. **Choose a Class** - Start with basic classes like Fisherman, Lumberjack, or Miner
2. **Grind & Progress** - Collect resources, gain experience, and improve your character
3. **Rebirth for Meta Upgrades** - Reset progress to gain permanent bonuses and multipliers
4. **Unlock New Content** - Access advanced classes and prestige existing ones
5. **Repeat & Optimize** - Create the perfect progression strategy

### Core Gameplay Loop

```
Select Class → Grind Resources → Level Up → Rebirth → Meta Upgrades → New Classes → Prestige
    ↑                                                                                    ↓
    ←←←←←←←←←←←←←←←←←←←← Repeat with Better Efficiency ←←←←←←←←←←←←←←←←←←←←
```

## 🏗️ Project Structure

This project follows Roblox TypeScript architecture:

- **`src/client/`** - Client-side game logic (UI, input handling, effects)
- **`src/server/`** - Server-side game logic (data persistence, validation, anti-cheat)  
- **`src/shared/`** - Shared utilities, types, and constants used by both client and server

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Roblox Studio](https://create.roblox.com/docs/studio/setting-up-roblox-studio)
- [roblox-ts](https://roblox-ts.com/) (installed via npm)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kristian-petras/completionist.git
   cd completionist
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

4. **Watch for changes during development**
   ```bash
   npm run watch
   ```

### Development Workflow

- **Build**: `npm run build` - Compile TypeScript to Luau
- **Watch**: `npm run watch` - Auto-rebuild on file changes  
- **Test**: `npm test` - Run all tests
- **Lint**: `npm run lint` - Check code style
- **Format**: `npm run format:fix` - Auto-format code

## 🎯 Planned Features

### Classes System
- **Starter Classes**: Fisherman, Lumberjack, Miner
- **Advanced Classes**: Unlocked through progression
- **Class Prestige**: Enhanced versions of mastered classes

### Progression Systems
- **Experience & Levels**: Gain XP through class activities
- **Resource Collection**: Gather class-specific materials
- **Equipment Upgrades**: Better tools for efficiency
- **Skill Trees**: Customize your class abilities

### Meta-Progression
- **Rebirth System**: Reset for permanent bonuses
- **Meta Currency**: Spend on global upgrades
- **Multipliers**: Increase efficiency across all classes
- **Achievement System**: Long-term goals and rewards

### Quality of Life
- **Auto-Collection**: Reduce repetitive clicking
- **Offline Progress**: Continue earning while away
- **Statistics Tracking**: Detailed progress analytics
- **Customization**: Personalize your experience

## 🛠️ Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Follow** the code style guidelines in `AGENTS.md`
4. **Add** tests for new functionality
5. **Commit** using [conventional commits](https://conventionalcommits.org/)
6. **Push** to your branch (`git push origin feature/amazing-feature`)
7. **Open** a Pull Request

### Code Standards

- TypeScript with strict typing
- 4-space indentation, double quotes
- Comprehensive test coverage (70%+ functions/lines)
- Biome for linting and formatting
- Pre-commit hooks enforce code quality

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

- **Issues**: [GitHub Issues](https://github.com/kristian-petras/completionist/issues)
- **Discussions**: [GitHub Discussions](https://github.com/kristian-petras/completionist/discussions)

---

*Built with ❤️ using [roblox-ts](https://roblox-ts.com/) and modern TypeScript tooling.*