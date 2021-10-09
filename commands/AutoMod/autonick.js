const db = require("quick.db");
const Discord = require("discord.js");
const colors = require('./../../colors.json')
module.exports = {
  name: "autonick",
  aliases: ["auto-nick"],
  run: async (client, message, args) => {
      if (!message.member.permissions.has("MANAGE_GUILD"))
    {
       message.channel.send(
        "Bạn không có đủ quyền để sử dụng lệnh này!"
      );
      return;
}
if(!args[0]){
  return message.reply("Hãy chọn chế độ: **disable** hoặc *on*")
}
    let message1 = args.join(" ");
    if(message1 !== "on")
{
  db.set(`nickm_${message.guild.id}`, message1);
  message.channel.send(`Hoàn tất cài đặt NickName`);
}
if(args[0] == "disable" || args[0] == "off")
{
 db.delete(`nickm_${message.guild.id}`);
 return message.reply("Hoàn tất xóa bỏ tính năng tự động NickName");
}

  }}

/**
 * @INFO
 * Bot Coded by RogmitOp#6051 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */