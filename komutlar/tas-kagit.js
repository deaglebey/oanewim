const Discord = require('discord.js');
const client = new Discord.Client();
const Cleverbot = require('cleverbot-node');
const clbot = new Cleverbot;

exports.run = (client, message, args) => {
    let guild = message.guild
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('Komutu Beni Etiketleyerek Kullan.').catch(console.error);
        if (reason.length < 1) return message.reply('Taş,Kağıt Yada Makası Seçmelisin.').catch(console.error);
          var sans = ["Taş","Kağıt","Makas"];
          var sonuc = sans[Math.floor((Math.random() * sans.length))];
          const embed = new Discord.RichEmbed()
          .addField(`***___Benim Cevabım:___***`, `${sonuc}`)
          .addField('**__Senin Cevabın:__**',reason)
          .setColor("RANDOM")
          return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['t-k-m'],
  permLevel: 0
};

exports.help = {
  name: 'taş-kağıt-makas',
  description: 'Botla Taş-Kağıt-Makas Oynarsınız.',
  usage: 'taş-kağıt-makas <botu etiketle> <taş,kağıt veya makası şeç>'
};
