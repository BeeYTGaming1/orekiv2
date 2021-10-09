const db = require("quick.db");
const colors = require('./../../colors.json')
const Discord = require("discord.js")

module.exports = {
  name: "anti-alt",
  aliases: ["antialt"],
  run: async (client, message, args) => {
       if (!message.member.permissions.has("MANAGE_GUILD"))
    {
       message.channel.send(
        "Bạn không có đủ quyền để sử dụng lệnh này!"
      );
      return;
}
 var wchannel = args[0];
 if(!wchannel)
 {
   return message.reply("Hãy cho một chế độ \`enable\`\`disable\`")
 }
 if(wchannel == "enable")
 {
   db.set(`antialt_${message.guild.id}`, wchannel);
   message.reply(`Chế độ anti-alt đã được khởi động!`);
   return;
 }
 else if(wchannel == "disable")
 {
   db.delete(`antialt_${message.guild.id}`);
   message.reply(`Chế độ anti-alt đã được tắt nguồn!`);
   return;
 }else {
 return message.reply("Hãy cho một chế độ \`enable\`\`disable\`")
 }


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