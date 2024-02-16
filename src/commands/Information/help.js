const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js");

module.exports = {
    name: "help",
    category: "Information",
    aliases: [ "h" ],
    description: "Get Help Menu",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {

      
        const lawde = new MessageActionRow()
	.addComponents(
       new MessageButton()
 .setLabel("Invite")
 .setStyle("LINK")
  .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=applications.commands%20bot`), 
       new MessageButton()
   .setLabel("Support")
 .setStyle("LINK")
    .setURL("https://discord.com/invite/3Khp9KedDq"), 
                ) 


     
let helpmenu = new MessageEmbed()

   

        .setAuthor({name : `${client.user.username} Help Menu`,iconURL : client.user.displayAvatarURL()})
  .setThumbnail("https://share.creavite.co/65c7123cd3c209b4b0552e6f.gif")
  
.setDescription(`<a:arrow:1182681388869234710> Prefix for this server is: **${prefix}**\n<a:arrow:1182681388869234710> Total Commands: ${client.commands.size}\n<a:arrow:1182681388869234710> [Get ${client.user.username}](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=applications.commands%20bot) | [Support](https://discord.com/invite/3Khp9KedDq) | [Vote](https://top.gg/bot/${client.user.id}/vote)\n\n **__All Modules:__**\n\n<a:cx_info:1171046533278482473> : Info\n<a:Musicz:1158410945744355439> : Music\n<a:diamond:1160512500719169608> : Filters\n<a:server:1158410977591709757> : Utility\n<a:Settings:1171045215444942919> : Config\n<:categories:1171412372905279589> : All Commands`)



      //  .setFooter(ee.footertext, ee.footericon)
        .setFooter({text : `Thanks For Selecting Rise!!` , iconURL : `https://share.creavite.co/65c7123cd3c209b4b0552e6f.gif`}).setThumbnail(client.user.displayAvatarURL({dynamic : true}))
     .setColor("#ff0000")
     

     
        const row = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId('help')
                .setPlaceholder('Rise <3')
                .addOptions([
                {
                    label: 'Info',
                    description: 'Show You Information Commands',
                    value: 'first',
                  emoji: '<a:cx_info:1171046533278482473>'
                },
                {
                    label: 'Music',
                    description: 'Show You Music Commands',
                    value: 'second',
                    emoji: '<a:Musicz:1158410945744355439>'
                },
{
                    label: 'Filters',
                    description: 'Show You Music Filter Commands',
                    value: 'fourth',
       emoji: '<a:diamond:1160512500719169608>'                },   
                  {
                    label: 'Utility',
                    description: 'Show You Utility Commands',
                    value: 'sixth',
       emoji: '<a:server:1158410977591709757>'                },         
                {
                    label: 'Config',
                    description: 'Show You Configuration Commands',
                    value: 'fifth',
                   emoji: '<a:Settings:1171045215444942919>'                },
                {
                    label: 'All Commands',
                    description: 'Show You All Commands',
                    value: 'third',
       emoji: '<:categories:1171412372905279589>'                }           
            ])
        )
        if (!args[0]) return message.reply({embeds: [helpmenu], components: [row,lawde]});
     //message.reply({ embeds: [helpmenu], components: [row] })
   }
}