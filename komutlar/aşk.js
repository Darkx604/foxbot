exports.run = async (client, msg, args) => {
    let ask=[
      "Aşkölçer |❤️|  boşver sen .",
      "Aşkölçer |❤️ ❤️ ❤️|   biraz daha uğraş.",
      "Aşkölçer |❤️ ❤️ ❤️ ❤️ ❤️|  oo iyi çok az daha uğraşırsan olucak bu iş.",
      "Aşkölçer |❤️ ❤️ ❤️|  oluyor uğraş uğraş !  .",
      "Aşkölçer |❤️ ❤️ ❤️ ❤️|  ciddiysen hallet şu işi .",
      "Aşkölçer |❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️|  Gösteriyor evlenin siz ya.",
    ]
      let member = msg.mentions.members.first()
     if(!member)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: ('🚫 Kimi Sevdiğini etiketlemelisin..')
  }});
 
 
 
    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${member} ${ask[Math.floor(Math.random() * 6)]}.`)
    }})
    }
 
 
  }
 
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };
 
  exports.help = {
    name: 'aşk',
    description: 'Aşk Ölçmeni sağlar.',
    usage: 'aşk'
   }