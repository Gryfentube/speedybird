const Discord = require('discord.js');


var bot = new Discord.Client();
var prefix = ("_");
var activ = ("Moderer");
var values = ("empty");
bot.on('ready', () => {
    bot.user.setPresence({ game: { name: activ}});
    console.log("Le bot est prêt");
    
});

bot.login('NDU0NjQxNDEwMDEzMDAzNzc2.DfwkUw.reQVXD-BK4kmzDmLXBN3ONeipJs');

bot.on('message', message => {

    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()){

        case "sendrules":
        var title = ("Règles_générales :");
       
        bot.channels.get('374306466447884298').send("regle")
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
