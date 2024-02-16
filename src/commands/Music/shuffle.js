const { MessageEmbed } = require("discord.js");
const i18n = require("../../utils/i18n");

module.exports = {
  name: i18n.__("cmd.shuffle.name"),
  category: "Music",
  description: i18n.__("cmd.shuffle.des"),
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
    player.queue.shuffle();

    const emojishuffle = client.emoji.shuffle;

    let thing = new MessageEmbed()
      .setDescription(`<a:cx_tick:1158669360223748106> | Successfully Shuffled The Queue.`)
      .setColor(client.embedColor);
      
    return message
      .reply({ embeds: [thing] })
      .catch((error) => client.logger.log(error, "error"));
  },
};
