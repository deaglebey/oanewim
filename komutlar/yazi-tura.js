const yazitura = require('../yazi-tura.json');
var Discord =  require("discord.js");
exports.run = function(client, message, args){
    message.channel.send (yazitura[Math.floor(Math.random() * 2) +1])
  

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yazı-tura',
  description: 'Yazı-Tura atar.',
  usage: 'yazı-tura'
};
