const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const bot = new Discord.Client();
const adapter = new FileSync('database.json');
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };
const fs = require('fs');
const db = low(adapter);
    db.defaults({ ann:[]})
        .write()
bot.login(process.env.TOKEN);

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
            case "play":
            if (message.channel.id === musicbot) {
               var value = message.content.substr(5);
               if (message.member.voiceChannel) {
                   if (value === ""){
                       message.reply('il faut que tu entres un lien <:051smiling1:458741159666384906>');
                       }
                   else {
                        message.member.voiceChannel.join()
                            .then(connection => { // quand il se connecte
                        message.reply('Je suis là <:051smile:458741156017078273>');
                        const stream = ytdl(value, { filter : 'audioonly' });
                        const dispatcher = connection.playStream(stream, streamOptions)
                            .then(message.channel.sendMessage("Ça va swinguer <:051vomiting1:458741160257781790>"));})
                   

                }}
                else {
                    message.reply('il faut être dans un salon vocal pour faire ça <:051smiling1:458741159666384906>');
                }
            }
            else {
                message.channel.sendMessage("Il faut être dans <#452833658659930117> pour faire cette commande <:051tongue:458741159326515201>")
            };
 break;
            case "list":
            if (message.channel.id === musicbot) {
               var value = message.content.substr(5);
               if (message.member.voiceChannel) {
                   if (value === ""){
                       message.reply('il faut que tu entres un lien <:051smiling1:458741159666384906>');
                       }
                   else {
                        message.member.voiceChannel.join()
                            .then(connection => { // quand il se connecte
                        message.reply('Je suis là <:051smile:458741156017078273>');
                        const stream = ytdl("https://www.youtube.com/watch?v=C6brqAkArmA", { filter : 'audioonly' });
                        const dispatcher = connection.playStream(stream, streamOptions)
                            .then(message.channel.sendMessage("Ça va swinguer <:051vomiting1:458741160257781790>"));})
                   

                }}
                else {
                    message.reply('il faut être dans un salon vocal pour faire ça <:051smiling1:458741159666384906>');
                }
            }
            else {
                message.channel.sendMessage("Il faut être dans <#452833658659930117> pour faire cette commande <:051tongue:458741159326515201>")
            };
 break;
    }

});
