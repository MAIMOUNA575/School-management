import fs from 'fs';


const fichierLog = 'logger.txt';

 export function log(message) {
    const date = new Date().toLocaleString();

    const texte = `[${date}] ${message}\n`;

    fs.appendFileSync(fichierLog, texte);

    console.log("LOG :", message);
}
export {fichierLog};