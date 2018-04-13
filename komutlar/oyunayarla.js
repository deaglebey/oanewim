const Discord = require('discord.js');
exports.run = function(client, message, args) {
   
  var argresult=args.join (' ');
 if(argresult<=0 ){
  
  message.channel.send(":no_entry: Lütfen ayarlamam için oyun ismi gir..").then(message => { setTimeout(function(){ message.delete(0); }, 7000); });
    
    
 }
    else
        {
            client.user.setGame(argresult);
            message.channel.send(":white_check_mark: Oyun ayarlandı...");
        }
    
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
