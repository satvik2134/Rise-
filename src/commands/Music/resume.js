const { MessageEmbed } = require("discord.js");
const i18n = require("../../utils/i18n");

module.exports = {
  name: i18n.__("cmd.resume.name"),
  category: "Music",
  description: i18n.__("cmd.resume.des"),
  args: false,
  usage: "",
  permission: [],
  owner: false,
  player: true,
  inVoiceChannel: true,
  sameVoiceChannel: true,
  execute: async (message, args, client, prefix) => {
    const player = client.manager.get(message.guild.id);
    const song = player.queue.current;

    if (!player.queue.current) {
      let thing = new MessageEmbed()
        .setColor("#2f3136")
        .setDescription(i18n.__("player.nomusic"));
      return message.reply({ embeds: [thing] });
    }

    const emojiresume = client.emoji.resume;

    if (!player.paused) {
      let thing = new MessageEmbed()
        .setColor("#2f31316")
        .setDescription(`<a:cx_tick:1158669360223748106> | The player is already resumed.`)
        
      return message.reply({ embeds: [thing] });
    }

    player.pause(false);

    let thing = new MessageEmbed()
      .setDescription("<a:cx_tick:1158669360223748106> |  Successfully Resumed The Current Playing Song.") 
      
      .setColor(client.embedColor)
      
    return message.reply({ embeds: [thing] });
  },
};
