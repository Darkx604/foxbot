const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor('RANDOM')
    .setTimestamp()
    .addField('**Yapımcım: **', 'A!ⱤɄ₥₱₳ł#0002 ve 𝙻 𝚘 𝚋 𝚒#2950')
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcım'],
  permLevel: 0
};

exports.help = {
  name: 'yapımcım',
  description: 'Yapimcimi Gosterir.',
  usage: 'yapimcim'
};