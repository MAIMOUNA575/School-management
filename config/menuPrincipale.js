import { question,close } from "../utils/interface.js";
import { seConnecter, session } from "../config/Connexion.js"
import { afficherMenuAdmin } from "./Menu/menuAdmin.js";
import { afficherMenuStudent } from "./Menu/menuStudent.js";
import { afficherMenuTeacher } from "./Menu/menuTeacher.js";



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
                    if (session.connectionDelUtilisateur.role === "admin") await afficherMenuAdmin();
                    else if (session.connectionDelUtilisateur.role === "teacher") await afficherMenuTeacher();
                    else if (session.connectionDelUtilisateur.role === "student") await afficherMenuStudent();
                    else console.log(" Rôle inconnu.");
                }
                break;
            }
            case "0":
                actif = false;
                console.log("\nAu revoir ! 👋 Merci");
                close();
                break;
            default:
                console.log(" Choix invalide.");
        }
    }
};

export { menuPrincipal };