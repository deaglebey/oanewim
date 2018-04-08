const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, params) => {

   const songuncelleme = new Discord.RichEmbed()
      
       const member = client.users.find("id", "327050092957794316");
      const botbilgi = new Discord.RichEmbed()
      
      
      
      .setThumbnail("https://cdn.discordapp.com/avatars/384342647826808832/b453dbf1833b28342ce837a0024f458c.jpg?size=1024")
      
      .setAuthor("OA Premium | Bot Bilgi", "https://cdn.discordapp.com/avatars/384342647826808832/b453dbf1833b28342ce837a0024f458c.jpg?size=1024")
      .setColor("#15f153")
      .addField(">Bot Adı",client.user.username,true)
      .addField(">Bot Geliştirici",'Penia',true)
      .addField(">Bot Prefix",'oa+',true)
	  .addField(">Ping",client.ping +'**ms**',true)
      //.addField("Destek Sunucusu", "https://discord.gg/JtUqjEz")
      //.addField("Davet Linki","http://bit.ly/turkuaz-bot")
      .addField(">Kullanılan Kitaplık Türü",'Discord.js',true)
      .addField(">Oluşturulma Tarihi",client.user.createdAt,true)
      

      .setURL("https://cdn.discordapp.com/avatars/384342647826808832/b453dbf1833b28342ce837a0024f458c.jpg?size=1024")
     
      .setFooter("OA Premium©-2018", "https://cdn.discordapp.com/avatars/384342647826808832/b453dbf1833b28342ce837a0024f458c.jpg?size=1024")

        
       
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
