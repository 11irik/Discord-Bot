const {Command} = require('discord.js-commando');

module.exports = class DadCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'dad',
            aliases: ['папа', 'отец'],
            group: 'gachi',
            memberName: 'dad',
            guildOnly: true,
            description: 'Зову папу'
        });
    }

    run(message) {
        return message.reply(`сынок ебаный`);
    }
};