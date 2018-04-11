const Discord = require('discord.js');
exports.run = function(client, message, args) {
   let messagecount = parseInt(args.join(' ')) + 1;
 
   if(isNaN(args[0])){
        
        message.reply(":no_entry: **Geçersiz sayı girdiniz,Tekrar deneyin.**" ).then(message => { setTimeout(function(){ message.delete(0); }, 3000); })
        
    }
    
    else
        {
    
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
  message.reply(":white_check_mark: Belirlenen miktarda mesaj sildim...").then(message => { setTimeout(function(){ message.delete(0); }, 3000); })
        }
};




exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'temizle <temizlenecek mesaj sayısı>'
};

