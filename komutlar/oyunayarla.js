const Discord = require('discord.js');
exports.run = function(client, message, args) {
   
  var argresult=args.join (' ');
 
    
            client.user.setGame(argresult);
           
};




exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'oyunayarla' || 'ayarla',
  description: 'Oyunu ayarlar.',
  usage: 'Oyunu ayarlar.'
};
