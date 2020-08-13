const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor('RANDOM')
    .addField('**Premium Üyeler: **', '𝙻 𝚘 𝚋 𝚒 狐狸#2950')
	.setFooter('Eğer Premium Almak İstiyorsanız A!ⱤɄ₥₱₳ł#0001 adlı kişiye yazmanız gerekir.')
	.setTimestamp()
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['PreÜye'],
  permLevel: 0
};

exports.help = {
  name: 'Premium',
  description: 'Premium Üyeliği Olan Kişileri Gösterir.',
  usage: 'Premium'
};