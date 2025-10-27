// Import required modules
import { Bot } from "grammy";
import { Game, Rcon } from "rcon-node";

// Configuration from environment variables
const TOKEN = process.env.TOKEN!;
const RCON_HOST = process.env.RCON_HOST!;
const RCON_PORT = parseInt(process.env.RCON_PORT!);
const RCON_PASSWORD = process.env.RCON_PASSWORD!;

// List of allowed users by ID
const allowedUserIds = process.env
  .ALLOWED_USER_IDS!.split(",")
  .map((id) => parseInt(id.trim()));

const rcon = await Rcon.connect({
  host: RCON_HOST,
  port: RCON_PORT,
  password: RCON_PASSWORD,
  game: Game.MINECRAFT,
});

// Create bot instance
const bot = new Bot(TOKEN);

// Function to execute commands via RCON
const executeRconCommand = (command: string) => {
  return rcon.send(command);
};

// Check user access permission
function isUserAllowed(userId: number) {
  return allowedUserIds.includes(userId);
}

// Handle /add NICKNAME command with access check
bot.command("add", async (ctx) => {
  if (!ctx.message) {
    return ctx.reply("Please enter a nickname!");
  }

  const userId = ctx.message.from.id;
  if (!isUserAllowed(userId)) {
    return ctx.reply("You don't have permission to use this command.");
  }

  const args = ctx.message.text.split(" ");
  if (args.length < 2) {
    return ctx.reply("Please specify a nickname. Usage: /add NICKNAME");
  }
  const nickname = args[1];
  try {
    const response = await executeRconCommand(`swl add ${nickname}`);
    await ctx.reply(
      `Command executed: swl add ${nickname}\nServer response:\n\`\`\`bash\n${response}\n\`\`\``
    );
  } catch (error) {
    await ctx.reply("An error occurred while executing the command.");
    console.log(error);
  }
});

// Handle /remove NICKNAME command with access check
bot.command("remove", async (ctx) => {
  if (!ctx.message) {
    return ctx.reply("Please enter a nickname!");
  }

  const userId = ctx.message.from.id;
  if (!isUserAllowed(userId)) {
    return ctx.reply("You don't have permission to use this command.");
  }

  const args = ctx.message.text.split(" ");
  if (args.length < 2) {
    return ctx.reply("Please specify a nickname. Usage: /remove NICKNAME");
  }
  const nickname = args[1];
  try {
    const response = await executeRconCommand(`/swl remove ${nickname}`);
    await ctx.reply(
      `Command executed: /swl remove ${nickname}\nServer response:\n\`\`\`bash\n${response}\n\`\`\``
    );
  } catch (error) {
    await ctx.reply("An error occurred while executing the command.");
  }
});

// Start bot
bot.start();
console.log("Bot is running");
