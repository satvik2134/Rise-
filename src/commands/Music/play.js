const { MessageEmbed, Permissions } = require("discord.js");
const { convertTime } = require("../../utils/convert.js");
const i18n = require("../../utils/i18n");

module.exports = {
  name: i18n.__("cmd.play.name"),
  category: "Music",
  aliases: i18n.__("cmd.play.aliases"),
  description: i18n.__("cmd.play.des"),
  args: true,
  usage: i18n.__("cmd.play.use"),
  permission: [],
  owner: false,
  voteonly: false,
  player: false,
  inVoiceChannel: true,
  sameVoiceChannel: true,
  execute: async (message, args, client, prefix) => {
    if (
      !message.guild.me.permissions.has([
        Permissions.FLAGS.CONNECT,
        Permissions.FLAGS.SPEAK,
      ])
    )
      return message.channel.send({
        embeds: [
          new MessageEmbed()
            .setColor(client.embedColor)
            .setDescription(i18n.__("prams.connect")),
        ],
      });

    const { channel } = message.member.voice;

    if (
      !message.guild.me
        .permissionsIn(channel)
        .has([Permissions.FLAGS.CONNECT, Permissions.FLAGS.SPEAK])
    )
      return message.channel.send({
        embeds: [
          new MessageEmbed()
            .setColor(client.embedColor)
            .setDescription(i18n.__("prams.vc")),
        ],
      });

    const emojiaddsong = message.client.emoji.addsong;
    const emojiplaylist = message.client.emoji.playlist;

    const player = client.manager.create({
      guild: message.guild.id,
      voiceChannel: message.member.voice.channel.id,
      textChannel: message.channel.id,
      selfDeafen: true,
      volume: 100,
    });

    if (player.state != "CONNECTED") await player.connect();
    const search = args.join(" ");
    let res;

    try {
      res = await player.search(search, message.author);
      if (!player)
        return message.channel.send({
          embeds: [
            new MessageEmbed()
              .setColor(client.embedColor)
            
              .setDescription(i18n.__("player.noplayer")),
          ],
        });
      if (res.loadType === "LOAD_FAILED") {
        if (!player.queue.current) player.destroy();
        throw res.exception;
      }
    } catch (err) {
      return message.reply(
        `<a:no:1158411070608769034> | there was an error while searching: ${err.message}`
      );
    }
    switch (res.loadType) {
      case "NO_MATCHES":
        if (!player.queue.current) player.destroy();
        return message.channel.send({
          embeds: [
            new MessageEmbed()
              .setColor(client.embedColor)
            
              .setDescription(`🔍 | No matches found for - ${search}`),
          ],
        });
      case "TRACK_LOADED":
        var track = res.tracks[0];
        player.queue.add(track);
        if (!player.playing && !player.paused && !player.queue.size) {
          return player.play();
        } else {
          const thing = new MessageEmbed()
            .setColor(client.embedColor)
            
            
            .setDescription(
              `${i18n.__("player.addq")}\n[${track.title}](https://discord.com/invite/3Khp9KedDq) - \`[${convertTime(track.duration)}]\``
            );
          return message.channel.send({ embeds: [thing] });
        }
      case "PLAYLIST_LOADED":
        player.queue.add(res.tracks);
        if (
          !player.playing &&
          !player.paused &&
          player.queue.totalSize === res.tracks.length
        )
          player.play();
        const thing = new MessageEmbed()
          .setColor(client.embedColor)

          .setDescription(
            `${i18n.__("player.addlist")}\n${
              res.tracks.length
            } ${i18n.__("player.song")} [${
              res.playlist.name
            }](${search}) - \`[${convertTime(res.playlist.duration)}]\``
          );
        return message.channel.send({ embeds: [thing] });
      case "SEARCH_RESULT":
        var track = res.tracks[0];
        player.queue.add(track);
        if (!player.playing && !player.paused && !player.queue.size) {
          return player.play();
        } else {
          const thing = new MessageEmbed()
            .setColor(client.embedColor)
            
            
            .setDescription(
              `${i18n.__("player.addq")}\n[${track.title}](https://discord.gg/qp7UafXXDd) - \`[${convertTime(track.duration)}]\``
            );
          return message.channel.send({ embeds: [thing] });
        }
    }
  },
};
