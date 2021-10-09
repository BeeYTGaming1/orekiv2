const Discord = require('discord.js')
const colors = require('./../../colors.json')
const { webhook } = require("./../../config.json");

module.exports = {
  name: "feedback",
  description: "Đóng góp",

  async run(bot, message, args) {

    if (!args[0]) return message.reply('Bạn hãy cho chúng mình một đóng góp')
    message.react("✅")
    message.reply(`✉ | ${message.author.username}, Cảm ơn đã đóng góp :)`)

    const feedbackEmbed = new Discord.MessageEmbed()
      .setColor(colors.uptime)
      .setTitle(`${message.author.username}#${message.author.discriminator} (${message.author.id}) đóng góp:`)
      .setDescription(`${args}`)
      .addField("Ở server:", `${message.guild.name}`)
      .addField("ID:", `${message.guild.id}`)

    webhook.send(feedbackEmbed)

    
  }
}



/**
 * @INFO
 * Bot Coded by RogmitOp#6051 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */