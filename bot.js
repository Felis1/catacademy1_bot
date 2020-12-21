const { Telegraf } = require('telegraf');
const bot = new Telegraf('1446411020:AAHhFjr1onQ6dIyBEAEbDUPITKdY1tfYPIw');
bot.start((ctx) => {
      ctx.reply('Please send us a screenshot 📄 of your payment 💰 and your phone ☎️ number. We will contact you ASAP. Thank you very much, and we will see you in the course!😻😽');
      ctx.replyWithSticker('CAACAgIAAxkBAAKG5F_cbrrw__ecLqMM6mBqQ06l40fOAAIIAAPp2BMoePnrnGhu-XEeBA');
});

bot.launch();
