const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "m"









client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === '◤◈chat-◈◥');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(` ̲  ̲***W̲e̲l̲c̲o̲m̲e  , ${member} ̲t̲o** @Mal , Codes**   :champagne_glass::rose::tada: *** `);


client.login(process.env.BOT_TOKEN);
