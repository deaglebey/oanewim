const Discord = require('discord.js');
exports.run = function(client, message, args) {
    const avatar=new Discord.RichEmbed()
    .setAuthor( message.author.username + "  Adlı kişinin avatarı görüntüleniyor..")
    .setImage(message.author.avatarURL)
    .setFooter("OA Premium")
    return message.channel.send(avatar);
   
 
    
};




exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Avatarınızı görüntüler.',
  usage: 'avatar'
};
