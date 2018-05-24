const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  var sansl = [":yen:",":moneybag:",":euro:",":gem:",":pound:",":money_with_wings:",":yen:",":moneybag:",":euro:",":gem:",":pound:",":money_with_wings:",":yen:",":moneybag:",":euro:",":gem:",":pound:",":money_with_wings:"];
  var sonucl = sansl[Math.floor((Math.random() * sansl.length))];
  var sansz = [":yen:",":moneybag:",":euro:",":gem:",":pound:",":money_with_wings:",":yen:",":moneybag:",":euro:",":gem:",":pound:",":money_with_wings:",":yen:",":moneybag:",":euro:",":gem:",":pound:",":money_with_wings:"];
  var sonucz = sansz[Math.floor((Math.random() * sansz.length))];
  var sanse = [":yen:",":moneybag:",":euro:",":gem:",":pound:",":money_with_wings:",":yen:",":moneybag:",":euro:",":gem:",":pound:",":money_with_wings:",":yen:",":moneybag:",":euro:",":gem:",":pound:",":money_with_wings:"];
  var sonuce = sanse[Math.floor((Math.random() * sanse.length))];
  var sansr = [":yen:",":moneybag:",":euro:",":gem:",":pound:",":money_with_wings:",":yen:",":moneybag:",":euro:",":gem:",":pound:",":money_with_wings:",":yen:",":moneybag:",":euro:",":gem:",":pound:",":money_with_wings:"];
  var sonucr = sansr[Math.floor((Math.random() * sansr.length))];
  var sansc = [":yen:",":moneybag:",":euro:",":gem:",":pound:",":money_with_wings:",":yen:",":moneybag:",":euro:",":gem:",":pound:",":money_with_wings:",":yen:",":moneybag:",":euro:",":gem:",":pound:",":money_with_wings:"];
  var sonucc = sansc[Math.floor((Math.random() * sansc.length))];
  var sansf = [":yen:",":moneybag:",":euro:",":gem:",":pound:",":money_with_wings:",":yen:",":moneybag:",":euro:",":gem:",":pound:",":money_with_wings:",":yen:",":moneybag:",":euro:",":gem:",":pound:",":money_with_wings:"];
  var sonucf = sansf[Math.floor((Math.random() * sansf.length))];
  var sanss = [":yen:",":moneybag:",":euro:",":gem:",":pound:",":money_with_wings:",":yen:",":moneybag:",":euro:",":gem:",":pound:",":money_with_wings:",":yen:",":moneybag:",":euro:",":gem:",":pound:",":money_with_wings:"];
  var sonucs = sanss[Math.floor((Math.random() * sanss.length))];
  var sans = [":yen:",":moneybag:",":euro:",":gem:",":pound:",":money_with_wings:",":yen:",":moneybag:",":euro:",":gem:",":pound:",":money_with_wings:",":yen:",":moneybag:",":euro:",":gem:",":pound:",":money_with_wings:"];
  var sonuc = sans[Math.floor((Math.random() * sans.length))];
  var sansm = [":yen:",":moneybag:",":euro:",":gem:",":pound:",":money_with_wings:",":yen:",":moneybag:",":euro:",":gem:",":pound:",":money_with_wings:",":yen:",":moneybag:",":euro:",":gem:",":pound:",":money_with_wings:"];
  var sonucm = sansm[Math.floor((Math.random() * sansm.length))];
  message.channel.send(`**| :slot_machine:  SLOTS  |**\n **------------------**\n**${sonuc} : ${sonucl} : ${sonucz}**\n**${sonuce} : ${sonucr} : ${sonucc}  <**\n**${sonucf} : ${sonucm} : ${sonucs}**\n **------------------**`)
  .then(nmsg => nmsg.edit(`**|  :slot_machine:  SLOTS  |**\n **------------------**\n**${sonucz} : ${sonucl} : ${sonuc}**\n**${sonuce} : ${sonucc} : ${sonucf}  <**\n**${sonucr} : ${sonucm} : ${sonucs}**\n **------------------**`))
  .then(nmsg => nmsg.edit(`**|  :slot_machine:  SLOTS  |**\n **------------------**\n**${sonucs} : ${sonuc} : ${sonucc}**\n**${sonucf} : ${sonuce} : ${sonucm}  <**\n**${sonucr} : ${sonucz} : ${sonucl}**\n **------------------**`))
  .then(nmsg => nmsg.edit(`**| :slot_machine:  SLOTS |**\n **------------------**\n**${sonucz} : ${sonucl} : ${sonucs}**\n**${sonucl} : ${sonuce} : ${sonucc}  <**\n**${sonucf} : ${sonuc} : ${sonucs}**\n **------------------**\n**|     Oyun bitti    |**`))



};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'slot',
    description: 'Tüm komutları gösterir.',
    usage: 'yardım [komut]'
  };
