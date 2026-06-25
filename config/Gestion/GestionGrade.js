import { question } from "../../utils/interface.js";
import { addGrades, updateGrades, deleteGrades, calculeGrade } from '../../services/GradesServives.js';

const GestionGrade = async () => {
    let active = true;

    while (active) {
        console.log("\n〚=== GESTION DES NOTES ===〛");
        console.log('1. Ajouter une note');
        console.log('2. Modifier une note');
        console.log('3. Supprimer une note');
        console.log('4. Calculer la moyenne');
        console.log('0. Retour au menu admin');

        const choix = await question('Choix : ');

        switch (choix) {
            case '1': {
                const student_id = await question('ID du student : ');
                const subject_id = await question('ID du sujet : ');
                const note = await question('Note : ');
                addGrades(Number(student_id), Number(subject_id), Number(note));
                break;
            }
            case '2': {
                const student_id = await question('ID du student : ');
                const subject_id = await question('ID du sujet : ');
                const note = await question('Nouvelle note : ');
                updateGrades(Number(student_id), Number(subject_id), Number(note));
                break;
            }
            case '3': {
                const id = await question('ID de la note à supprimer : ');
                deleteGrades(Number(id));
                break;
            }
            case '4': {
                const student_id = await question("ID de l'étudiant : ");
                const moyenne = calculeGrade(Number(student_id));
                console.log(`Moyenne de l'étudiant : ${moyenne.toFixed(2)}/20`);
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

export { GestionGrade };