const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')
exports.run = async (client, message, args) => {
  let para = db.fetch(`para_${message.author.id}`) 
  
  let timeout = 25000;
  
  let crime = await db.fetch(`ruletoynama_${message.author.id}`)

      if (crime !== null && timeout - (Date.now() - crime) > 0) {
        
        let time = ms(timeout - (Date.now() - crime));
        message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                        .setDescription(`⏱ Rulet oynamak için ${time.seconds ? time.seconds + ' saniye beklemelisin!' : 'tekrar dene!'}`))
      } else {
  var miktar = args[0]
  if(!miktar) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Rulet oynamak için miktar girmelisin (en fazla 50000 💸)`))
 if(miktar > 50000) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})))
        .setDescrption("Lütfen 50000'den daha az miktar gir")
if(miktar > para) return message.channel.send(new Discord.MessageEmbed()
                                              .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Rulet oynamak için cüzdanında ${para ? "sadece " + para + ' 💸 var!' : 'hiç paran yok!'}`))
          if(miktar < 1) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Seni zeki seni bunu başka kimse denemedi sandım de mi, lütfen 1 den büyük bir değer gir!`))  
  else{
        const result = ["K","K","K","K","K",
             "K",
             "K",
             "K",
             "K",
             "K",
             "B",
           "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B",
 "Y", "Y", "Y", "Y", "Y",
 "S","S"
        ] 
        var sonuç = result[Math.floor(Math.random() * result.length)]
if(sonuç === "B"){ 
  db.add(`para_${message.author.id}`,miktar)
  message.channel.send("Üzgünüm maalesef beyaz bölge çıktı ve " + miktar + " MadiCash kaybettin")
} else{
    
    if(sonuç === "K"){ 
       var red=miktar*(3/4);
red=Math.floor(red);
  db.add(`para_${message.author.id}`, red)
  message.channel.send("Tebrikler kırmızı bölge çıktı ve " + red + " Madicash kazandın") }
  else {
      
    
    if(sonuç === "Y"){ 
       var gren=miktar*3.5;
gren=Math.floor(gren);
  db.add(`para_${message.author.id}`, gren)
  message.channel.send("Tebrikler yeşil bölge çıktı ve " + gren + " Madicash kazandın") 
      } else {
    
    if(sonuç === "K"){ 
       var blak=miktar*7.5;
blak=Math.floor(blak);
  db.add(`para_${message.author.id}`, blak)
  message.channel.send("Tebrikler kırmızı bölge çıktı ve " + blak + " Madicash kazandın") 
      }
            await db.set(`ruletoynama_${message.author.id}`, Date.now());   
        
        }}}}}}
exports.conf = {
  enabled: true,
  aliases: [],
};

exports.help = {
  name: 'rulet',
};