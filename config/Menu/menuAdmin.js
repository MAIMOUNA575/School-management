import { question, close } from "../../utils/interface.js";
import { GestionTeacher } from "../Gestion/GestionTeacher.js";
import { GestionSubject } from "../Gestion/GestionSubject.js";
import { GestionStudent } from "../Gestion/GestionStudent.js";
import { GestionGrade } from "../Gestion/GestionGrade.js";
import { GestionAbsences } from "../Gestion/GestionAbsences.js";
import { GestionStatistiquesimple } from "../Gestion/GestionStatistique.js";
import { GestionUser } from "../Gestion/GestionUser.js";

const afficherMenuAdmin = async () => {
    let actif = true; // ← déplacé à l'intérieur, se réinitialise à chaque appel

    while (actif) {
        console.log("\n〚=== MENU ADMINISTRATEUR ===〛");
        console.log("1. Gestion des utilisateurs");
        console.log("2. Gestion des professeurs");
        console.log("3. Gestion des matières");
        console.log("4. Gestion des étudiants");
        console.log("5. Gestion des notes");
        console.log("6. Gestion des absences");
        console.log("7. Statistiques");
        console.log("0. Quitter");

        const choix = await question("Choix : ");

        switch (choix) {
            case "1": await GestionUser(); break;
            case "2": await GestionTeacher(); break;
            case "3": await GestionSubject(); break;
            case "4": await GestionStudent(); break;
            case "5": await GestionGrade(); break;
            case "6": await GestionAbsences(); break;
            case "7": await GestionStatistiquesimple(); break;
            case "0":
                actif = false;
                console.log("\nAu revoir ! 👋 Merci");
                close();
                break;
            default:
                console.log("❌ Choix invalide.");
        }
    }
};

export { afficherMenuAdmin };