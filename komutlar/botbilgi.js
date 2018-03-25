const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, params) => {

   const songuncelleme = new Discord.RichEmbed()
      
       const member = client.users.find("id", "327050092957794316");
      const botbilgi = new Discord.RichEmbed()
      
      
      
      .setThumbnail("https://cdn.discordapp.com/avatars/384342647826808832/b453dbf1833b28342ce837a0024f458c.jpg?size=1024")
      
      .setAuthor("OA Premium | Bot Bilgi", "https://cdn.discordapp.com/avatars/384342647826808832/b453dbf1833b28342ce837a0024f458c.jpg?size=1024")
      .setColor("#15f153")
      .addField("Bot Adı",client.user.username)
      .addField("Bot Geliştirici",'Penia')
      .addField("Bot Prefix",'oa+')
	  .addField("Ping",client.ping +'**ms**')
      //.addField("Destek Sunucusu", "https://discord.gg/JtUqjEz")
      //.addField("Davet Linki","http://bit.ly/turkuaz-bot")
      .addField("Kullanılan Kitaplık Türü",'Discord.js')
      .addField("Oluşturulma Tarihi",client.user.createdAt)
      

      .setURL("https://cdn.discordapp.com/avatars/384342647826808832/b453dbf1833b28342ce837a0024f458c.jpg?size=1024")
     
      .setFooter("OA Premium OA ON AIR Sunucusu İçin Özel Kodlanmıştır.!|Developer:Penia|", "https://cdn.discordapp.com/avatars/384342647826808832/b453dbf1833b28342ce837a0024f458c.jpg?size=1024")

        
       
      return message.channel.sendEmbed(botbilgi);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botbilgi',
  description: 'OA Premium Botu hakkında sizlere bilgi verir.',
  usage: 'botbilgi'
};
