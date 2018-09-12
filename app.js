const klasa = require('klasa');
const config = require('./config.json')

const client = new klasa.Client({
    clientOptions: {
        fetchAllMembers: false
    },
    prefix: 'cr!', // change it to your wanted prefix
    cmdEditing: true, // Whether the bot should update responses if the command is edited
    typing: false, // this can be annoying
    ignoreSelf: true, // Unless it's a selfbot then make this true
    ignoreBots: true, // I'd use this
    ownerID: "303951120227762176",
});

client.login(config.token);
