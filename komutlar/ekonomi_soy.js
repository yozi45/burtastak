const Discord = require('discord.js');
const ms = require('parse-ms');
const db = require('quick.db')
module.exports.run = async (client, message, args) => {
  let timeout = 840000/14;
   function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
} 
 

      let crime = await db.fetch(`çalma_${message.author.id}`)

      if (crime !== null && timeout - (Date.now() - crime) > 0) {
        
        let time = ms(timeout - (Date.now() - crime));
    
        return message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                        .setDescription(`⏱ Birini soymak için ${time.minutes ? time.minutes + ' dakika,' : ''} ${time.seconds ? time.seconds + ' saniye beklemelisin!' : 'tekrar dene!'}`))
      }
  function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
} 
 let user =  message.mentions.users.first()
 if(!user) return message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))                   
                      .setDescription(`⛔ Parasını çalmak istediğin kullanıcıyı etiketlemelisin!`))
  let targetuser = await db.fetch(`para_${user.id}`);
  let author     = await db.fetch(`çalma_${message.author.id}`);
  let author2    = await db.fetch(`para_${message.author.id}`);
 var gard = await db.fetch(`gard_${user.id}`)
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("RED")
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))  
  .setDescription(`⛔ Para çalmak için en az 500 💸 paraya ihtiyacın var`);

if (gard === "var") return message.channel.send("Dostum bu adamın bir bodyguardı var hemen kaçmalısın")
  if (author2 < 500) {
    return message.channel.send(moneyEmbed)
  }
var lostmoney = rastgeleMiktar(150,500)
  let moneyEmbed2 = new Discord.MessageEmbed()
  .setColor("RED")
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))  
  .setDescription(`⛔ Faqir birisini soymaya çalıştın ve ${lostmoney} 💸 ceza yedin`);
  

  if (targetuser <= 1200) {
    return message.channel.send(moneyEmbed2),db.set(`çalma_${message.author.id}`, Date.now()),db.add(`para_$${message.author.id}`, -lostmoney)
db.set(`çalma_${message.author.id}`, Date.now())
db.add(`para_${message.author.id}`, -lostmoney)
  }

  let authorembed = new Discord.MessageEmbed()
  .setColor("RED")
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))  
  .setDescription(`⛔ Kendini soymayımı düşünüyorsun?!`);
    if(user.id === message.author.id) {
    return message.channel.send(authorembed)
  }
    let gotmoney = rastgeleMiktar(1000,1200)

  let embed = new Discord.MessageEmbed()
   .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))  
   .setDescription(`✅ Soygun Başarılı, ${user}'ı soydun ve ${gotmoney} 💸 kazandın`)
   .setColor("GREEN")

   message.channel.send(embed)
    await db.add(`para_${user.id}`, -gotmoney);
await db.add(`para_${message.author.id}`, gotmoney);
await db.set(`çalma_${message.author.id}`, Date.now());
  db.set(`çalma_${message.author.id}`, Date.now())
  
		}
exports.conf = {
  enabled: true,
  aliases: [],
};
exports.help = {
  name: 'soy',
};