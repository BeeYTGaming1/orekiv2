const db = require("quick.db");
const colors = require('./../../colors.json')
const Discord = require("discord.js")
const config = require("../../config.json")
module.exports = {
  name: "antilink",
  aliases: ["anti-link"],
  run: async (client, message, args) => {
     let embed = db.fetch(`embed_${message.guild.id}`);
    
    if (!message.member.permissions.has("MANAGE_GUILD"))
    {
       message.channel.send(
        "Bạn không có đủ quyền để sử dụng lệnh này!"
      );
      return;
}
    let content = args[0];
  
    var prefix =  db.fetch(`guildprefix_${message.guild.id}`);
    if(!prefix)
    {
      var prefix = config.default_prefix;
    }
      if(!content)
    {
      message.channel.send(`Bạn phải cho tôi một chế độ - ${prefix}antilink **on**/**off**`);
      return;
    }
    if (content.toLowerCase() === "on") 
    {
       let antilink1 = db.fetch(`antilink_${message.guild.id}`);
      if(antilink1 == "on")
      {
        message.channel.send("Bạn đã bật chế độ Anti-Link rồi!");
        return;
      }
      let on1 = "on";
      db.set(`antilink_${message.guild.id}`, on1);
      message.channel.send("Bạn đã bật chế độ Anti-Link | Xóa tất cả các Link");
    }
     else if (content.toLowerCase() === "off") 
    {
        let antilink1 = db.fetch(`antilink_${message.guild.id}`);
      if(antilink1 == "off")
      {
        message.channel.send("Bạn đã tắt chế độ Anti-Link rồi!");
        return;
      }
      let off1 = "off";
      db.set(`antilink_${message.guild.id}`, off1);
      message.channel.send("Bạn đã tắt chế độ Anti-Link | Hủy bỏ lệnh xóa tất cả các Link");
    }
    else {
      return message.reply("Bạn phải cho tôi một chế độ - ${prefix}antilink **on**/**off**");
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