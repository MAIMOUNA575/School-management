import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin absolu pour centraliser le fichier de log à la racine
const fichierLog = path.join(__dirname, '..', 'logger.txt');

/**
 * Enregistre un message dans les logs avec un niveau spécifique
 * @param {string} message - Le texte à enregistrer
 * @param {string} level - Le niveau du log : 'INFO', 'WARNING', 'ERROR' (par défaut 'INFO')
 */
export function log(message, level = 'INFO') {
    // 🔄 Formatage de la date en YYYY-MM-DD HH:mm:ss
    const maintenant = new Date();
    const dateStr = maintenant.getFullYear() + '-' +
        String(maintenant.getMonth() + 1).padStart(2, '0') + '-' +
        String(maintenant.getDate()).padStart(2, '0');
    
    const heureStr = String(maintenant.getHours()).padStart(2, '0') + ':' +
        String(maintenant.getMinutes()).padStart(2, '0') + ':' +
        String(maintenant.getSeconds()).padStart(2, '0');

    const dateFormatee = `${dateStr} ${heureStr}`;

    // 🔄 Construction de la ligne selon ton format précis
    const texte = `${dateFormatee} [${level.toUpperCase()}] ${message}\n`;

    // Écriture dans le fichier
    fs.appendFileSync(fichierLog, texte);

    // Affichage console avec un visuel adapté au niveau
    if (level.toUpperCase() === 'ERROR') {
        console.error(`🚨 LOG : ${texte.trim()}`);
    } else if (level.toUpperCase() === 'WARNING') {
        console.warn(`⚠️ LOG : ${texte.trim()}`);
    } else {
        console.log(`ℹ️ LOG : ${texte.trim()}`);
    }
}

export { fichierLog };