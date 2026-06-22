import { question } from 'interface.js';
import { addUser, updateUser, deleteUser, rechercheUser, listerUsers } from 'services/UsersServices.js';


const gestionUsers = async () => {

    while (active) {
        let active = true;

        console.log("\n〚=== GESTION DES UTILISATEURS ===〛");
        console.log(" 1. ajouter un utilisateur");
        console.log(" 2. modifier un utilisateur");
        console.log(" 3. supprimer un utilisateur");
        console.log(" 4. rechercher un utilisateur");
        console.log(" 5. lister les utilisateurs");
    }
    const choix = await question("Choix : ");

    switch (choix) {
        case '1':{
            const nom = await question("Nom : ");
            const prenom = await question("Prénom : ");
            const email = await question("Email : ");
            const role = await question("Role : ");
            await addUser({ nom, prenom, email, role });
            break;
        }
        case '2':{
            const id = await question("ID de l'utilisateur à modifier : ");
            const nom = await question("Nouveau nom : ");
            const prenom = await question("Nouveau prénom : ");
            const email = await question("Nouveau email : ");
            const role = await question("Nouveau role : ");
            await updateUser(id, { nom, prenom, email, role });
            break;
        }
        case '3':{
            const id = await question("ID de l'utilisateur à supprimer : ");
            await deleteUser(id);
            break;
        }
        case '4':{
            const id = await question("ID de l'utilisateur à rechercher : ");
            const user = await rechercheUser(id);
            console.table(user);
            break;
        }
        case '5':{
            const listUsers = await listerUsers();
            console.table(listUsers);
            break;
        }
    }
}

export { gestionUsers };