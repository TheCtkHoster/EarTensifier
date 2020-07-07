const Command = require('../../structures/Command');

module.exports = class Queueloop extends Command {
	constructor(client) {
		super(client, {
			name: 'queueloop',
			description: 'Loops the queue',
			cooldown: '4',
			aliases: ['loopqueue', 'repeatqueue', 'queuerepeat'],
			inVoiceChannel: true,
			sameVoiceChannel: true,
			playing: true,
		});
	}
	async run(client, message) {
		const player = client.music.players.get(message.guild.id);

		if (player.queue.repeat.queue) {
			player.queue.loop('queue');
			return message.channel.send('Queue has been unlooped.');
		}
		else {
			player.queue.loop('queue');
			return message.channel.send('Queue is being looped.');
		}
	}
};