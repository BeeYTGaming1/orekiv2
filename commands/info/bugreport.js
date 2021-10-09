const Discord = require('discord.js')
const colors = require('./../../colors.json')
const { webhook1 } = require("./../../config.json");

module.exports = {
  name: "bug-report",
  description: "Góp ý kiến",
  aliases: ['bugreport'],

  async run(bot, message, args) {

    if (!args[0]) return message.reply('Hãy cho một ý kiến')
    message.react("✅")
    message.reply(`✉ | ${message.author.username}, Cảm ơn bạn đã báo lỗi :)`)

    const bugReportEmbed = new Discord.MessageEmbed()
      .setColor(colors.uptime)
      .setTitle(`${message.author.username}#${message.author.discriminator} (${message.author.id}) báo lỗi:`)
      .setDescription(`${args}`)
      .addField("Ở server:", `${message.guild.name}`)
      .addField("ID:", `${message.guild.id}`)

    webhook1.send({embeds: [bugReportEmbed]})


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