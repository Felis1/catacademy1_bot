const { Telegraf } = require('telegraf');
const { wakeDyno } = require('heroku-keep-awake');
const express = require('express');
const expressApp = express()
const bot = new Telegraf('1446411020:AAHhFjr1onQ6dIyBEAEbDUPITKdY1tfYPIw');
const PORT = process.env.PORT || 3000;
const DYNO_URL = 'https://catacademy-bot.herokuapp.com/';
expressApp.listen(PORT, () => {
    wakeDyno(DYNO_URL);
    bot.start((ctx) => {
        ctx.reply('Send us the screenshot 📄 of your payment 💰 and wait for further instructions. We will send them in next few 🕐 hours. Thank you very much, and will see you on the Course soon!😻😽');
        ctx.replyWithSticker('CAACAgIAAxkBAAKG5F_cbrrw__ecLqMM6mBqQ06l40fOAAIIAAPp2BMoePnrnGhu-XEeBA');
    });
});

bot.launch();
