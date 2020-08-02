const { MessageEmbed } = require("discord.js")

const randomcolour =  "#" + Math.floor(Math.random() * 16777215).toString(16);

module.exports = {
    name: "ticket",
    description: "A ticket command",
    usage: "*ticket",
    async run (bot, message, args) {
        const embed = new MessageEmbed()
        .setColor(randomcolour)
        .setTitle("🎫  CREATE A TICKET  🎫")
        .setDescription("***INFO***\n\n*What is a ticket?*\nA ticket is (in this server) used for you to make suggestions!\n\n**Create a Ticket**\nClick on the 🎫 down below this message to create a ticket!")

        let m = await message.channel.send(embed)
        m.react("🎫")
    }
}