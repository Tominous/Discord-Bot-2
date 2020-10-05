const guild = require(`./../../schemas/guildSchema`)
const { Client, Message } = require("discord.js");
const bot = require('../../bot');

module.exports = {
    name: 'Prefix',
    aliases: ['pre', 'startofmessage'],
    catagory: 'moderation',
    usage: '[command] [optional setprefix]',
    description: `Sets the prefix for this guild!`,
    /**
     * @param {Client} bot
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (a, message, args) => {


        if (!args[0]) return message.channel.send(`The prefix for ${message.guild.name} is \`${bot.prefixes.get(message.guild.id)}\``);

        if (!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`You don't have enough permissions to do that!`);

        const set = args[0].toLowerCase();

        await guild.findOneAndUpdate({ _id: message.guild.id }, {
            Prefix: set
        }, { upsert: true });

        bot.prefixes.set(message.guild.id, set);

        message.channel.send(bot.embed.setDescription(`:white_check_mark: Success! The prefix for ${message.guild.name} is now \`${set}\``));

    }
};