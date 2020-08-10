const {Command} = require('discord.js-commando');

module.exports = class HelpCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'help',
            group: 'util',
            memberName: 'help',
            description: 'Даю подсказку!',
            examples: ['help'],
            help: true,
            hidden: true
        });
    }

    run(msg) {
        return msg.reply(
            `Пасаси`
        );
    }
};