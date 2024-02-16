const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js");


module.exports = {
    name: "filter",
    category: "Filters",
    aliases: ["filters","eq"],
    description: "Sets the bot's sound filter.",
    args: false,
    usage: "",
    userPerms: [],
    dj: true,
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
    execute: async (message, args, client, prefix) => {


        const player = message.client.manager.get(message.guild.id);
        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor(client.embedColor)
                .setAuthor({name: `| There Is No Music Playing`, iconURL: message.member.displayAvatarURL({dynamic:true})});
            return message.reply({ embeds: [thing] });
        }
        const embed = new MessageEmbed()
            .setColor(client.embedColor)
            .setAuthor({name: `| Filters`, iconURL: message.member.displayAvatarURL({dynamic:true})})
            .setFooter({text:`Use Rise For Your Vibe!!`, iconURL: client.user.displayAvatarURL({dynamic:true})})

      .setThumbnail(`${message.author.displayAvatarURL()}`)
            .setDescription(`➡ Reset Filters
➡ Bass Booster
➡ 8D
➡ Nightcore
➡ Pitch
➡ Distort
➡ Equalizer
➡ Speed
➡ Vaporwave`)

        const row4 = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('disable_h')
          .setPlaceholder(`Select Filters`)
          .addOptions([
            {
              label: 'Reset Filters',
              value: 'clear_but',
              emoji : '<a:diamond:1160512500719169608>'
            },
            {
              label: 'BassBoost',
              value: 'bass_but',
              emoji : '<a:diamond:1160512500719169608>'
            },
            {
              label: '8D',
              value: '8d_but',
              emoji : '<a:diamond:1160512500719169608>'
            },
            {
              label: 'NightCore',
              value: 'night_but',
              emoji : '<a:diamond:1160512500719169608>'
            },
            {
              label: 'Pitch',
              value: 'pitch_but',
              emoji : '<a:diamond:1160512500719169608>'
            },
            {
              label: 'Distort',
              value: 'distort_but',
              emoji : '<a:diamond:1160512500719169608>'
            },
            {
              label: `Equalizer`,
              value: "eq_but",
              emoji : '<a:diamond:1160512500719169608>'
           
            },
            {
              label: 'Speed',
              value: 'speed_but',
              emoji : '<a:diamond:1160512500719169608>'
            },
            {
              label: 'Vaporwave',
              value: 'vapo_but',
              emoji : '<a:diamond:1160512500719169608>'
            }   
          ])
        )

        const embed1 = new MessageEmbed().setColor(client.embedColor);

      const m = await message.channel.send({ embeds: [embed], components: [row4] });
      
        const collector = m.createMessageComponentCollector({
            filter: (f) => f.user.id === message.author.id ? true : false && f.deferUpdate().catch(() => { }),
            time: 600000,
            idle: 600000 / 2
        });
      
        collector.on("collect", async (i) => {
           await i.deferReply({ ephemeral: true });
            if(i.values[0] === "clear_but") {
      await player.clearEffects();
      await i.editReply({ ephemeral: true , content: `<a:cx_tick:1158669360223748106> Succesfully Cleared All **FILTERS**`});
    } 
    if(i.values[0] === "bass_but") {
     await player.setBassboost(true);
     await i.editReply({ ephemeral: true, content:`<a:cx_tick:1158669360223748106> BassBoost mode **ENABLED**` });
  }
    if(i.values[0] === "8d_but") {
      await player.set8D(true);
      await i.editReply({ ephemeral: false , content: `<a:cx_tick:1158669360223748106> 8D Mode **ENABLED**`, ephemeral: true });
    }
    if(i.values[0] === "night_but") {
      await player.setNightcore(true);
      await i.editReply({ ephemeral: true, content: `<a:cx_tick:1158669360223748106> NightCore Mode **ENABLED**`, ephemeral: true });
    }
    if(i.values[0] === "pitch_but") {
      await player.setPitch(2);
      await i.editReply({ ephemeral: true, content: `<a:cx_tick:1158669360223748106> Pitch Mode **ENABLED**`, ephemeral: true });
    }
    if(i.values[0] === "distort_but") {
      await player.setDistortion(true);
      await i.editReply({ ephemeral: true, content: `<a:cx_tick:1158669360223748106> Distort Mode **ENABLED**` });
    }
    if(i.values[0] === "eq_but") {
     await player.setEqualizer(true);
     await i.editReply({ ephemeral: true, content:`<a:cx_tick:1158669360223748106> Equalizer mode **ENABLED**` })
  }   
    if(i.values[0] === "speed_but") {
      await player.setSpeed(2);
      await i.editReply({ ephemeral: true, content: `<a:cx_tick:1158669360223748106> Speed Mode **ENABLED**`, ephemeral: true });
    }
    if(i.values[0] === "vapo_but") {
      await player.setVaporwave(true);
      await i.editReply({ ephemeral: true, content: `<a:cx_tick:1158669360223748106> VaporWave Mode **ENABLED**`, ephemeral: true });
    }
        });
    }
};
