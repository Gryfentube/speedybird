const Discord = require('discord.js');
const fs = require('fs');
const request = require('request');
const randomimages = require('random-puppy');
const faker = require('faker');
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };
faker.locale = "fr";
require('discord.js-music');

bot.login(process.env.TOKEN);

//salons DexSia Introduce YourSelf
    const annDXSIY = "452800422655033365"; //salon annonce DexSia Introduce Yourself
//Portal DexSia Introduce Yourself
    const annPoDXSIY = "455740492999688192"; //salon annonce de Portal Dxs IY
    const activitDXSIY = "455798472076034051"; //salon activité du bot DexSia Assistant
    const consauleDXSIY = "455740278272425995"; //salon console de Portal Dxs IY
//salons DexSia
    const annDXS = "454994767877636098"; //salon annonce DexSia
//Portal DexSia
    const annPoDXS = "455740525807665172"; //salon annonce de Portal DexSia
    const activitDXS = "455836828214231082"; //salon activité du bot DexSia
    const consauleDXS = "455740246110240778"; //salon console de Portal DexSia
//Portal DexSia
    const activitYAC = "464528875477663744"; //salon activité du bot DexSia
    const consauleYAC = "455740318135091202"; //salon console de Portal DexSia
//Admin
    const jack = "239310906981482496"; //Définir Jack avec son id
    const gryf = "187554016853622784"; //Définir Gryf avec son id
    const alladmin = "(message.member.id === jack) || (message.member.id === gryf)"; //Jack ou Gryf (dans un if généralement)
//end

function rando2(min, max) {
  min = Math.ceil(0);
  max = Math.floor(1);
  randnum = Math.floor(Math.random() * (max - min +1)) + min;}
function rando3(min, max) {
  min = Math.ceil(0);
  max = Math.floor(2);
  randnum = Math.floor(Math.random() * (max - min +1)) + min;}

function attachIsImage(msgAttach) {
    var url = msgAttach.url;
    //True if this url is a png image.
    return url.indexOf("png", url.length - "png".length /*or 3*/) !== -1;}


var prefix = ("_"); //définir le prefix du bot
var activ = ("être un artiste sans talent"); //modifier la valeur entre guillemets pour changer son état au démarage
var values = ("empty"); //empecher les soucis de values

//event on démarrage
bot.on('ready', () => {
    bot.user.setPresence({ game: { name: activ}});
    var annonce = db.get(`ann`).map('annonce').value();
    console.log("Le bot est prêt");
    bot.channels.get(consauleYAC).send({embed: {color: 0x3ac400, author: {name: "Je suis en ligne :D",
      icon_url: "https://cdn.discordapp.com/icons/441664261454823444/1cced0ad87913d0d5232dce11bedb70f.png"}}})
});

bot.on('message', message => {
    var d = new Date();
    var month = new Array();
    month[0] = "de Janvier";
    month[1] = "de Fevrier";
    month[2] = "de Mars";
    month[3] = "d'Avril";
    month[4] = "de Mai";
    month[5] = "de Juin";
    month[6] = "de Juillet";
    month[7] = "d'Août";
    month[8] = "de Septembre";
    month[9] = "d'Octobre";
    month[10] = "de Novembre";
    month[11] = "de Décembre";
    var mois = month[d.getMonth()];
    var author = message.member.displayName;
	var value = message.content;
	var messlow = value.toLowerCase();
    var imauth = message.member.user.avatarURL;

	if (message.channel.id === "464524797867720704") {
	if(messlow.startsWith("montre moi un") || messlow.startsWith("montre moi une")) {
    if (reddit[args[3]] != '' && reddit[args[3]] != null) {
	var rep = reddit[args[3]];
                    const subreddits = [
                        rep
                    ]
                    const sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
                    randomimages(sub).then(url => {
                        const embed = new Discord.RichEmbed()
                        .setDescription("Voici " + args[2] + " " + args[3])
                        .setImage(url)
                        .setColor(faker.internet.color())
                        .setFooter('Merci ' + author);
                        return message.channel.send(embed);
                    })
                }else{
                    message.channel.sendMessage("J'ai pas compris")
                }
        }
	}
        if (message.channel.id === "473946778555777034"){
            /*if (messlow.startsWith("skribbl")) {
                var invite = message.content.substr(8);
                bot.channels.get("435043097508970506").sendMessage("Êvenement en cours ! @everyone")
                    .then(bot.channels.get("435043097508970506").sendMessage({"embed": {"title": "Rejoignez le Skribble.io qui est en route ! <:051happy:473830226133254154>","url": invite,"color": 2118341,"footer": {"icon_url": message.member.user.avatarURL,"text": author},"image": { "url": "https://skribbl.io/res/logo.gif"},"author": {"name": "Skribble.io","url": "https://skribbl.io/","icon_url": "http://youandcraft.esy.es/images/background.png"}}}))
            */
		if (messlow.startsWith("skribbl")) {
                var invite = message.content.substr(8);
		const embed = new Discord.RichEmbed()
    		.setColor("#133F8C")
    		.setTitle("Rejoignez le Skribble.io qui est en route ! <:051happy:473830226133254154>")
    		.setDescription(member.displayName + " viens de rejoindre le serveur");
   		 logChannel.send({embed}).catch();
                bot.channels.get("435043097508970506").sendMessage("Êvenement en cours ! @everyone")
			.then(bot.channels.get("435043097508970506").send(embed);
	}
            if (messlow.startsWith("event.dessin")) {
                var lien = message.content.substr(13);
                bot.channels.get("473946778555777034").sendMessage("Le défis du moi est le suivant ! @everyone\n*(Je rappelle que le vainqueur choisira le modèle du mois prochain)* <:051happy:473830226133254154>")
                    .then(bot.channels.get("473946778555777034").sendMessage({"embed": {"description": "Le défi du mois " + mois + " est de reproduire ce dessin, à votre manière !\nLibre à vous de modifier à votre guise ! Le jury se basera bien plus sur la qualité du dessin, que sur le respect du dessin de base.\n*Vous avez jusqu'au 28 pour rendre votre dessin, et les résultats seront disponibles le jour suivant ! Alors profitez de tout ce temps pour créer un dessin que vous trouverez parfait*\n","color": 16741757,"image": {"url": lien}}}))
            }
            if (messlow.startsWith("joue à")) {
                var newact = message.content.substr(7);
                bot.user.setPresence({ game: { name: newact}})
                bot.channels.get("464520165820989450").sendMessage({embed: {color: 0x3ac400, author: {name: "Je joue maintenant à " + value + " grâce à " + author, icon_url: imauth}}})
                bot.channels.get(consauleYAC).sendMessage({embed: {color: 0x3ac400, author: {name: "Je joue maintenant à " + value + " grâce à " + author, icon_url: imauth}}})};
        }
        if ((message.attachments.size > 0) && (message.channel.id === "418144664101847061")) {
        message.react('👍')
        .then(message.react('👎'));        
        }
    
        if (message.channel.id === "464783525510381579") {

            if (message.content.includes("is moi un poème")) {
                message.channel.sendMessage("Les roses sont rouges, les violettes sont bleues. Vous n'avez rien de mieux à faire ?");
            }
            if ((message.content.startsWith("onjour")) || (message.content.startsWith("alut")) || (message.content.startsWith("Yo"))) {
                message.channel.sendMessage("Hey ! Saluuuuuut " + author + " ! <:051smile1:458741159288766464>");
            }
            if (message.content.includes("erci")) {
                message.channel.sendMessage("Ah bah de rien mon gars <:051tired:458741158416220163>");
            }
            if (message.content.includes("u as une idé")) {
                message.channel.sendMessage("Nan mais j'ai pas d'idée, mais regarde Akame je fonctionne !");
            }
            if ((message.content.includes("uleur préfér")) || (message.content.includes("quoi"))) {
                message.channel.sendMessage("Ma couleur préférée, c'est un légume ! <:051shocked:458741159133708330>");
            }
            
            
        }
    
})
