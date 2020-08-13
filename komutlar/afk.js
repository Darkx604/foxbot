const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message, args) => {
	
	let sebep = args.join("");
	if(sebep.lenght < 1) {
		return message.reply('AFK Sebebini Belirtmelisin.')
	} else {
		message.delete()
		const afk = new Discord.RichEmbed()
		.setColor('Random')
		.setTitle('AFK')
		.setDescription(`${message.author.username} | Adlı Kullanıcı **${sebep}** Yüzünden AFK Oldu!`)
		.setFooter('Fox-Bot AFK Sistem', client.user.avatarURL)
		.setTimestamp()
		message.channel.send(afk);
		
	  }
	
	
	
   };
   
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afk', 'afkol'],
  permLevel: "0"
};

exports.help = {
  name: "afk",
  description: "afk olursunuz",
  usage: "afk"
};