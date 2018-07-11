const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const bot = new Discord.Client();
const adapter = new FileSync('database.json');
const db = low(adapter);
    db.defaults({ ann:[]})
        .write()
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
    bot.channels.get("464520165820989450").send({embed: {color: 0x3ac400, author: {name: "Je suis en ligne :D",
      icon_url: "https://cdn.discordapp.com/icons/441664261454823444/1cced0ad87913d0d5232dce11bedb70f.png"}}})
});

bot.on('message', message => {
    var author = message.member.displayName;
    var value = message.content;
    var imauth = message.member.user.avatarURL;
    
    if (message.channel.id === "466719318659432449") {
        bot.user.setPresence({ game: { name: value}})
            .then(bot.channels.get(consauleYAC).sendMessage({embed: {color: 0x3ac400, author: {name: "Je joue maintenant à " + value + " grâce à " + author,
                                                               icon_url: imauth}}}))};
    
    
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
