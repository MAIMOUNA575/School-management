import { question, fermerInterface } from "../utils/rl.js";
import { GestionUsers } from "../config/Gestion/GestionUsers.js";
import { GestionTeachers } from "../config/Gestion/GestionTeachers.js";
import { GestionSubjects } from "../config/Gestion/GestionSubjects.js";
import { GestionStudents } from "../config/Gestion/GestionStudents.js";
import { GestionGrades } from "../config/Gestion/GestionGrades.js";
import { GestionAbsences } from "../config/Gestion/GestionAbsences.js";
import { Statistiques } from "../config/Gestion/Statistiques.js";
import { gestionUsers } from "../config/Gestion/GestionUser.js";

let actif = true;


const afficherMenuAdmin = async () => {

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
            case "1": {
                await gestionUsers();
                break;
            }
            case "2": {
                await GestionTeachers();
                break;
            }
            case "3": {
                await GestionSubjects();
                break;
            }
            case "4": {
                await GestionStudents();
                break;
            }
            case "5": {
                await GestionGrades();
                break;
            }
            case "6": {
                await GestionAbsences();
                break;
            }
            case "7": {
                await Statistiques();
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