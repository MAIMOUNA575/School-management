import { question, close } from "../../utils/interface.js";
import { GestionGrade } from "../Gestion/GestionGrade.js";
import { GestionAbsences } from "../Gestion/GestionAbsences.js";
import { GestionStatistiquesimple } from "../Gestion/GestionStatistique.js";

let actif = true;

const afficherMenuStudent = async () => {
    
    while (actif) {
        console.log("\n〚=== MENU ÉTUDIANT ===〛");
        console.log("1. Consulter mes notes");
        console.log("2. Consulter mes absences");
        console.log("3. Consulter ma moyenne générale");
        console.log("4. Consulter mes moyennes par matière");
        console.log("0. Quitter");


        const choix = await question("Choix : ");

        switch (choix) {
            case "1": {
                await GestionGrades();
                break;
            }
            case "2": {
                await GestionAbsences();
                break;
            }
            case "3": {
                await GestionStatistiques();
                break;
            }
            case "4": {
                await GestionStatistiques();
                break;
            }
            case "0":
                actif = false;
                console.log("\nAu revoir ! 👋 Merci");
                fermerInterface();
                break;
        }
    }
}

export {afficherMenuStudent}