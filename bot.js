const Discord = require('discord.js')
require('dotenv').config()

const client = new Discord.Client({
    partials: ['MESSAGE']
})

const BOT_PREFIX = '!#'
const MAKE_MODERATOR_COMMAND = 'make-moderator'

client.on('ready', () => {
    console.log('Our bot is ready to go!!')
})

client.on('message', message => {
    if(message.content === 'ping')
        message.reply('pong')
})

client.on('messageDelete', msg => {
    msg.reply('Deleting messages is not cool bro!')
})

client.on('message', message => {
    if(message.content === 'Rushank is the best'){
        message.react('💖')
        message.reply('You are awesome too!')
    }

    if(message.content === `${BOT_PREFIX}${MAKE_MODERATOR_COMMAND}`){
        message.member.roles.add('796105780394065953')
    }
})

client.login(process.env.BOT_TOKEN)