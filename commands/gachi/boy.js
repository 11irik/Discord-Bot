const {Command} = require('discord.js-commando');

module.exports = class BoyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'boy',
            group: 'gachi',
            memberName: 'boy',
            guildOnly: true,
            description: 'Where?'
        });
    }

    run(message) {
        return message.reply(`boy next door`);
    }
};