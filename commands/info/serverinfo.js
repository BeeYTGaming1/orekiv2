const Discord = require("discord.js");
const colors = require('./../../colors.json')
const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "serverinfo",
  aliases: ["serverinformation"],
  description: "Show Server Information!",
  usage: "Serverinfo",
  run: async (client, message, args) => {
    //Start
    const guild = message.guild;
    const Emojis = guild.emojis.cache.size || "Không có Emoji!";
    const Roles = guild.roles.cache.size || "Không có vai trò!";
    const Members = guild.memberCount;
    const Humans = guild.members.cache.filter(member => !member.user.bot).size;
    const Bots = guild.members.cache.filter(member => member.user.bot).size;

    const embed = new MessageEmbed()
      .setTitle("Thông tin về " + guild.name)
      .setColor(colors.uptime)
      .setThumbnail(guild.iconURL())
      .addField(`Tên`, guild.name, true)
      .addField(`ID`, `${guild.id}`, true)
      .addField(`Chủ`, `${guild.owner.tag}`, true)
      .addField(`Số vai trò`, Roles, true)
      .addField(`Số emojo`, Emojis, true)
      .addField(`Thành viên`, Members, true)
      .addField(`Người`, Humans, true)
      .addField(`Bot`, Bots, true)
      .addField(`Tạo vào ngày`, guild.createdAt.toDateString())
      .setFooter(`Yên câu bởi ${message.author.username}`)
      .setTimestamp();

    message.channel.send({embeds: [embed]});

    //End
  }
};



/**
 * @INFO
 * Bot Coded by RogmitOp#6051 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */