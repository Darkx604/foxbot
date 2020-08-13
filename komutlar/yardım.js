const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('Croxy yardım menüsü')
    .setAuthor(`Croxy`, client.user.avatarURL) 
      .setDescription('**[Website]() [destek sunucumuz]() [oyver]()**')
.setThumbnail(client.user.avatarURL)
      .addField('** :infinity:  | Genel Komutlar **', '`davet`, `istatistik`, `sor`, `afk`, `avatar`, `havadurumu`,`kullanıcıbilgim`, `ping`, `çekiliş`, `Yenilikler`, `yapımcım`, `top10`, `Premium`, `oylama`, `sunucu-bilgi`, `Başvuru`')
      .addField('** :hammer: | Moderasyon **', '`ban`, `mute`, `bototorol`, `yavaş-mod`, `reklam-taraması`, `unban`, `uyar`, `sil`, `rolver`, `kilit`, `kick`')
      .addField('** :video_game: |Eğlence **', '`tokat`, ``, `aşk`, `slot`, `tkm`, `tictoctoe`, `sarıl`')
    .setFooter(`Beni Eklemek İçin -davet`, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};