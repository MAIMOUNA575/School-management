
import { question } from "../../utils/interface.js";
import { addStudent, updateStudent, deleteStudent, rechercheStudent, listerStudents } from '../../services/StudentServices.js';

const GestionStudent = async () => {
    let active = true;

    while (active) {
        console.log("\n〚=== GESTION DES STUDENTS ===〛");
        console.log('1. Ajouter un étudiant');
        console.log('2. Modifier un étudiant');
        console.log('3. Supprimer un étudiant');
        console.log('4. Rechercher un étudiant');
        console.log('5. Lister tous les étudiants');
        console.log('0. Retour au menu principal');

        const choix = await question('Choix : ');

        switch (choix) {
            case '1': {
                const matricule = await question('Matricule : ');
                const nom = await question('Nom : ');
                const prenom = await question('Prénom : ');
                const age = await question('Âge : ');
                const classe = await question('Classe : ');
                const users_id = await question('ID utilisateur associé : ');
                addStudent(matricule, nom, prenom, Number(age), classe, Number(users_id));
                break;
            }
            case '2': {
                const matricule = await question("Matricule de l'étudiant à modifier : ");
                const nom = await question('Nouveau nom : ');
                const prenom = await question('Nouveau prénom : ');
                const age = await question('Nouvel âge : ');
                const classe = await question('Nouvelle classe : ');
                const users_id = await question('Nouvel ID utilisateur associé : ');
                updateStudent(matricule, nom, prenom, Number(age), classe, Number(users_id));
                break;
            }
            case '3': {
                const matricule = await question("Matricule de l'étudiant à supprimer : ");
                deleteStudent(matricule);
                break;
            }
            case '4': {
                const matricule = await question("Matricule de l'étudiant à rechercher : ");
                const student = rechercheStudent(matricule);
                console.table(student);
                break;
            }
            case '5': {
                const listStudent = listerStudents();
                console.table(listStudent);
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

export { GestionStudent };