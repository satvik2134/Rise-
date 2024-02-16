const { MessageEmbed, Permissions } = require("discord.js");

module.exports = {
  name: "join",
  aliases: ["j"],
  category: "Music",
  description: "Join voice channel",
  args: false,
  usage: "",
  permission: [],
  owner: false,
  player: false,
  inVoiceChannel: true,
  sameVoiceChannel: false,
  execute: async (message, args, client, prefix) => {

    if (!message.guild.me.permissions.has([Permissions.FLAGS.CONNECT, Permissions.FLAGS.SPEAK])) return message.channel.send({embeds: [new MessageEmbed().setColor(client.embedColor).setDescription(`<a:no:1158411070608769034>y | I don't have enough permissions to execute this command! please give me permission \`CONNECT\` or \`SPEAK\`.`)]});
    
    const { channel } = message.member.voice;
   
    if (!message.guild.me.permissionsIn(channel).has([Permissions.FLAGS.CONNECT, Permissions.FLAGS.SPEAK])) return message.channel.send({embeds: [new MessageEmbed().setColor(client.embedColor).setDescription(`<a:no:1158411070608769034>y | I don't have enough permissions connect your vc please give me permission \`CONNECT\` or \`SPEAK\`.`)]});
   
    const emojiJoin = message.client.emoji.join;

    if (!message.guild.me.voice.channel) {

      const player = message.client.manager.create({
        guild: message.guild.id,
        voiceChannel: channel.id,
        textChannel: message.channel.id,
        volume: 80,
        selfDeafen: true,
      });

      player.connect();

      let thing = new MessageEmbed()
        .setColor(client.embedColor)
        .setDescription(`<a:cx_tick:1158669360223748106> | **Successfully Joined In <#${channel.id}>**`)
      return message.reply({ embeds: [thing] });

    } else if (message.guild.me.voice.channel !== channel) {

      let thing = new MessageEmbed()
        .setColor("#303037")
        .setDescription(`<a:no:1158411070608769034>y | You must be in the same channel as ${message.client.user}`);
      return message.reply({ embeds: [thing] });
    }

  }
};
