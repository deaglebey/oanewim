const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, params) => {

   const songuncelleme = new Discord.RichEmbed()
      
      
      
      
      .setAuthor("OA Premium | Son Yapılan Güncellemeler.!", "https://cdn.discordapp.com/avatars/384342647826808832/b453dbf1833b28342ce837a0024f458c.jpg?size=1024")
      .setColor("#15f153")
	  .addField("Son Güncelleme",'*Yardım komutu düzenlendi.\n*Bildir komutunun bugları düzenlendi.!\n*Sunucu iyileştirmeleri ve bot düzenlemesi için Yönetim ekibi anket komutu eklendi.!\n* **oa+kalp** yazarak ekipten size kalp gönderilmesini sağlayabilirsiniz.!\n*ML Komutu Düzeltildi\n*Bildir komutu eklendi,bu komut ile sizlere rahatsızlık veren kullanıcıları Yönetim Ekibimize Rahatlıkla bildirebilirsiniz.!\n*Yeni gelen kullanıcılara özel mesajla karşılama ayarlandı.!')
      
	  
     

      .setTimestamp('')
      .setURL("https://cdn.discordapp.com/avatars/384342647826808832/b453dbf1833b28342ce837a0024f458c.jpg?size=1024")
     
      .setFooter("OA Premium OA ON AIR Sunucusu İçin Özel Kodlanmıştır.! ", "https://cdn.discordapp.com/avatars/384342647826808832/b453dbf1833b28342ce837a0024f458c.jpg?size=1024")

        
       
      return message.channel.sendEmbed(songuncelleme);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'OA Premium Botuna eklenen yeni özellikler ve güncellemeler hakkında bilgi verir.',
  usage: 'yenilikler'
};
