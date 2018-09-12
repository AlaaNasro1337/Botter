const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'punish',
            enabled: true,
            runIn: ['text'],
            cooldown: 5,
            permLevel: 2,
            botPerms: [],
            requiredSettings: [],
            description: 'Mutes or Unmutes the user mentioned',
            usage: '<user:member> [reason:string]',
            usageDelim: undefined,
            extendedHelp: 'No extended help available.'
        });
    }

    async run(msg, [user, ...reason]) {
      reason = reason.length > 0 ? reason.join(' ') : null;
      if (member.highestRole.position >= msg.member.highestRole.position) {
          return msg.send(`${msg.author}, you may not execute this command on this member.`);
      }

      msg.channel.send("aaaa")

      if (msg.guild.settings.modlog) {
          new ModLog(msg.guild)
              .setType('punish')
              .setModerator(msg.author)
              .setUser(member.user)
              .setReason(reason)
              .send();
      }

      return msg.send(`Successfully punished the member ${member.user.tag}${reason ? `\nWith reason of: ${reason}` : ''}`);
    }

};
