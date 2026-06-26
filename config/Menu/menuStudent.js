import { question, close } from "../../utils/interface.js";
import { session } from "../Connexion.js";
import { rechercheStudentByUserId } from "../../services/StudentServices.js";
import { listerNotesEtudiant } from "../../services/GradesServives.js";
import { consulerAbsences } from "../../services/absencesServives.js";
import { moyenneEtudiant, moyennesParMatiere } from "../../services/statistiquesimpleServices.js";

const afficherMenuStudent = async () => {
    const etudiant = rechercheStudentByUserId(session.connectionDelUtilisateur.id);
    if (!etudiant) {
        console.error("Impossible de retrouver votre dossier étudiant.");
        return;
    }

    let actif = true;

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
                const notes = listerNotesEtudiant(etudiant.id);
                console.table(notes);
                break;
            }
            case "2": {
                const absences = consulerAbsences(etudiant.id);
                console.table(absences);
                break;
            }
            case "3": {
                const moyenne = moyenneEtudiant(etudiant.id);
                console.log(`Votre moyenne générale : ${moyenne !== null ? moyenne.toFixed(2) : 'N/A'}/20`);
                break;
            }
            case "4": {
                const moyennes = moyennesParMatiere(etudiant.id);
                console.table(moyennes);
                break;
            }
            case "0": {
                actif = false;
                console.log("\nMerci !");
                close();
                break;
            }
            default: {
                console.error("❌ Choix invalide.");
            }
        }
    }
};

export { afficherMenuStudent };