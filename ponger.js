const Discord = require('discord.js')
const client = new Discord.Client

client.on('ready', () => {
    client.user.setActivity(`@everyone`)
    console.log('Me me ping you')
})

client.on('message', message => {
let args = message.content.split(' ').slice(1);

    const parrot = client.emojis.find("name", "congaparrot")
    var storeparrots = `${parrot}${parrot}${parrot}${parrot}${parrot}${parrot}${parrot}${parrot}${parrot}${parrot}${parrot}${parrot}${parrot}${parrot}${parrot}${parrot}${parrot}${parrot}${parrot}${parrot}${parrot}${parrot}${parrot}${parrot}${parrot}${parrot}${parrot}${parrot}${parrot}${parrot}${parrot}${parrot}${parrot}${parrot}${parrot}`;
    
    function randomresponse() { 
        var rand = ['ur mum gay', 'Sweet potato rocks', 'gay', 'me me big boy', 'die', '.', 'ur mr. gay', 'shut the fuck up Ponger 2', 'scrabooble scradoodle your pee pee is now a noodle', 'Dong dong dong your opinion is wrong', 'Hey hey hey your opinion is gay', `${storeparrots}`, `${storeparrots}`, 'ur mum is stored in my closet.', 'pee is stored in the balls.', 'https://cdn.discordapp.com/attachments/330199202997207042/399300237476364289/send.gif'];
    
        return rand[Math.floor(Math.random()*rand.length)];
    }

    var storeresponse = `${randomresponse()}`

    if (message.content.startsWith('@everyone')) {
        message.channel.send(`@everyone ${storeresponse}`)
    }
});

client.login('Mzg3OTI0MzIxMzY2MTc5ODQx.DWtlwA.hArHDrDzPfxfqiae1kisc2S16o4');
