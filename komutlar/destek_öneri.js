 const Discord = require('discord.js');

exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.MessageEmbed()
.setDescription('Kullanım: ?öneri <öneriniz>'));
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription('Öneriniz Bildirildi!')
message.channel.send(embed)
const embed2 = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcının tavsiyesi:`)
.addField(`Kullanıcı Bilgileri`, `Kullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("Öneri", type)
.setThumbnail(message.author.avatarURL())
client.channels.cache.get('840265422938046515').send(embed2);
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'öneri',
  description: 'Tavsiye bildirirsiniz',
  usage: 'öneri <öneriniz>'
};