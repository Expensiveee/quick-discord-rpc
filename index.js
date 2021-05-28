const RPC = require('discord-rpc');
const client = new RPC.Client({ transport: 'ipc' });

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "Building bots for my server",
            state: "Discovering Discord buttons",
            assets: {
                large_image: "radamyy",
                large_text: "large_image_text"
            },
            timestamps: {
                start: Date.now(),
                // end: Date.now() + 600000
            },
            buttons: [
                { label: "Join the Radamyy Community", url: "https://discord.gg/8C4kjsGmrx" },
                { label: "Take a look at my Github", url: "https://github.com/Expensiveee" },
            ]
        }
    });
});

//Create your new app if you don't jave one https://discord.com/developers/applications

client.login({
    clientId: '', //Applications  > click on your application > general infomration > copy & paste application id
    clientSecret: '' //Applications  > click on your application > OAuth2 > copy & paste  client secret
});