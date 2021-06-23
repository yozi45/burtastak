const Discord = require('discord.js')
exports.run = function(client, message, args) {
let davet = new Discord.MessageEmbed()
.setTitle("LordMadisus | BAĞIŞ")
.setDescription(` IBAN yakında eklenecektir
`)
return message.channel.send(davet)
  
};
exports.conf = {
    enabled: true, 
    aliases: ["donate"],
  };
  
  exports.help = {
    name: 'bağış'
  };