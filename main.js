const TelegramBot = require('node-telegram-bot-api');
const {isEqual} = require("lodash");
const { Sequelize } = require('sequelize');

const token = '6556043828:AAGTY4f7KnLaYnq7SSIDHaCGIqwlMW7EVcg';
const webAppUrl = 'https://mediasolutions.uz/';
const bot = new TelegramBot(token ,{ polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (isEqual(text,'/start')){
        await bot.sendMessage(chatId,'Xush kelibsiz',{
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Ilovani ochish', web_app: {url: webAppUrl}}]
                ]
            }
        });
    }
})
