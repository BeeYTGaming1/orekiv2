 const id = require("../../config.json").owners
const { MessageEmbed } = require("discord.js");
const colors = require('./../../colors.json')
const prefix = require("../../config.json").default_prefix
const Discord = require("discord.js")
const db = require("quick.db")
const language = "en";
const { default_prefix } = require("./../../config.json");
//ban
module.exports = {
    name: "blacklist-user",
    description: "ban members from server",
    run: async (client, message, args) => {
      if (!message.member.permissions.has("MANAGE_GUILD")) return;
        const user = message.mentions.users.first()
        if(!user) return message.channel.send("❌ Hãy cho tôi một đối tượng!")

        const addremove = args[1]
        if(!addremove) return message.channel.send("❌ Hãy cho một hình thức `add`(thêm)/`remove`(xóa)")

      if(addremove === "add") {
        let blacklist = await db.add(`blacklist_${message.guild.id}`);
        console.log(blacklist)
        message.channel.send(`Đã thêm \`${user}\` vô danh sách đen!`)
      };


      if(addremove === "remove") {
        let remove = await db.delete(`blacklist_${message.guild.id}`);
        console.log(remove)
        message.channel.send(`Đã loại bỏ \`${user}\` khỏi danh sách đen!`)
      }







}
    }
