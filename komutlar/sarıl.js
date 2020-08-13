const Discord = require('discord.js');
const Jimp = require('jimp')

exports.run = (client, message, args) => { 
const kisi = message.mentions.users.first()
if (!kisi) {
  return message.reply("**Kime sarılacağını yazmalısın**")
}
 const embed = new Discord.RichEmbed()
 .setDescription(`**${kisi} ${message.author.username} Sana Sarıldı **`)
 .setColor("BLUE")
 .setImage("https://media1.tenor.com/images/78b4745385a1b810501be693d2111a16/tenor.gif?itemid=10592461")
 .setTimestamp()
message.channel.send(embed)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'sarıl',
  description: 'sarıl komutu', 
  usage: 'sarıl'
};