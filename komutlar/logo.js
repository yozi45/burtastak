const Discord = require("discord.js");
const got = require("got");

module.exports.run = async (bot, message, args) => {
var tür = args[0]

if(!tür) return message.channel.send( "Lütfen bir tür belirt `arrow, elmas, booking, bubble, comic, cool, ateşli, müzik, kurukafa`")
  
  let isim = args[1]
  if(!isim)return message.channel.send("**Lütfen Bişey Yaz**")
if(tür === "arrow"){
  var link = "https://dynamic.brandcrowd.com/asset/logo/1a2ebc7a-1b24-466a-bee7-9a0e8f5d8395/logo?v=4&text="+isim
}
  if(tür === "elmas"){
  var link = "https://habbofont.net/font/palooza_blue/"+isim+".gif"
}
    if(tür === "booking"){
  var link = "https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=booking-logo&text="+isim
}
    if(tür === "bubble"){
  var link = "https://habbofont.net/font/bubble/"+isim+".gif"
}
   if(tür === "comic"){
  var link = "https://dynamic.brandcrowd.com/asset/logo/a88088f5-1782-4ebe-b8cb-e69645c2c873/logo?v=4&text="+isim
}
 if(tür === "cool"){
  var link = "https://dynamic.brandcrowd.com/asset/logo/2fa9614c-e8fd-47be-b522-14aa07bd8f22/logo?v=4&text="+isim
}
   if(tür === "ateşli"){
  var link = "https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=flame-logo&text="+isim
}
  if(tür === "müzik"){
  var link = "https://bcassetcdn.com/asset/logo/545fa973-da1e-428a-bf78-f9f8b0717cdb/logo?v=4&text="+isim
  }
  if(tür === "kurukafa"){
  var link = "https://bcassetcdn.com/asset/logo/10cd8160-2b8d-41c5-87cc-f683a853d5d9/logo?v=4&text="+isim
  }
 const embed = new Discord.MessageEmbed()
  .setColor(0xF001FA)
 .setTitle(tür + " logo")
  .setImage(link)
  message.channel.send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["logo"],
  permLevel: 0
};

exports.help = {
  name: "logocu",
  description: "İstediğiniz yaziyi yaz",
  usage: "prefix yaz yazı"
};
