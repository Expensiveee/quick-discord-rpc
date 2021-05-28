const RPC = require('discord-rpc');
const client = new RPC.Client({ transport: 'ipc' });

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "Details",
            state: "State",
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

client.login({
    clientId: '',
    clientSecret: ''
});