const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
 const bizimembed = new Discord.MessageEmbed() 
                         .setTitle("**LORDOZİBOT** | EKONOMİ KOMUTLARI")
                          
                          .addField("**?para**", "Paranıza bakarsınız")
    .addField("**?market**", "Marketi görürsünüz")
                           .addField("**?günlük**", "Günlük para alırsınız")
       .addField("**?gönder**", "Para gönderirsiniz")
         .addField("**?soy**", "Para çalarsınız")
         .addField("**?soygun**", "Soygun yaparsınız")
   .addField("**?bahis**", "Bahis oynarsınız")
   .addField("**?adamasmaca**", "Adam asmaca oynarsınız")
  .addField("**?yatır**", "Bankaya para yatırırsınız")
 .addField("**?çek**", "Bankadan para çekersiniz")
     .setFooter("bir sonraki sayfaya geçmek için aşağıdan ➡️ emojisine tıklayın")
 .setThumbnail(client.user.avatarURL())
                             message.channel.send(bizimembed).then(async msg => {
      await msg.react("➡️");
      let filter = (reaction, user) => user.id !== message.client.user.id && user.id === message.author.id;
      var collector = msg.createReactionCollector(filter, {
        time: 120000
      });
     collector.on("collect", async (reaction, user) => {
        switch (reaction.emoji.name) {
          case "➡️":
            reaction.users.remove(user).catch(console.error);
   msg.delete()
        const sakso = new Discord.MessageEmbed() 
           .addField("**?haftalık**", "Haftalık para alırsınız")
                         .addField("**?kasalar**", "Kasaların listesini atar")
 .addField("**?kasa-bilgi**", "İd'sini girdiğiniz kasanın bilgilerini verir")
         .addField("**?kasa-aç**", "İd'sini girdiğiniz kasayı açarsınız")
   .addField("**?faiz**", "Günlük olarak bankadaki paranıza faiz koyarsınız")
                          .addField("**?avlan**", "Avlanırsınız")
                 .addField("**?balıktut**", "Balık tutarsınız")
                 .addField("**?ağaçkes**", "Ağaç kesersiniz")
        .setThumbnail(client.user.avatarURL())
        .addField("**?envanter**", "Envanterinize bakarsınız")
             .addField("**?rulet**", "Rulet oynarsınız")
        message.channel.send(sakso) 
        
        
         }})
     })
     }      


exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["economy"], 
  permLevel: 0 
};

exports.help = {
  name: 'ekonomi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};