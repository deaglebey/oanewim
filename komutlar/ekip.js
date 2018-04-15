const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, params) => {

   const ekip = new Discord.RichEmbed()
      
       .setTitle("OA ON AIR Yönetim Ekibi..")
   .setColor("ea125e")
   .addField("Discord ve Youtube Kanal Sahibi","》Onur Efser\n》Aslı Efser")
        .addField("Discord Yönetimi","》Penia(Bot geliştirici ve sunucu düzenleme)\n》Berk(Bot geliştirici ve sunucu düzenleme)")
   .addField("Fate Ekibi","》Kadir Eren\n》Bahriye Eren\n》Sanane Bro(Hasan)")
   .addField("Youtube Mod","》Ecem")
   
       
      return message.channel.sendEmbed(ekip);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ekip',
  description: 'Yetkililer hakkında bilgi verir.',
  usage: 'ekip'
};
