const [Client, Attachment} = require('discord.js');
const bot = new Client();

const token = 'NjQ1OTYzNzk1Mzg2MjA0MTgw.XdMojQ.cwDJWUhbV60D9KcE5PU9o2xws0I';

const PREFIX = '!';

var version = '1.0.1';

bot.on('ready', () =>{
    console.log('This Bot is Online!')
})

bot.on('message', msg=>{
  let args = msg.content.substring(PREFIX.length).split(" ");

  switch(args[0]){
        case 'sword':
            const swordgif = new Attachment('https://media3.giphy.com/media/dv63Zr3IjzRq8/source.gif')
            msg.channel.send(swordgif);
        break;
        case 'happy':
            const happygif = new Attachment('https://media3.giphy.com/media/100HzPDqKviwVi/source.gif')
            msg.channel.send(happygif);
        break;
        case 'what':
            const whatgif = new Attachment('https://media0.giphy.com/media/3o7527pa7qs9kCG78A/giphy.gif')
            msg.channel.send(whatgif);
        break;
        case 'sad':
            const sadgif = new Attachment('https://media3.giphy.com/media/ROF8OQvDmxytW/giphy.gif')
            msg.channel.send(sadgif);
        break;
        case 'suffer':
            const suffergif = new Attachment('https://media0.giphy.com/media/o8nHLRBIS2vcc/giphy.gif')
            msg.channel.send(suffergif);
        break;
        case 'embarrased':
            const embarrasedgif = new Attachment('https://media.tenor.com/images/8a129f1fcb74672a640f4cf0737c1da1/tenor.gif')
            msg.channel.send(embarrasedgif);
        break;
        case 'sillyme':
            const sillymegif = new Attachment('https://media1.giphy.com/media/JmbwX2xrXVi80/source.gif')
            msg.channel.send(sillymegif);
        break;
        case 'haha':
            const hahagif = new Attachment('https://media2.giphy.com/media/13XsAPzCvW5JYI/giphy.gif')
            msg.channel.send(hahagif);
        break;
        case 'clap':
            const clapgif = new Attachment('https://media0.giphy.com/media/Jir3toQTWW9Ne/giphy.gif')
            msg.channel.send(clapgif);
        break;
        case 'confused':
            const confusedgif = new Attachment('https://media1.tenor.com/images/c28cf58b51b74120d2f79f729be6b5de/tenor.gif?itemid=11866636')
            msg.channel.send(confusedgif);
        break;
        case 'huh':
            const huhgif = new Attachment('http://likegif.com/wp-content/uploads/2013/11/anime-confused-gif.gif')
            msg.channel.send(huhgif);
        break;
        case 'stopit':
            const stopitgif = new Attachment('https://media1.tenor.com/images/06771289ebf82f84196205e201beedc5/tenor.gif?itemid=11355263')
            msg.channel.send(stopitgif);
        break;
        case 'stop':
            const stopgif = new Attachment('https://media2.giphy.com/media/nRTX3HNLaJToY/source.gif')
            msg.channel.send(stopgif);
        break;
        case 'mushroom':
            const mushroomgif = new Attachment('https://media3.giphy.com/media/kkSkgexb9xBoQ/giphy.gif')
            msg.channel.send(mushroomgif);
        break;
        case 'loveexplosion':
            const loveexplosiongif = new Attachment('https://thumbs.gfycat.com/RespectfulRealisticHorse-size_restricted.gif')
            msg.channel.send(loveexplosiongif);
        break;
        case 'cactusjuice':
            const cactusjuicegif = new Attachment('http://giphygifs.s3.amazonaws.com/media/oQAHwsVpxpy8w/giphy.gif')
            msg.channel.send(cactusjuicegif);
        break;
        case 'loading':
            const loadinggif = new Attachment('https://media1.giphy.com/media/zgGrSqSi3SSqs/source.gif')
            msg.channel.send(loadinggif);
        break;
        case 'surprise':
            const surprisegif = new Attachment('https://media0.giphy.com/media/93c09w31Ys65O/source.gif')
            msg.channel.send(surprisegif);
        break;
        case 'supersurprise':
            const supersurprisegif = new Attachment('https://media.giphy.com/media/nesIgyNcDdbxe/giphy.gif')
            msg.channel.send(supersurprisegif);
        break;
        case 'gasp':
            const gaspgif = new Attachment('https://i.gifer.com/DAuh.gif')
            msg.channel.send(gaspgif);
        break;
        case 'love':
            const lovegif = new Attachment('https://media.tenor.com/images/74a2b4b0fc38bc87c81f68b0bb24572d/tenor.gif')
            msg.channel.send(lovegif);
        break;
        case 'notamused':
            const notamusedgif = new Attachment('https://i.pinimg.com/originals/f2/8f/1b/f28f1b8364a4cb4702cdcfdbbdb36b2f.gif')
            msg.channel.send(notamused);
        break;
        case 'laugh':
            const laughgif = new Attachment('https://media1.giphy.com/media/4jo8C9xplrLG0/giphy.gif')
            msg.channel.send(laughgif);
        break;
        case 'creeper':
            const creppergif = new Attachment('https://media3.giphy.com/media/qCFw3jLXkTAkM/giphy.gif')
            msg.channel.send(creepergif);
        break;
        case 'pig':
            const piggif = new Attachment('https://media0.giphy.com/media/139eZBmH1HTyRa/giphy.gif')
            msg.channel.send(piggif);
        break;
        case 'herobrine':
            const herobrinegif = new Attachment('https://media1.giphy.com/media/OzJ4bGpmSHBwA/giphy.gif')
            msg.channel.send(herobrinegif);
        break;
        case 'enderbro':
            const enderbrogif = new Attachment('https://media3.giphy.com/media/lQ8UtEWNmtyj6/giphy.gif')
            msg.channel.send(enderbrogif);
        break;
        case 'bomb':
            const bombgif = new Attachment('https://i.makeagif.com/media/5-10-2015/q0tjHp.gif')
            msg.channel.send(bombgif);
        break;
        case 'tank':
            const tankgif = new Attachment('https://media1.tenor.com/images/228090744e4edbab78f778e6c804c0f3/tenor.gif?itemid=15395360')
            msg.channel.send(tankgif);
        break;
        case 'disgust':
            const disgustgif = new Attachment('https://media1.giphy.com/media/VgNPHDen9axO0/source.gif')
            msg.channel.send(disgustgif);
        break;
        case 'superdupersurprise':
            const superdupersurprisegif = new Attachment('https://thumbs.gfycat.com/SparklingObedientGoldfinch-size_restricted.gif')
            msg.channel.send(superdupersurprisegif);
        break;
        case 'angry':
            const angrygif = new Attachment('https://media0.giphy.com/media/KkN91uUyBo2Yw/source.gif')
            msg.channel.send(angrygif);
        break;
        case 'terrified':
            const terrifiedgif = new Attachment('https://media1.giphy.com/media/14ut8PhnIwzros/giphy.gif')
            msg.channel.send(terrifiedgif);
        break;

        }      

})

bot.login(process.env.token);
