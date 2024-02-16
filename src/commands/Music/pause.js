const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "pause",
    category: "Music",
    description: "Pause the currently playing music",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
 execute: async (message, args, client, prefix) => {
    
		const player = message.client.manager.get(message.guild.id);

        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor("#2f3136")
                .setDescription("<a:no:1158411070608769034> | There is no music playing.");
            return message.reply({embeds: [thing]});
        }

        const emojipause = client.emoji.pause;

        if (player.paused) {
            let thing = new MessageEmbed()
                .setColor(client.embedcolor)
                .setDescription(`<a:cx_tick:1158669360223748106> | The player is already paused.`)
                .setTimestamp()
                return message.reply({embeds: [thing]});
        }

        player.pause(true);

        const song = player.queue.current;

        let thing = new MessageEmbed()
            .setColor(client.embedColor)
            
            .setDescription(`<a:cx_tick:1158669360223748106> | Successfully Paused The Current Playing Song.`)
          return message.reply({embeds: [thing]});
	
    }
};
