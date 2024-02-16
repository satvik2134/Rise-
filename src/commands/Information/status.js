const { MessageEmbed, version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const os = require('os')
const si = require('systeminformation');

module.exports = {
    name: "status",
    category: "Information",
    aliases: [ "stats", "st" ],
    description: "Show status bot",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
       const duration1 = moment.duration(message.client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const cpu = await si.cpu();
        const about = message.client.emoji.about;
        let ccount = client.channels.cache.size;
        let scount = client.guilds.cache.size;
        let mcount = 0; 
client.guilds.cache.forEach((guild) => {
    mcount += guild.memberCount 

})
      let fck = client.ws.ping
        const embed = new MessageEmbed()
          .setAuthor({name : `Bot's Information:`,iconURL : client.user.displayAvatarURL()})
.setColor(client.embedColor)
.setDescription('A Next-Generation Discord Music Bot With Many Awesome Features, Buttons, Menus, a Context Menu, and Customizable Settings')
.setThumbnail('https://share.creavite.co/65c7123cd3c209b4b0552e6f.gif')
.addFields({ name: '• | Servers', value: `${scount}`, inline: false },
           { name: '• | Channels', value: `${ccount}`, inline: false },
           { name: '• | Users', value: `${mcount}`, inline: false },
           { name: '• | Discord.js', value: `${version}`, inline: false },
           { name: '• | Node', value: `${process.version}`, inline: false },
           { name: '• | Platform', value: `${os.type}`, inline: false },
           { name: '• | Uptime', value: `${duration1}`, inline: false },
           { name: '• | Ping', value: `${ccount}`, inline: false },
           { name: '• | Cores', value: `${cpu.cores}`, inline: false },
           { name: '• | Model', value: `${os.cpus()[0].model}`, inline: false },
           { name: '• | Speed', value: `${os.cpus()[0].speed}MHz`, inline: false })
.setImage('https://media.discordapp.net/attachments/1182683403057897492/1206098464199540817/Rise_.gif?ex=65dac5ba&is=65c850ba&hm=8d705cc5001524009bae5ebd2ed011426358ab57cc7ad567c9d9d06f7bca6c75&=&width=870&height=489')
          .setFooter({text : `Developed By : ultimate.ly` , iconURL : `https://share.creavite.co/65c7123cd3c209b4b0552e6f.gif`});
message.reply({ embeds: [embed] });
    }
}