const Discord = require('discord.js');


exports.run = (client, message, args) => {
    message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Komut giriişi').setDescription('Kurulumları kabul ediyormusunuz.').setFooter('Bu eylemi onaylıyorsan "Evet" yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'Evet', {
max: 1,
time: 30000,
errors: ['time'],
})
.then((collected) => {
        message.guild.createChannel(`öneri-komut`);
        message.guild.createChannel(`logs`);
        message.guild.createChannel(`yonetim-sohbet⚠`);

        message.channel.send(`Gerekli kanallar başarılı bir şekilde oluşturuldu.`);
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'kurulum',
  description: 'Sunucu Hakkında Bilgi Verir.',
  usage: 'sunucubilgi'
};
