import { question } from '../../utils/interface.js';
import { addSubject, listerSubjects, rechercheSubject, updateSubject, deleteSubject, affecteSubject } from '../../services/SubjectServices.js';

const GestionSubject = async () => {
    let active = true;

    while (active) {
        console.log("\n〚=== GESTION DES SUJETS ===〛");
        console.log("1. Ajouter un sujet");
        console.log("2. Lister les sujets");
        console.log("3. Rechercher un sujet");
        console.log("4. Modifier un sujet");
        console.log("5. Supprimer un sujet");
        console.log("6. Affecter un sujet à un professeur");
        console.log("0. Retour au menu admin");

        const choix = await question('Choix : ');

        switch (choix) {
            case '1': {
                const nom = await question("Nom : ");
                const teacher_id = await question("L'id du teacher : ");
                addSubject(nom, Number(teacher_id));
                break;
            }
            case '2': {
                const subjects = listerSubjects();
                console.table(subjects);
                break;
            }
            case '3': {
                const id = await question('ID du sujet à rechercher : ');
                const subject = rechercheSubject(Number(id));
                console.table(subject);
                break;
            }
            case '4': {
                const id = await question('ID du sujet à modifier : ');
                const nom = await question('Nouveau nom : ');
                const teacher_id = await question('ID du nouveau professeur : ');
                updateSubject(Number(id), nom, Number(teacher_id));
                break;
            }
            case '5': {
                const id = await question('ID du sujet à supprimer : ');
                deleteSubject(Number(id));
                break;
            }
            case '6': {
                const id = await question('ID du sujet : ');
                const teacher_id = await question('ID du professeur : ');
                affecteSubject(Number(id), Number(teacher_id));
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

export { GestionSubject };