const Discord = require('discord.js')
exports.run = function(client, message, args) {
let davet = new Discord.MessageEmbed()
.setTitle("LordMadisus | SUNUCU")
.setDescription(`
**Sunucumuza gel ve eğlenmeye başla**
[≫ Sunucumuza gelmek için Buraya Tıkla ≪](https://discord.gg/WnJbSkkG5q)
`)
return message.channel.send(davet)
  
};
exports.conf = {
    enabled: true, 
    aliases: ["server"],
  };
  
  exports.help = {
    name: 'sunucu'
  };