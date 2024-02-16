const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "invite",
    category: "Information",
    aliases: [ "addme", "i", "inv" ],
    description: "Invite Bot",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {
         
         
 const row = new MessageActionRow()
	.addComponents(
       new MessageButton()
 .setLabel("Invite")
 .setStyle("LINK") 
  .setEmoji("🔗")
  .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=applications.commands%20bot`), 
     new MessageButton() 
    .setLabel("Support")
    .setStyle("LINK")
     .setEmoji("🎧")
    .setURL("https://discord.com/invite/3Khp9KedDq")
	        ) 


          const mainPage = new MessageEmbed()

            .setAuthor({name: `Invite me!`, iconURL: client.user.displayAvatarURL()})
      
      .setColor(client.embedColor)
      .setDescription(`[Click here](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=applications.commands%20bot) To Invite Or The Below Button To Invite`)
      message.reply({ embeds: [mainPage], components: [row] });
  },
};