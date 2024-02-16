const { MessageEmbed } = require("discord.js");
const i18n = require("../../utils/i18n");

module.exports = {
  name: i18n.__("cmd.stop.name"),
  category: "Music",
  description: i18n.__("cmd.stop.des"),
  args: false,
  usage: "",
  permission: [],
  owner: false,
  player: true,
  inVoiceChannel: true,
  sameVoiceChannel: true,
  execute: async (message, args, client, prefix) => {
    const player = client.manager.get(message.guild.id);

    if (!player.queue.current) {
      let thing = new MessageEmbed()
        .setColor("#2f3136")
        .setDescription(i18n.__("player.nomusic"));
      return message.reply({ embeds: [thing] });
    }

    const autoplay = player.get("autoplay");
    if (autoplay === true) {
      player.set("autoplay", false);
    }

    player.stop();
    player.queue.clear();

    const emojistop = client.emoji.stop;

    let thing = new MessageEmbed()
      .setColor(client.embedColor)
    
      .setDescription("<a:cx_tick:1158669360223748106> | Successfully Stopped The Currently Playing Song.")
    message.reply({ embeds: [thing] });
  },
};
