const { prefix } = require("../../config.js");

module.exports ={
name: "ready",
run: async (client) => {
    client.manager.init(client.user.id);
    client.logger.log(`${client.user.username} online!`, "ready");
    client.logger.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`, "ready");

    //Game
    let statuses = [`${prefix}help | ${prefix}invite`];
    setInterval(function() {
  	let status = statuses[Math.floor(Math.random()*statuses.length)];		
        client.user.setPresence({
            activities: [
                {
                    name: status,
                    type: "LISTENING",
                    url: "https://www.youtube.com/watch?v=ovGcjFPdnNQ"
                }
            ],
            status: "online"
        });
    }, 1000)
 }
};
