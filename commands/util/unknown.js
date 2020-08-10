const {Command} = require('discord.js-commando');

module.exports = class UnknownCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'unknown-command',
            group: 'util',
            memberName: 'unknown-command',
            description: 'Ты куда звонишь, сынок йобаный?',
            examples: ['unknown-command kickeverybodyever'],
            unknown: true,
            hidden: true
        });
    }

    run(msg) {
        return msg.reply(
            `не понял!? Ты куда зв0нишь!? Юзай !help - это бесплатно(zero hundred bucks).`
        );
    }
};