const db = require("quick.db");
const Discord = require("discord.js")
const colors = require('./../../colors.json')
module.exports = {
  name: "autorole",
  aliases: ["ar", "auto-role"],
  run: async (client, message, args) => {
     if (message.member.permissions.has("MANAGE_SERVER")) {
      if (message.content.includes("@everyone")) {
        return message.reply("Vai trò everyone có đã có từ Discord");
      }
    
if(!args[0])
{
  return message.reply("Bạn hãy cho tôi một vai trò để tôi giao vai trò này cho những người mới vô Server | Ví dụ: **autorole @role** | **autorole off/disable");
}
  var role1 = message.mentions.roles.first().id;
    if(!role1)
    {
      var role1 = args[0];
    }
if(args[0] == "disable" || args[0] == "off")
{
 
  db.delete(`autorole_${message.guild.id}`);
  return message.reply("Hoàn tất | Bạn đã tắt chế độ tự động thêm Role");
}
else {
message.reply(`Bây giờ, tôi sẽ thêm vai trò này cho tất cả những người mới vô Server - ${role1}`)
db.set(`autorole_${message.guild.id}`, role1);
}
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