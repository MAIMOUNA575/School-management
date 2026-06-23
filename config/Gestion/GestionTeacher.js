import { question } from "interface.js";
import { addTeacher, updateTeacher, deleteTeacher, rechercheTeacher, listerTeachers } from "services/TeachersServices.js";

const GestionTeachers = async () => {
    let active = true; 
    while (active) {
        console.log("\n〚=== GESTION DES PROFESSEURS ===〛");
        console.log("1. Ajouter un professeur");
        console.log("2. Modifier un professeur");
        console.log("3. Supprimer un professeur");
        console.log("4. Rechercher un professeur");
        console.log("5. Lister les professeurs");
        console.log("0. Retour au menu principal");
    };
    const choix = await question("Choix : ");

    switch (choix) {
        case '1' :{
            const nom = await question("Nom : ");
            const prenom = await question("Prénom : ");
            const email = await question("Email : ");
            const matiere = await question("Matière : ");
            await addTeacher({ nom, prenom, email, matiere });
            break;
        };
        case '2': {
            const id = await question('ID du professeur à modifier : ');
            const nom = await question("Nouveau nom : ");
            const prenom = await question("Nouveau prénom : ");
            const email = await question("Nouveau email : ");
            const matiere = await question("Nouvelle matière : ");
            await updateTeacher(id, { nom, prenom, email, matiere });
            break;
        };
        case '3': {
            const id = await question('ID du professeur à supprimer : ');
            await deleteTeacher(id);
            break;
        };
        case '4':{
            const id = await question('ID du professeur à rechercher : ');
            const teacher = await rechercheTeacher(id);
            console.table(teacher);
            break;
        };
        case '5':{
            const listeTeachers = await listerTeachers();
            console.table(listeTeachers);
            break;
        };
    };
};

export {GestionTeachers};