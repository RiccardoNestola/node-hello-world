const http = require("http");

require("dotenv").config();


const randomPhrases = [
    "Nei tuoi occhi innocenti posso ancora ritrovare il profumo di un amore puro. (Acqua azzurra, acqua chiara)",
    "Amarsi un po’, è come bere, più facile è respirare. Basta guardarsi e poi, avvicinarsi un po’, e non lasciarsi mai. (Amarsi un po’)",
    "In un mondo che non ci vuole più, il mio canto libero sei tu. (Il mio canto libero)",
    "Un angelo caduto in volo, questo tu ora sei in tutti i sogni miei. (Mi ritorni in mente)",
    "Perché io sono innamorato sempre di più, in fondo all’anima ci sei sempre tu (Un’avventura)",
    "Mi son svegliato solo, poi ho incontrato te, l’esistenza un volo diventò per me. (Vento nel vento)",
    "E respirando brezze che dilagano su terre, senza limiti e confini, ci allontaniamo e poi ci ritroviamo più vicini. (La collina dei Ciliegi)",
    "Io e te vento nel vento, io e te nodo nell’anima, stesso desiderio di morire e poi rivivere. (Vento nel vento)"
];


function getRandomPhrases() {
    const randomIndex = Math.floor(Math.random() * randomPhrases.length);
    return randomPhrases[randomIndex];
}



const port = process.env.PORT || 3000;

const server = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    const randomPhrases = getRandomPhrases();
    res.end(`
    <h1>Le migliori frasi di Lucio Battisti</h1>
    <h2>${randomPhrases}</h2>`);
})


server.listen(port, function () {
    console.log("Server is running on port: http://localhost" + port)
})