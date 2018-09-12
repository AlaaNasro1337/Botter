const { Monitor } = require('klasa');

module.exports = class extends Monitor {

    constructor(...args) {
        super(...args, {
            name: 'antiinvite',
            enabled: false,
            ignoreSelf: true
        });
    }

    run(msg) {
        if (msg.channel.type !== 'text' || msg.guild.settings.antiinvite !== true) return null;
        if (!/(https?:\/\/)?(www\.)?(discord\.(gg|li|me|io)|discordapp\.com\/invite)\/.+/.test(msg.content)) return null;
        return msg.delete()
            .catch(err => this.client.emit('log', err, 'error'));

        if (msg.guild.settings.modlog) {
            new ModLog(msg.guild)
                .setType('automatically')
                .setModerator(client.user.username)
                .setUser(msg.author)
                .setReason('automatically deleted invite link')
                .send();
            }
    }

    async init() {
        this.provider = this.client.providers.get('json');
    }

};
