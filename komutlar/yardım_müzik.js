const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle("Müzik sistemi yapamadık yardımcı olmak isteyen varsa yozi#4545'e yazabilir")

.setTimestamp()
.setFooter('LordMadisus', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["müzik"], 
  permLevel: 0 
};

exports.help = {
  name: 'mzik',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};