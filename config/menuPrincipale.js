import { question,close } from "../utils/interface.js";
import { seConnecter, session } from "../config/Connexion.js"

// Afficher le message de bienvenue
const menuPrincipal = async () => {
    console.log("╔════════════════════════════════════════╗");
    console.log("║   BIENVENU SUR VOTRE APPLICATION       ║");
    console.log("║         DE GESTION D'ECOLE             ║");
    console.log("╚════════════════════════════════════════╝");

    let actif = true;
    while (actif) {
        console.log("\n〚=== GESTION SCOLAIRE ===〛");
        console.log("1. Connexion");
        console.log("0. Quitter");

        const choix = await question("Choix : ");

        switch (choix) {
            case "1": {
                const connecte = await seConnecter();
                if (connecte) {
                    if (session.connectionDelUtilisateur.role === "admin")console.log('gestion admin a venir');
                    else if (session.connectionDelUtilisateur.role === "teacher")console.log('gestion teacher a venir');
                    else if (session.connectionDelUtilisateur.role === "student")console.log('gestion student a venir');
                    else console.log("❌ Rôle inconnu.");
                }
                break;
            }
            case "0":
                actif = false;
                console.log("\nAu revoir ! 👋 Merci");
                fermerInterface();
                break;
            default:
                console.log("❌ Choix invalide.");
        }
    }
};

export { menuPrincipal };