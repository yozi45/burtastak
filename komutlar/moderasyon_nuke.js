const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bunun için gerekli iznin yok');
            message.channel.clone().then(knl => {
              let position = message.channel.position;
              knl.setPosition(position);
              knl.send(new Discord.MessageEmbed()
                      .setTitle("Nukeledim")
                       .setImage("https://i.gifer.com/6Ip.gif")
                      
                      
                      );
              message.channel.delete();
            });
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0 //Perm leveli istediğiniz gibi değiştirebilirsiniz.
};

exports.help = {
    name: 'nuke',
    description: 'Kanalı siler ve aynı kategoriye yenisini açar ve kanalın içindeki tüm mesajlar gider.',
    usage: 'nuke'
};