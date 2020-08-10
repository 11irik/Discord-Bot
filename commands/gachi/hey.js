const {Command} = require('discord.js-commando');

module.exports = class HeyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'hey',
            group: 'gachi',
            memberName: 'hey',
            guildOnly: true,
            description: 'Some nice words for u'
        });
    }

    run(message) {
        return message.reply(`nice cock, awesome balls!`);
    }
};