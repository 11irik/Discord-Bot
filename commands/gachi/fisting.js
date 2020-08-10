const {Command} = require('discord.js-commando');

module.exports = class FistingCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'fisting',
            group: 'gachi',
            memberName: 'fisting',
            guildOnly: true,
            description: 'Shows price of fisting'
        });
    }

    run(message) {
        return message.reply(`fisting is 300 bucks`);
    }
};