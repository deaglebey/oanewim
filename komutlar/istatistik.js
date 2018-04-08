const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, params) => {

  const istatistik = new Discord.RichEmbed()
        
    .setColor('#f1f442')
    .setThumbnail("https://cdn.discordapp.com/avatars/384342647826808832/b453dbf1833b28342ce837a0024f458c.jpg?size=1024")
    .setAuthor("OA Premium İstatistikler")
    .addField("Bot Adı",client.user.username,true)
    .addField("Bellek Kullanımı",(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)+" MB **Kullanılıyor...**")
   .addField("Total Kullanıcı",client.users.size,true)
   .addField("Ping",client.ping+"Ms",true)
    .addField("Yapımcı","Penia",true)
             return message.channel.sendEmbed(istatistik);

        
       
      
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Bot`un istatistik bilgierini verir.',
  usage: 'istatistik'
};


