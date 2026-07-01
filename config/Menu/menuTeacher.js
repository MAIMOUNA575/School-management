import { question, close } from "../../utils/interface.js";
import { GestionGrade } from "../Gestion/GestionGrade.js";
import { GestionAbsences } from "../Gestion/GestionAbsences.js";
import { GestionStatistiquesimple } from "../Gestion/GestionStatistique.js";




const afficherMenuTeacher = async () => {
    let actif = true;

    while (actif) {
        console.log("\n〚=== MENU PROFESSEUR ===〛");
        console.log("1. Gestion des notes");
        console.log("2. Gestion des absences");
        console.log("3. Statistiques");
        console.log("0. Quitter");

        const choix = await question("Choix : ");

        switch (choix) {
            case "1": {
                await GestionGrade();
                break;
            }
            case "2": {
                await GestionAbsences();
                break;
            }
            case "3": {
                await GestionStatistiquesimple();
                break;
            }
            case "0": {
                actif = false;
                console.log("\nMerci !");
                close();
                break;
            }
            default: {
                console.error(" Choix invalide.");
            }
        }
    }
};

export { afficherMenuTeacher };