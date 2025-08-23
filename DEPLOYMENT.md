# Deployment Setup Guide

This guide walks you through setting up local deployment for the Completionist project using Mantle.

## Prerequisites

- Node.js 20+ installed
- Git repository cloned
- Roblox account with game creation permissions

## Step 1: Install Foreman (Roblox Tool Manager)

### macOS
```bash
brew install roblox/tap/foreman
```

### Windows
1. Download the latest release from [Foreman GitHub Releases](https://github.com/Roblox/foreman/releases)
2. Extract and add to your PATH

### Linux
```bash
# Download latest release and add to PATH
curl -L https://github.com/Roblox/foreman/releases/latest/download/foreman-linux.zip -o foreman.zip
unzip foreman.zip
sudo mv foreman /usr/local/bin/
```

## Step 2: Install Mantle

```bash
# Install Mantle via Foreman
foreman install
```

## Step 3: Set Up Environment Variables

```bash
# Copy the example environment file
cp .env.example .env
```

Edit `.env` and fill in your values:

### Getting ROBLOSECURITY Cookie

1. Log into Roblox in your browser
2. Open Developer Tools (F12)
3. Go to **Application** → **Storage** → **Cookies** → **roblox.com**
4. Find `.ROBLOSECURITY` cookie and copy its value
5. Paste into `.env` file

### Getting Open Cloud API Key

1. Go to [Roblox Creator Dashboard](https://create.roblox.com/)
2. Navigate to **Open Cloud** → **API Keys**
3. Click **Create API Key**
4. Configure permissions:
   - `universe-places:write` (required for place publishing)
   - `asset:read` and `asset:write` (if uploading assets)
5. Copy the generated key and paste into `.env` file

### Getting Universe and Place IDs

1. Go to [Creator Dashboard](https://create.roblox.com/)
2. Click on **Creations**
3. Find your game - the URL shows your Universe ID: `create.roblox.com/creations/experiences/{UNIVERSE_ID}`
4. Click into your game → **Places** → the Place ID is shown for each place

## Step 4: Test Local Deployment

```bash
# Build and deploy to development environment
npm run deploy:dev

# Or deploy to production (be careful!)
npm run deploy:prod
```

## Step 5: Set Up GitHub Secrets (For Automatic Deployment)

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Add these secrets:
   - `ROBLOSECURITY`: Your Roblox authentication cookie
   - `ROBLOX_OPEN_CLOUD_API_KEY`: Your Open Cloud API key

## Deployment Environments

### Development (`dev`)
- **Access**: Private
- **Naming**: `completionist-dev-{feature}`
- **Use for**: Testing changes before release

### Production (`prod`) 
- **Access**: Public
- **Naming**: `completionist`
- **Use for**: Live game releases (automated via GitHub Actions)

## Commands Reference

```bash
# Development
npm run build:place      # Build TypeScript + generate place file
npm run deploy:dev       # Deploy to dev environment
npm run serve            # Start Rojo sync server for Studio

# Production (use with caution)
npm run deploy:prod      # Deploy to production

# Mantle commands (after foreman install)
mantle deploy --environment dev    # Deploy to specific environment
mantle state show                  # Show current deployment state
mantle --help                     # Show all available commands
```

## Troubleshooting

### "Invalid ROBLOSECURITY" Error
- Your cookie may have expired - get a fresh one
- Make sure you copied the entire cookie value
- Try logging out and back into Roblox

### "Insufficient permissions" Error
- Check your Open Cloud API key has the right permissions
- Make sure you're the owner of the target universe/place

### "Place file not found" Error
- Run `npm run build:place` first
- Check that `completionist.rbxl` exists in project root

### Foreman Installation Issues
- Make sure Foreman is in your PATH
- Try running `foreman --version` to verify installation
- Check [Foreman documentation](https://github.com/Roblox/foreman) for help

## Security Notes

- **Never commit your `.env` file** - it contains sensitive credentials
- **Rotate your ROBLOSECURITY cookie regularly** - especially if shared
- **Use separate API keys** for development and production if possible
- **Limit API key permissions** to only what's needed

## Next Steps

Once deployment is working:
1. Create a test game/universe for development
2. Set up separate dev/prod environments with different credentials
3. Explore Mantle's advanced features (badges, developer products, etc.)
4. Set up monitoring and alerts for deployment failures