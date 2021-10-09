const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
const colors = require('./../../colors.json')
const language = "en";
const { default_prefix } = require("./../../config.json");
//ban
module.exports = {
    name: "ban",
    description: "Cấm server thêm Bots",
    run: async (client, message) => {
      if (!message.member.permissions.has("MANAGE_GUILD")) return;
      if(message.author.bot || !message.guild) return;
var args = message.content.toLowerCase().split(" ");
var cmd = args[0];
    if(!message.member.permissions.has("ADMINISTRATOR")) return;
    if(args[1] == `add`){
        if(!args[2] || isNaN(args[2]) || args[2].length != 18) return message.channel.send(`> ${cmd} ${args[1]} [server id]`);
        var black = db.fetch(`black_${args[2]}`);
        if(black){
          let embed = new MessageEmbed()
          .setDescription("Server này đã có danh sách đen")
          .setColor(colors.uptime)
          return message.channel.send({embeds: [embed]});
        }else{
          let embed124 = new MessageEmbed()
          .setDescription(`__${args[2]}__ , đã thêm vô danh sách đen.`)
          .setColor(colors.uptime)
           db.set(`black_${args[2]}`,"black")
           message.channel.send({embeds: [embed124]})
        }
    }else if(args[1] == `remove`){
        if(!args[2] || isNaN(args[2]) || args[2].length != 18) return message.channel.send(`> ${cmd} ${args[1]} [server id]`);
        var black = db.fetch(`black_${args[2]}`);
        if(black){
          let embed1 = new MessageEmbed()
          .setDescription(`__${args[2]}__ , đã xóa khỏi danh sách đen.`)
          .setColor(colors.uptime)
          message.channel.send(embed1);
        db.delete(`black_${args[2]}`);
        }else{
          let embed15 = new MessageEmbed()
          .setDescription("Server này chưa có danh sách đen")
          .setColor(colors.uptime)
            message.channel.send({embeds: [embed15]});
        }
    }else{
      let embed = new MessageEmbed()
      .setDescription(`**${cmd} add [server id]** (thêm server vô danh sách đen)\n**${cmd} remove [server id]** (xóa server khỏi danh sách đen)`)
      .setColor(colors.uptime)
        message.channel.send({embeds: [embed]});
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