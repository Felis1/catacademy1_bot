<<<<<<< HEAD
const { Telegraf } = require('telegraf');
const express = require('express');
const expressApp = express()
const bot = new Telegraf('1446411020:AAHhFjr1onQ6dIyBEAEbDUPITKdY1tfYPIw');
const PORT = process.env.PORT || 3000;
expressApp.listen(PORT, () => {
=======
const { Telegraf } = require('telegraf')

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    const bot = new Telegraf('1446411020:AAHhFjr1onQ6dIyBEAEbDUPITKdY1tfYPIw');
>>>>>>> b8821e847ad55507524aa22a21448a38dbce1eeb
    bot.start((ctx) => {
        ctx.reply('Send us the screenshot 📄 of your payment 💰 and wait for further instructions. We will send them in next few 🕐 hours. Thank you very much, and will see you on the Course soon!😻😽');
        ctx.replyWithSticker('CAACAgIAAxkBAAKG5F_cbrrw__ecLqMM6mBqQ06l40fOAAIIAAPp2BMoePnrnGhu-XEeBA');
    });
});

bot.launch();
