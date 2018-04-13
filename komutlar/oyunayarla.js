const Discord = require('discord.js');
exports.run = function(client, message, args) {
   
  var argresult=args.join (' ');

            client.user.setGame(argresult);
            message.channel.send(":white_check_mark: Oyun ayarlandı...");then(message => { setTimeout(function(){ message.delete(0); }, 7000); });
       
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
