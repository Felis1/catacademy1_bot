const { Telegraf } = require('telegraf')

const bot = new Telegraf('1446411020:AAHhFjr1onQ6dIyBEAEbDUPITKdY1tfYPIw');
bot.start((ctx) => {
    ctx.reply('Send us the screenshot 📄 of your payment 💰 and wait for further instructions. We will send them in next few 🕐 hours. Thank you very much, and will see you on the Course soon!😻😽');
    ctx.replyWithSticker('CAACAgIAAxkBAAKG5F_cbrrw__ecLqMM6mBqQ06l40fOAAIIAAPp2BMoePnrnGhu-XEeBA');
});

bot.launch();