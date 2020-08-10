const {Command} = require('discord.js-commando');

module.exports = class SonCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'son',
            aliases: ['сын', 'сынок'],
            group: 'gachi',
            memberName: 'son',
            guildOnly: true,
            description: 'Зову сына'
        });
    }

    run(message) {
        return message.reply(`Папа!`);
    }
};