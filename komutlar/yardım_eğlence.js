const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» LordMadisus Eğlence Komutları')
.addField('?logo', 'Bot sizin için logo oluşturur')
.addField('?düello', 'Etiketlediğiniz kişi ile düello atarsınız')
.addField('?intihar', 'İntihar edersiniz')
.addField('?oyna', 'Gamecord ile minigame oynarsınız')
.addField('?mcskin', 'Yazdığınız hesabın minecraft skinini atar')
.addField('?mcbaşarım', 'Yazdığınız yazıyı minecraft başarımına çevirir')
.addField('?xox', ' Etiketlediğiniz kişi ile xox oynarsınız')
.addField('?fakemesaj', ' Yazdığınız kişi adına mesaj atar ')
.addField('?konuş', ' Botu seslide konuşturursunuz ')
.addField('?plsmeme', 'Burdurlanddan meme atar')
.addField('?avatar', 'Etiketlediğiniz kişinin avatarını atar')
.setTimestamp()
.setFooter('LordMadisus', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["fun"], 
  permLevel: 0 
};

exports.help = {
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};