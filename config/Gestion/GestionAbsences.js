import { question } from "../../utils/interface.js";
import { addAbsence, marquerAbsence, consulerAbsences } from '../../services/absencesServives.js';

const GestionAbsences = async () => {
    let active = true;

    while (active) {
        console.log("\n〚=== GESTION DES ABSENCES ===〛");
        console.log('1. Ajouter une absence');
        console.log('2. Marquer une absence');
        console.log('3. Consulter les absences');
        console.log('0. Retour au menu admin');

        const choix = await question('Choix : ');

        switch (choix) {
            case '1': {
                const student_id = await question('ID du student : ');
                const date = await question('Date : ');
                const status = await question('Justifiée ? (0 = non, 1 = oui) : ');
                addAbsence(Number(student_id), date, Number(status));
                break;
            }
            case '2': {
                const id = await question("ID de l'absence : ");
                const status = await question('Justifiée ? (0 = non, 1 = oui) : ');
                marquerAbsence(Number(id), Number(status));
                break;
            }
            case '3': {
                const student_id = await question('ID du student : ');
                const absences = consulerAbsences(Number(student_id));
                console.table(absences);
                break;
            }
            case '0': {
                active = false;
                break;
            }
            default: {
                console.error('Choix invalide.');
            }
        }
    }
};

export { GestionAbsences };
