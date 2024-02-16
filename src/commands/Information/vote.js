const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "vote",
    category: "Information",
    aliases: [ "v", "vo" ],
    description: "Vote The Bot",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {
const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("Vote")
        .setStyle("LINK")
        .setEmoji("🔗")
        .setURL(`https://top.gg/bot/bot/${client.user.id}/vote`)
        ) 
          

      
     
     const embed = new MessageEmbed()

      .setAuthor({name: `Vote me!`, iconURL: client.user.displayAvatarURL()})
       
  .setDescription(`[Click Here](https://top.gg/bot/${client.user.id}/vote) or On The Below Button To Vote Me`)
    .setColor(`${client.embedColor}`)
     
return message.reply({ embeds: [embed], components: [row] });
  },
};
