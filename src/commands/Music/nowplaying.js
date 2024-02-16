const { MessageEmbed } = require("discord.js");
const { convertTime } = require('../../utils/convert.js');
const { progressbar } = require('../../utils/progressbar.js')

module.exports = {
    name: "nowplaying",
    aliases: ["np"],
    category: "Music",
    description: "Show now playing song",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    player: true,
    inVoiceChannel: false,
    sameVoiceChannel: false,
execute: async (message, args, client, prefix) => {
  
        const player = message.client.manager.get(message.guild.id);

        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor("#303037")
                .setDescription("<a:no:1158411070608769034> | There is no music playing.");
            return message.channel.send(thing);
        }
        const song = player.queue.current
        const emojimusic = client.emoji.music;
        var total = song.duration;
        var current = player.position;
        
        let embed = new MessageEmbed()
          
          .setThumbnail(`${message.author.displayAvatarURL()}`)
          .addField(`<a:Musicz:1158410945744355439> **Song**`,`[${song.title}](https://discord.com/invite/3Khp9KedDq)`)
  
  .addField ("<a:bot_search:1163419491091357727> **Requester**",`${song.requester}`) 
  
         
          .setImage(`https://img.youtube.com/vi/${song.identifier}/mqdefault.jpg`)

  .addField ("<:cx_remaingtime:1163421198772863046> **Duration**", `[ \`${convertTime(current)} / ${convertTime(total)}\` ]`)
  
  .setColor(client.embedColor)

  .setAuthor({name: `| Now Playing`, iconURL: client.user.displayAvatarURL()});
            	
            return message.channel.send({embeds: [embed]})

    }
}
