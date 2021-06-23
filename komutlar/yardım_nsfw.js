const Discord = require('discord.js');

exports.run = function(client, message) {
   if (message.channel.nsfw){
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» LordMadisus Moderasyon Komutları')
.addField('?pgif', '+18 p*rno gifi atar')
.addField('?4k', '+18 4k resim atar')
.addField('?anal', '+18 anal gif atar')
.addField('?ass', '+18 popo resmi atar')
.addField('?boobs', '+18 meme resmi atar')
.addField('?pussy', '+18 am resmi atar')
.addField('?wild', '+18 vahşi resim atar')
.setTimestamp()
.setFooter('LordMadisus', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)}
   
 else{
    message.channel.send("Bu kanal bir nsfw kanalı değil")
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["nsfw"], 
  permLevel: 0 
};

exports.help = {
  name: '+18',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};

