# 🤖 WhitelistBot

Telegram bot for managing Minecraft server whitelist via RCON.

## 📋 Description

WhitelistBot allows adding and removing players from the Minecraft server whitelist through a convenient Telegram interface. The bot uses RCON to execute commands on the server and has a Telegram ID-based access control system.

## 🚀 Features

- ✅ Add players to whitelist (`/add NICKNAME`)
- ❌ Remove players from whitelist (`/remove NICKNAME`)
- 🔒 Access control based on Telegram ID
- 📊 Display server responses in Telegram
- 🔐 Secure storage of sensitive data in `.env`

## 📦 Installation

1. Clone the repository or download project files
2. Install dependencies using Bun:

```bash
bun install
```

## ⚙️ Configuration

1. Copy `env.example` to `.env`:

```bash
cp env.example .env
```

2. Open `.env` and fill in the required parameters:

```env
# Telegram bot token (get it from @BotFather)
TOKEN=your_bot_token_here

# Minecraft server RCON configuration
RCON_HOST=your_minecraft_server_ip
RCON_PORT=25575
RCON_PASSWORD=your_rcon_password

# List of allowed Telegram IDs (comma-separated)
ALLOWED_USER_IDS=123456789,987654321
```

### How to get a bot token:

1. Find [@BotFather](https://t.me/BotFather) on Telegram
2. Send the command `/newbot`
3. Follow the instructions to create a bot
4. Copy the received token to the `.env` file

### How to configure RCON on Minecraft server:

1. Open `server.properties`
2. Set the parameters:

```properties
enable-rcon=true
rcon.port=25575
rcon.password=your_password
```

3. Restart the server

### How to find your Telegram ID:

1. Find [@userinfobot](https://t.me/userinfobot) on Telegram
2. Send the command `/start`
3. Copy your ID to `.env`

## ▶️ Running

```bash
bun run index.ts
```

If everything is configured correctly, you will see the message:

```
Bot is running
```

## 💻 Usage

### Add a player to whitelist:

```
/add PlayerName
```

### Remove a player from whitelist:

```
/remove PlayerName
```

## 🛠️ Technologies

- **Bun** - JavaScript runtime and package manager
- **Grammy** - Telegram Bot API framework
- **rcon-node** - RCON client for Minecraft
- **TypeScript** - Programming language

## 📝 Project Structure

```
WhitelistBot/
├── index.ts          # Main bot file
├── .env              # Environment variables (not in git)
├── env.example       # Template for .env
├── .gitignore        # Ignored files
├── package.json      # Project dependencies
├── tsconfig.json     # TypeScript configuration
└── README.md         # This file
```

## 🔒 Security

⚠️ **IMPORTANT**: Never commit the `.env` file to the repository!

The `.env` file is already added to `.gitignore` to protect your sensitive data.

## 🤝 License

Project created for personal use.

## 📞 Support

If you encounter any issues or have questions, create an Issue in the repository.

---

Created with ❤️ using [Bun](https://bun.sh) and [Grammy](https://grammy.dev)
