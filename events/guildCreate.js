const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const girismesaj = [
  'Botumuzun özelliklerini öğrenmek için -Fox komutunu kullanabilirsin.',
  '**ÖNEMLİ:** Botun kullanması için mod-log kanalı açın ve deneme için',
  '-uyarı komutunu kullanın.',
  '',
  `CST resmi sunucusu : https://discord.gg/yq69bGz`,
  `**cst sunucusu** https://discord.gg/yq69bGz`
]

client.on('guildCreate', guild => {
    const generalChannel = guild.defaultChannel
    generalChannel.sendMessage(girismesaj)
client.user.setStatus("dnd");
  //idle = boşta
  //dnd = rahatsız etmeyin
  //online = çevrimiçi
  console.log(`                                                                                                                                                                     `)
  client.user.setActivity(`-Fox | ${client.users.size} kullanıcı | Fox [Ro-Ghoul]`, { type: "WATCHING"});
  //LISTENING = DİNLİYOR
  //WATCHING = İZLİYOR
  //PLAYING = OYNUYOR 
  console.log(`${client.user.username}: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};