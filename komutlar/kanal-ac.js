const Discord = require('discord.js');


exports.run = (client, message, args) => {
    let kanalisim = args.slice(0).join(' ');
    if(!kanalisim) return message.channel.send(':x: **Lütfen Bir Kanal İsmi Yazın.**');

        message.guild.createChannel(`${kanalisim}`);

        message.channel.send(`${kanalisim} Adlı Kanal Oluşturuldu !`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'kanalaç',
  description: 'Sunucu Hakkında Bilgi Verir.',
  usage: 'sunucubilgi'
};
