import { question, close } from "../../utils/interface.js";
import { GestionSubject } from "../Gestion/GestionSubject.js";
import { GestionGrade } from "../Gestion/GestionGrade.js";
import { GestionAbsences } from "../Gestion/GestionAbsences.js";
import { GestionTeacher } from "../Gestion/GestionTeacher.js"


let actif = true;

const afficherMenuTeacher = async () => {

    while (actif) {
        console.log("\n〚=== MENU PROFESSEUR ===〛");
        console.log("1. Gestion des notes");
        console.log("2. Gestion des absences");
        console.log("3. statistiques");
        console.log("0. Quitter");


        const choix = await question("Choix : ");

        switch (choix) {
            case "1": {
                await GestionSubjects();
                break;;
            }
            case "2": {
                await GestionGrades();
                break;
            }
            case "3": {
                await GestionAbsences();
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

export {afficherMenuTeacher}