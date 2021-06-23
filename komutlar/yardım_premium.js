const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription("**Premium almak için https://discord.gg/WnJbSkkG5q bu sunucuya gelebilirsin. Sahiplerimle konuşarak veya çekilişlere katılarak alabilirsin**")
.setTitle('» LordMadisus Premium Komutları')
.addField('?pre-kontrol', 'Premiumunuz var mı ona bakar')
.addField('?pre-bilgi', 'Premium hakkında bilgi verir')
.setTimestamp()
.setFooter('LordMadisus', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["premium"], 
  permLevel: 0 
};

exports.help = {
  name: 'pre',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};