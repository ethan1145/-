const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;


client.on('ready', () => {
    console.log('DISCORD BOT LOGIN');
});


client.on('message', (message) => {
    if(message.content === '땅땅아 안녕') {
        message.reply('안녕하십니깡?')
    }
});


client.on('message', (message) => {
    if(message.content === '땅땅아 도움말') {
        message.reply('이 봇은 땅땅이#7001님이 제작하였고성격이좀나쁘지만귀엽습니다')
    }
});


client.on('message', (message) => {
    if(message.content === '땅땅아 심심해') {
        message.reply('심심하면 잠이나 쳐 자십찌오')
    }
});


client.on('message', (message) => {
    if(message.content === '땅땅아 밥줘') {
        message.reply('지롤하지마십찌오')
    }
});


client.on('message', (message) => {
    if(message.content === '땅땅아 기분이어때?') {
        message.reply('졸림니땅')
    }
});


client.on('message', (message) => {
    if(message.content === '땅땅아 내가왔다') {
        message.reply('왜오셨습니깡?')
    }
});


client.on('message', (message) => {
    if(message.content === '땅땅아 나좋아?') {
        message.reply('하나도 좋지않습니땅')
    }
});


client.on('message', (message) => {
    if(message.content === '땅땅아 나졸려') {
        message.reply('저도 졸림니땅')
    }
});


client.on('message', (message) => {
    if(message.content === '땅땅아 놀아줘') {
        message.reply('귀찬습니땅! 혼자서노십찌오!')
    }
});


client.on('message', (message) => {
    if(message.content === '땅땅아 바보') {
        message.reply('찌발련아 제가왜바보입니깡? 바보는당신이지않습니깡?')
    }
});


client.on('message', (message) => {
    if(message.content === '땅땅아 나멋져?') {
        message.reply('🤮너무 못생겼습니땅!')
    }
});


client.on('message', (message) => {
    if(message.content === '땅땅아 잠수') {
        message.reply('님이 잠수가되었습니땅!')
    }
});

client.on('message', (message) => {
    if(message.content === '땅땅아 잠수끝') {
        message.reply('님이 잠수를  끝내냈습니땅!')
    }
});

client.on('message', (message) => {
    if(message.content === '땅땅아') {
        message.reply('절불렀습니깡?')
    }
});

client.login(token);