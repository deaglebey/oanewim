const { CommandoClient, SQLiteProvider } = require('discord.js-commando');
path = require('path');
path = require('path');
sqlite = require('sqlite');
const { RichEmbed } = require('discord.js');
const snekfetch = require('snekfetch');
const config = require( path.resolve( __dirname, "config.json" ) );
class SvOClient extends CommandoClient {
	constructor(options) {
		  super(options);
		  	this.config = require('./config');
		  	this.queue = new Map();
	}
}

const client = new CommandoClient({

    commandPrefix: config.prefix,
    unknownCommandResponse: false,
    owner: config.owner,
    disableEveryone: true
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['admin', 'Admin Komutları'],
    ['bilgi', 'Bilgi Komutları'],
    ['eglence', 'Eğlence Komutları'],
    ['kullanici','Kullanıcı Komutları'],
    ['mod', 'Mod Komutları'],
    ['minecraft','Minecraft Komutları'],
    ['muzik','muzik']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
  console.log(`BOT ${client.user.tag} İSMİ İLE GİRİŞ YAPTI!
               SYSTEM ONLINE.
               PENIA BOT SISTEMLERI 2018-2019
               KOMUTLAR BAŞARILI BİR ŞEKİLDE YÜKLENDİ.

`);
    sqlite.open(path.join(__dirname, "afk.sqlite3")).then((db) => {
  client.setProvider(new SQLiteProvider(db));
});

     client.on('message', msg => {
    if (!msg.guild) return;
    const veri = client.provider.get(msg.guild.id, 'linkEngel', []);
    if (veri !== true) return;
    if (veri === true) {
		const dclink = ["discord.gg", "discord.me", "discordapp.com", "discord.io", "discord.tk"];
		if (dclink.some(word => msg.content.includes(word))) {
			if (!msg.member.hasPermission("BAN_MEMBERS")) {
				return;
			}
		}
		var regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
		if (regex.test(msg.content)==true) {
			if (!msg.member.hasPermission("BAN_MEMBERS")) {
				msg.delete();

				return msg.reply(':no_entry: Reklam yapmamalısın,Reklam engelleme özelliği **Açık.!**').then(msg => msg.delete(3000));
			} else {
				return;
			};
		} else {
			return;
		};
    };
  })
client.on('messageUpdate', async (oldMsg, newMsg) => {
		if (!newMsg.guild) return;
		if (newMsg.author.bot) return;
		//ANTIREKLAM
		const antiadvariable = client.provider.get(newMsg.guild.id, 'reklamEngel', []);
		if (antiadvariable ==! true) return;
		if (antiadvariable === true) {
		const swearWords = ["discord.gg", "discord.me", "discordapp.com", "discord.io", "discord.tk"];
			if (swearWords.some(word => newMsg.content.toLowerCase().includes(word))) {
				if (!newMsg.member.hasPermission("ADMINISTRATOR")) {
					newMsg.delete();
					return newMsg.reply('Reklam yapmamalısın!').then(reply => reply.delete(3000));
				}
			}
		}
	})
client.on('message', async msg => {
	    if (!msg.guild) return;
	    const veri = client.provider.get(msg.guild.id, 'reklamEngel', []);
	    const veri2 = client.provider.get(msg.guild.id, 'linkEngel', []);
	    if (veri ==! true) return;
	    if (veri === true) {
	        const swearWords = ["discord.gg", "discord.me", "discordapp.com", "discord.io", "discord.tk"];
	        if (swearWords.some(word => msg.content.includes(word))) {
	        	try {
		            if (!msg.member.hasPermission("BAN_MEMBERS")) {
		                msg.delete();

		                return msg.reply(':no_entry: Reklam yapmamalısın,Reklam engelleme özelliği **Açık.!**').then(msg => msg.delete(3000));
		            }
	        	} catch(err) {
	        		console.log(err);
	        	}
	        }
	    }
	})
 client.on('messageUpdate', async (oldMsg, newMsg) => {
		if (!oldMsg.guild) return;
		if (oldMsg.author.bot) return;
		const enabled = client.provider.get(oldMsg.guild.id, 'logsEnable', []);
		if (enabled !== true) return;
		const logCh = client.provider.get(oldMsg.guild.id, 'logsChannel', []);
		if (!logCh) return;
		if (oldMsg.guild.channels.get(logCh) === undefined || oldMsg.guild.channels.get(logCh) === null) return;
		if (oldMsg.guild.channels.get(logCh).type === "text") {
			const embed = new RichEmbed()
			.setColor(3066993)
			.setAuthor(oldMsg.author.tag, oldMsg.author.avatarURL)
			.setDescription(`${oldMsg.author} adlı kullanıcı <#${oldMsg.channel.id}> kanalına gönderdiği "${oldMsg.content}" mesajını "${newMsg.content}" olarak düzenledi.`)
			.setFooter(`ID: ${oldMsg.id}`);
			oldMsg.guild.channels.get(logCh).send({embed});
		};
	});
client.on('guildMemberRemove', async member => {
		if (!member.guild) return;
		const enabled = client.provider.get(member.guild.id, 'logsEnable', []);
		if (enabled !== true) return;
		const logCh = client.provider.get(member.guild.id, 'logsChannel', []);
		if (!logCh) return;
		if (member.guild.channels.get(logCh) === undefined || member.guild.channels.get(logCh) === null) return;
		if (member.guild.channels.get(logCh).type === "text") {
			var embed = new RichEmbed()
			.setTitle('Üye ayrıldı.')
			.setAuthor(member.user.tag, member.user.avatarURL)
			.setColor(15158332)
			.setDescription(`<@!${member.user.id}>, ${member.user.tag}`)
			.setThumbnail(member.user.avatarURL)
			.setFooter(`ID: ${member.user.id}`)
			.setTimestamp();
			member.guild.channels.get(logCh).send({embed});
		}
	})

client.on('guildMemberAdd', async member => {
		if (!member.guild) return;
		const enabled = client.provider.get(member.guild.id, 'logsEnable', []);
		if (enabled !== true) return;
		const logCh = client.provider.get(member.guild.id, 'logsChannel', []);
		if (!logCh) return;
		if (member.guild.channels.get(logCh) === undefined || member.guild.channels.get(logCh) === null) return;
		if (member.guild.channels.get(logCh).type === "text") {
			var embed = new RichEmbed()
			.setTitle('Üye katıldı.')
			.setAuthor(member.user.tag, member.user.avatarURL)
			.setColor(3066993)
			.setDescription(`<@!${member.user.id}>, ${member.user.tag}`)
			.setThumbnail(member.user.avatarURL)
			.setFooter(`ID: ${member.user.id} Giriş-Çıkış Sistemi`)
			.setTimestamp();
			member.guild.channels.get(logCh).send({embed});
		}
	})

  client.on('guildBanRemove', async (guild, member) => {
		if (!guild) return;
		const enabled = client.provider.get(guild.id, 'logsEnable', []);
		if (enabled !== true) return;
		const logCh = client.provider.get(guild.id, 'logsChannel', []);
		if (!logCh) return;
		if (guild.channels.get(logCh) === undefined || guild.channels.get(logCh) === null) return;
		if (guild.channels.get(logCh).type === "text") {
			var embed = new RichEmbed()
			.setTitle('Üyenin yasaklaması kaldırıldı.')
			.setAuthor(member.user.tag, member.user.avatarURL)
			.setColor(3447003)
			.setDescription(`<@!${member.user.id}>, ${member.user.tag}`)
			.setThumbnail(member.user.avatarURL)
			.setFooter(`ID: ${member.user.id}`)
			.setTimestamp();
			guild.channels.get(logCh).send({embed});
		}
	})



client.on('guildCreate', async guild => {


		const girismesaj = [
		  '**M-Blocker sunucunuza eklendi!**',
		  '**M-Blocker** moderasyon,kullanıcı,ve eğlence botu olarak sizlere ve sunucunuzdaki insanlara hizmet veriyor.',
		  '**M-Blocker** ücretsizdir ve daima ücretsiz kalacaktır',
		  'M-Blocker BOT komutlarını m!yardım yazarak görebilirsiniz.',
		  '',
		  `**M-Blocker Destek Sunucusu**:http://discord.gg/Mpkn4Sj`
		]
		guild.owner.send(girismesaj)
});

 client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa' || msg.content.toLowerCase() ==='sea' || msg.content.toLowerCase() === 'selamun aleyküm' ) {
      return msg.reply("Aleyküm selam.").then(message => { msg.react("👋") });

		}
	}

);
  client.user.setActivity(config.activity);

});
client.login(config.token);













