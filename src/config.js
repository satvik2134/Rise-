require("dotenv").config();

module.exports = {
  token: process.env.TOKEN || "miya",  // your bot token
  prefix: process.env.PREFIX || ".", // bot prefix
  ownerID: process.env.OWNERID || ["1036877996243562516"], //your discord id
  mongourl: process.env.MONGO_URI || "mongodb+srv://Rayzmusic:music@cluster0.rhzwp8e.mongodb.net/?retryWrites=true&w=majority", // MongoDb URL
  topggapi: "",
  embedColor: process.env.COlOR || "#E3242B", // embed colour
  logs: process.env.LOGS || "1182683403057897492", // channel id for guild create and delete logs
  langs: process.env.LANGS || "en",


  nodes: [
    {
      host: process.env.NODE_HOST || "lava.link",
      identifer: process.env.NODE_ID || "Main",
      port: parseInt(process.env.NODE_PORT || "80"),
      password: process.env.NODE_PASSWORD || "LAVA",
      secure: parseBoolean(process.env.NODE_SECURE || "false"),

    }
  ],


}

function parseBoolean(value) {
  if (typeof (value) === 'string') {
    value = value.trim().toLowerCase();
  }
  switch (value) {
    case true:
    case "true":
      return true;
    default:
      return false;
  }
}
