const discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "orekichat",
    aliases: ["setchat"],
    description: "Nói chuyện với tôi nào!",
    usage: "[channel | IDChannel](optional)",
    run: async (client, message, args) => {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Bạn không có tuổi nhé!")
        const channel = message.mentions.channels.first()
        const args1 = args[1]
        const nochannel = new discord.MessageEmbed()
        .setColor('RED')
        .setDescription(`${message.author}, Bạn phải cho tôi một Channel!`)
        if (!channel) return message.channel.send({embeds: [nochannel]})
      if(args1 === "on") {
        db.set(`chatchannel_${message.guild.id}`, channel.id)
        const success = new discord.MessageEmbed()
        .setColor('GREEN')
        .setDescription(`${message.author}, Bạn đã cài đặt ${channel} là của tôi 😁`)
   
        message.author.send({embeds: [success]})
      }
      if(args1 === "off") {
        db.delete(`chatchannel_${message.guild.id}`, channel.id)
        const success1 = new discord.MessageEmbed()
        .setColor('GREEN')
        .setDescription(`${message.author}, bạn đã xóa bỏ ${channel} 😞`)
   
        message.author.send({embeds: [success1]})
      }







   


    }
}