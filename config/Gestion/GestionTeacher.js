import { question } from "../../utils/interface.js";
import { addTeacher, updateTeacher, deleteTeacher, rechercheTeacher, listerTeachers } from "../../services/TeacherServices.js";

const GestionTeacher = async () => {
    let active = true;

    while (active) {
        console.log("\n〚=== GESTION DES PROFESSEURS ===〛");
        console.log("1. Ajouter un professeur");
        console.log("2. Modifier un professeur");
        console.log("3. Supprimer un professeur");
        console.log("4. Rechercher un professeur");
        console.log("5. Lister les professeurs");
        console.log("0. Retour au menu principal");

        const choix = await question("Choix : ");

        switch (choix) {
            case '1': {
                const name = await question("Nom : ");
                const matiere = await question("Matière : ");
                const users_id = await question("ID utilisateur associé : ");
                addTeacher(name, matiere, Number(users_id));
                break;
            }
            case '2': {
                const id = await question('ID du professeur à modifier : ');
                const name = await question("Nouveau nom : ");
                const matiere = await question("Nouvelle matière : ");
                const users_id = await question("Nouvel ID utilisateur associé : ");
                updateTeacher(Number(id), name, matiere, Number(users_id));
                break;
            }
            case '3': {
                const id = await question('ID du professeur à supprimer : ');
                deleteTeacher(Number(id));
                break;
            }
            case '4': {
                const id = await question('ID du professeur à rechercher : ');
                const teacher = rechercheTeacher(Number(id));
                console.table(teacher);
                break;
            }
            case '5': {
                const listeTeachers = listerTeachers();
                console.table(listeTeachers);
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

export { GestionTeacher };