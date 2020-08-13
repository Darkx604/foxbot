const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
                author: {
                    name: "Genel Sürüm : 1.0.0 - Yapılan değişiklikler",
                    icon_url: "https://i.hizliresim.com/GyPnL6.png"
                  },
                color: 0xD97634,
                description: "**-bototorol komutu eklendi! -yardım komutu yenilendi!  ** En Son Güncellenme Tarihi: 12.08.2020**			**"
              }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yenilikler'],
  permLevel: 0
};

exports.help = {
  name: 'Yenilikler',
  description: 'Yenilikleri gösterir.',
  usage: 'Yenilikler'
};
