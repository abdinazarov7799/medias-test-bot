const TelegramBot = require('node-telegram-bot-api');

const token = '6556043828:AAGTY4f7KnLaYnq7SSIDHaCGIqwlMW7EVcg';

const bot = new TelegramBot(token ,{ polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId,'aa');
})