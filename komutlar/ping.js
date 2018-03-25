const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, params) => {
    message.reply(':ping_pong: Pong! **'+ client.ping + '** ms');

  
    
   };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun anlık ping durumunu gösterir.',
  usage: 'ping'
};