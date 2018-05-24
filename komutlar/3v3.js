const Discord = require('discord.js');
 

exports.run = (client, message, args) => {
    if (!message.guild) {
      return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Eval;').setDescription(message.author.username + ', bu komutu direkt mesajda kullanamazsın.').setFooter('Rahatsız Adam', client.user.avatarURL).setTimestamp()); }
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 3) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('3v3').setDescription(message.author.tag + ', kullanım: r,3v3 <@kullanıcı> <@kullanıcı> <@kullanıcı> .').setFooter('Yiğitler meydanı', client.user.avatarURL).setTimestamp());
    var sans = ["10'a","1'e","20'ye","30'a"]
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
      message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('3v3').setDescription('Savaş başladı!').setFooter('Yiğitlerin  Savaşı yapılıyor.', client.user.avatarURL).setTimestamp())
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('3v3').setDescription('Savaşılıyor Pat Küt.').setFooter('Yiğitlerin  Savaşı yapılıyor.', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('3v3').setDescription('Savaşılıyor Pat Küp.').setFooter('Yiğitlerin  Savaşı yapılıyor.', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('3v3').setDescription('Savaşılıyor Pat küt.').setFooter('Yiğitlerin  Savaşı yapılıyor.', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('3v3').setDescription('Savaş Sonuçlanıyor.').setFooter('Yiğitlerin  Savaşı yapılıyor.', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('3v3').setDescription('Savaş bitti!').setFooter('Yiğitlerin  Savaşı yapılıyor.', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('3v3').setDescription('Savaşın Galibi: **' + user.tag+'** Helal olsun sana Ne Vurdun Be Adımın Canını 100 den **'+ sonuc +'** Kadar Düşürdün Ve Adam Pes Etti.').setImage("https://media1.giphy.com/media/6fReqjdbFYXJu/giphy.gif").setFooter('Savaş yapıldı.', client.user.avatarURL).setTimestamp()))
        };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['savaş', 'kapış'],
  permLevel: 0
};

exports.help = {
  name: 'savas',
  description: 'Seçtiğiniz 3 kişiyi savaştırırsınız.',
  usage: 'r,3v3 <@kullanıcı> <@kullanıcı> <@kullanıcı>'
};
