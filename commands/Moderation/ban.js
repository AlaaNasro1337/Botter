const { Command } = require('klasa');
const ModLog = require('../../util/modlog');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'ban',
            permLevel: 2,
            botPerms: ['BAN_MEMBERS'],
            runIn: ['text'],

            description: 'Bans the mentioned member.',
            usage: '<user:mention> [reason:string] [...]',
            usageDelim: ' '
        });
    }

    async run(msg, [member, ...reason]) {
        reason = reason.length > 0 ? reason.join(' ') : null;

        // const member = await msg.guild.fetchMember(user.id).catch(() => null); // const member = await msg.guild.fetchMember(user).catch(() => null);

        if (!member) {
          return;
        } // else if (member.highestRole.position >= msg.member.highestRole.position) {
            // return msg.send(`${msg.author}, you may not execute this command on this member.`);
        /*}*/ else if (member.bannable === false) {
            return msg.send(`${msg.author}, I am not able to ban this member, sorry.`);
        } else if (member === msg.author) {
          return msg.send(`${msg.author}, Self harm is bad. :pensive:`)
        }

        await msg.guild.ban(member, { reason });

        if (msg.guild.settings.modlog) {
            new ModLog(msg.guild)
                .setType('ban')
                .setModerator(msg.author)
                .setUser(member)
                .setReason(reason)
                .send();
        }

        return msg.send(`Successfully banned the member ${member.tag}${reason ? `\nWith reason of: ${reason}` : ''}`);
    }

};
