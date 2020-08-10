const {CommandoClient} = require('discord.js-commando');
const {Structures} = require('discord.js');
const path = require('path');
const {prefix, token} = require('./config.json');

Structures.extend('Guild', function (Guild) {
    class MusicGuild extends Guild {
        constructor(client, data) {
            super(client, data);
            this.musicData = {
                queue: [],
                isPlaying: false,
                nowPlaying: null,
                songDispatcher: null,
                volume: 1
            };
        }
    }

    return MusicGuild;
});

const client = new CommandoClient({
    commandPrefix: prefix,
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['music', 'Music Command Group'],
        ['gachi', 'Gachi Command Group']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands({
        eval: false,
        prefix: false,
        commandState: false,
        unknownCommand: false,
        help: false
    })
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity(`${prefix}help`)
});

client.on('voiceStateUpdate', async (___, newState) => {
    if (
        newState.member.user.bot &&
        !newState.channelID &&
        newState.guild.musicData.songDispatcher &&
        newState.member.user.id === client.user.id
    ) {
        newState.guild.musicData.queue.length = 0;
        newState.guild.musicData.songDispatcher.end();
    }
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
    if (!channel) return;
    channel.send(`Welcome to the club, ${member}!`);
});

client.login(token);
