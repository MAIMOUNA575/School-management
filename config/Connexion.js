import { question } from "../utils/interface.js";
import { listerUsers } from "../services/UsersServices.js";

export const session = { connectionDelUtilisateur: null };

const seConnecter = async () => {
    console.log('Se connecter');
    const email = await question("Entrez votre email : ");
    const password = await question("Entrez votre mot de passe : ");

    if (!email || !password) {
        console.error("L'email et le mot de passe sont obligatoires.");
        return false;
    }

    const users = listerUsers();
    const user = users.find(x => x.email === email && x.password === password);

    if (!user) {
        console.error('Le email ou le mot de passe sont incorrects.');
        return false;
    }

    session.connectionDelUtilisateur = user;
    console.log(`Bienvenue ${session.connectionDelUtilisateur.email} (${session.connectionDelUtilisateur.role})`);
    return true;
};

export { seConnecter };