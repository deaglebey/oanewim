const Discord = require('discord.js');
exports.run = function(client, message, args) {
   let messagecount = parseInt(args.join(' ')) + 1;
 
   if(isNaN(args[0])){
        
        message.reply(":no_entry: **Geçersiz sayı girdiniz,Tekrar deneyin.**" )
    }
    
    else
        {
    
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
  message.reply(":white_check_mark:" + args + " adet mesaj sildim.").then(message => { setTimeout(function(){ message.delete(0); }, 3000); })
        }
};




exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'temizle' || 'sil',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'temizle <temizlenecek mesaj sayısı>'
};
