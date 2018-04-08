const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, params) => {

  const sunucubilgi = new Discord.RichEmbed()
        
    .setColor('#f1f442')
    .setThumbnail("https://cdn.discordapp.com/avatars/384342647826808832/b453dbf1833b28342ce837a0024f458c.jpg?size=1024")
    .setDescription("Sunucu Bilgieri")
    .addField("Sunucu Adı",message.guild.name,true)
   .addField("Sunucu Sahibi",message.guild.owner,true)
    .addField("Kanal Sayısı",  message.guild.channels.size,true)
	
    .addField("Kullanıcı Sayısı", message.guild.memberCount,true)
    .addField("Rol Sayısı", message.guild.roles.size,true)
    .addField("Açıldığı Tarih",  message.guild.createdAt,true)
    .addField("Afk Süresi",message.guild.afkTimeout,true)
	.addField("Tanımlı Afk Kanalı",message.guild.afkChannel,true)
    .addField("Oluşturulduğu Bölge",message.guild.region,true)
             return message.channel.sendEmbed(sunucubilgi);

        
       
      
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi',
  description: 'OA ON AIR Sunucusu Hakkında Bilgiler Verir.',
  usage: 'sunucubilgi'
};
