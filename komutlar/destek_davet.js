const Discord = require('discord.js')
exports.run = function(client, message, args) {
let davet = new Discord.MessageEmbed()
.setTitle("LordMadisus | DAVET")
.setDescription(`
**Beni sunucuna ekle ve eğlenmeye başla!**
[≫ Beni sunucuna eklemek için Buraya Tıkla ≪](https://discord.com/oauth2/authorize?client_id=840240695184064532&scope=bot&permissions=8)
`)
return message.channel.send(davet)
  
};
exports.conf = {
    enabled: true, 
    aliases: ["invite"],
  };
  
  exports.help = {
    name: 'davet'
  };