const Disord = require('discord.js')
const db = require('quick.db')

    exports.run = (client, message, args) => {
      if(!args[0]) return message.channel.send("Lütfen aç veya kapat yaz. Örnek kullanım: `otorol aç #kanal @rol ` / `otorol kapat`")
      
        if(args[0] === "aç"){
            // Ön Data CodeMareFi 
            db.set(`otorol_${message.guild.id}`, 'acik')

            // Let Tanımları CodeMareFi 
            let kanal = message.mentions.channels.first();
            let rol = message.mentions.roles.first();
            let mesaj = args.slice(3).join(' ')
    
            if(!kanal){
                const CodeMareFi = new Disord.MessageEmbed()
                .setDescription(`**Lütfen Bir Kanal Etiketle.**`)
                .setColor('#ff0000')
                return message.channel.send(CodeMareFi )
            }
            if(!rol){
                const CodeMareFi = new Disord.MessageEmbed()
                .setDescription(`**Lütfen Bir Rol Etiketle.**`)
                .setColor('#ff0000')
                return message.channel.send(CodeMareFi )
            }

            if(rol && kanal){
              db.set(`otorol_${message.guild.id}`, 'acik')
                // Data CodeMareFi 
                db.set(`okanal_${message.guild.id}`, kanal.id)
                db.set(`orol_${message.guild.id}`, rol.id)
                db.set(`orolad_${message.guild.id}`, rol.name)
              
    
                // Mesaj CodeMareFi 
                const CodeMareFi = new Disord.MessageEmbed()
                .setDescription(`
                Otorol Sistemi Başarıyla Aktif Edildi\n
                    \`Kanal\` = ${kanal}
                    \`Rol\` = ${rol}
                `)
                .setColor('BLACK')
                .setFooter('Madisus ')
                message.channel.send(CodeMareFi )
            }
        } else if(args[0] === "kapat"){
            // Kişi Eğer Sistemi Kapatırsa Datadaki Verileri Silelim CodeMareFi 
            db.delete(`orol_${message.guild.id}`)
            db.delete(`okanal_${message.guild.id}`)
                  
 db.delete(`otorol_${message.guild.id}`) 
            const CodeMareFi = new Disord.MessageEmbed()
            .setDescription(`**Otorol Sistemi Başarıyla Kapatıldı.**`)
            .setColor('BLACK')
            .setFooter('')
            message.channel.send(CodeMareFi )
        }
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Otorol-ayarla','OTOROL-AYARLA','Otorol','OTOROL','otorol'],
    permLevel: 0
}

exports.help = {
    name: 'otorol'
}