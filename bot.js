// Telegraf Module
const Telegraf = require("telegraf");

// Telegram KEY
const key = process.env.TG_KEY;

// Bot Initialization
const bot = new Telegraf(key);

// Bot Settings -- Default commands
bot.start((ctx) => {
  console.log(ctx.from);
  console.log(ctx.message);
  console.log(ctx.chat);
  console.log(ctx.updateSubTypes);
  ctx.reply("Hola, " + ctx.from.first_name);
});
bot.help((ctx) => {
  ctx.reply("Help");
});
bot.settings((ctx) => {
  ctx.reply("Settings");
});

// Personal commands
bot.command(["mycommand", "Mycommand", "MyCommand"], (ctx) => {
  ctx.reply("my command");
});

bot.hears("computer", (ctx) => {
  ctx.reply("Hey Im selling a computer");
});

/*
bot.on("text", (ctx) => {
  ctx.reply("Estast escribiendo...");
});
 */

bot.on("sticker", (ctx) => {
  ctx.reply("Oh te gustan los stickers ");
});

// Bot Launcher
bot.launch();
