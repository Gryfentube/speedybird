const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({ ann:[]})
    .write()
var bot = new Discord.Client();
var prefix = ("_");
var activ = ("Moderer");
var values = ("empty");
bot.on('ready', () => {
    bot.user.setPresence({ game: { name: activ}});
    console.log("Le bot est prêt");
    
});

bot.login('NDU0MjMzMjM5Nzc1ODcwOTg1.DfqdRw.MwtBlidSFPjQ8Wnr4u-iXQK7CbE');

bot.on('message', message => {

    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()){

        case "sendrules":
        var title = ("Règles_générales :");
        var regle = db.get(`ann`).map('regle').value();
        bot.channels.get('374306466447884298').send(regle)
        break;
        case "supprimerlesalonuesh":    
        message.channel.delete()
        //message.reply("```Bonjour je me présente je suis un bot```");
        console.log('salope');
        break;
        case "id":
        var variable = message.id
        message.channel.sendMessage(variable)
        break;
        case "idchannel":
        var variable = message.channel.id
        message.channel.sendMessage(variable)
        break;
        case "reactplease":
        message.react('🇳');
        message.react('🇴');        
    }

});
