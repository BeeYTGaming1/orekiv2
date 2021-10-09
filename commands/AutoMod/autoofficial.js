const db = require("quick.db");
const Discord = require("discord.js");
const colors = require('./../../colors.json')
module.exports = {
  name: "auto-official-role",
  aliases: ["auto-official", "auto-name-role","anr", "af", "autoofficial"],
  run: async (client, message, args) => {
     if (!message.member.permissions.has("MANAGE_SERVER")) {
       return;
     }
if(!args[0])
{
  return message.reply("Bạn cần đưa tôi một vai trò hoặc một NickName\n Ví dụ - **anr role @Officials** hoặc **.anr name RYΠΣXV丶**");
}
if(args[0] == "role")
{
  var role2 = message.mentions.roles.first();
  if(role2)
  {
    var role2 = message.mentions.roles.first().id;
  }
  else if(!role2){
    var role2 = args[1];
  }
  if(!role2){
    return message.reply("Bạn phải đưa tôi một vai trò hợp lệ!");
  }
  db.set(`tagg_${message.guild.id}`, role2);
  return message.reply(`Bây giờ tôi sẽ thêm vai trò cho bất kì ai tham gia máy chủ`);
}
if(args[0] == "name")
{
 let name = args[1]; 
 if(!name)
 {
   return message.reply("Hãy cho tôi một cái tên hợp lệ");
 }
 db.set(`tagn_${message.guild.id}`, name);
 return message.reply("Bây giờ tôi sẽ chỉnh NickName của bất kì ai tham gia máy chủ!");
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