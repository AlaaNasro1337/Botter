const { Command } = require('klasa');
const announcement = require('../../util/announcement');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'subscribe',
            permLevel: 0,
            runIn: ['text'],
            aliases: ["sub"],
            description: 'Subscribe to this servers\' announcements.'
        });
    }

    async run(msg) {
        const role = announcement(msg);
        await msg.member.addRole(role);
        return msg.send(msg.language.get('COMMAND_SUBSCRIBE_SUCCESS', role.name));
    }

};
