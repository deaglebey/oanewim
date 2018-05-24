const Discord = require('discord.js');

exports.run = (client, message, args, tools) => {
const emoji = message.guild.emojis.map(e=>e.toString()).join(" | ")
message.channel.send(emoji)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["emoji"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'emojiler',
    description: 'Sunucunun emojilerini atar.',
    usage: 'emojiler'
  };    
