const Discord = require('discord.js');

exports.run = async (client, message) => {
      message.channel.send(new Discord.MessageEmbed() 
                          .setTitle("**YENİLİKLER**")
                          .setDescription("resimli `?hgbb` komutu eklendi \n otorol sistemi eklendi \n Ekonomi sistemine `?rulet` komutu eklendi \n Minigame oynayabileceğiniz `?oyna` komutu eklendi \n `?logo` komutu eklendi \n İnivte Managerdeki gibi invite sistemi eklendi \n Ticket tool sistemi eklendi"))

  };
  
  exports.conf = {
    enabled: true,

    aliases: ['yenilikler'],
    permLevel: 0,
  };
  
  exports.help = {
    name: "yeni",
    description: "ücretsiz",
    usage: "ücretsizbağış",

  };