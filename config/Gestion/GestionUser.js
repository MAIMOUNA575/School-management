import { question } from '../../utils/interface.js'; 
import { addUser, updateUser, deleteUser, rechercheUser, listerUsers } from '../../services/UsersServices.js';

const GestionUser = async () => {
    let active = true;

    while (active) {
        console.log("\n〚=== GESTION DES UTILISATEURS ===〛");
        console.log(" 1. Ajouter un utilisateur");
        console.log(" 2. Modifier un utilisateur");
        console.log(" 3. Supprimer un utilisateur");
        console.log(" 4. Rechercher un utilisateur");
        console.log(" 5. Lister les utilisateurs"); 
        console.log(" 0. Quitter");

        const choix = await question("Choix : ");

        switch (choix) {
            case '1': {
                const nom = await question("Nom complet : ");
                const email = await question("Email : ");
                const role = await question("Rôle (admin, teacher, student) : ");
                const password = await question("Mot de passe : ");
                addUser(nom, role, email, password);
                console.log(`Nouvel utilisateur ajouter :${nom},  ${email}, ${role}`)
                break;
            }
            case '2': {
                const id = await question("ID de l'utilisateur à modifier : ");
                const nom = await question("Nouveau nom : ");
                const role = await question("Nouveau rôle : ");
                updateUser(id, nom, role);
                break;
            }
            case '3': {
                const id = await question("ID de l'utilisateur à supprimer : ");
                deleteUser(id);
                break;
            }
            case '4': {
                const id = await question("ID de l'utilisateur à rechercher : ");
                const user = rechercheUser(id);
                if (user) console.table([user]);
                break;
            }
            case '5': {
                const listUsers = listerUsers();
                console.table(listUsers);
                break;
            }
            case '0': {
                active = false;
                break;
            }
            default:
                console.log("Option invalide.");
        }
    }
}

export { GestionUser };