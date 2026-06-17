import { question } from "../utils/interface.js";
import { listerUsers } from "../services/UsersServices.js"


export const session = {connectionDelUtilisateur: null}


const seConnecter = async ()=>{
    console.log ('se connecter')
    const nom = await question("Entrez votre nom ")
    const password = await question("Entrez votre mot de passe ")
    const users = listerUsers();
    const user = users.find(x=>x.name===nom && x.password===password)
    if(!user){
        console.log('le nom ou le mot de passe sont incorrect')
        return false
    }
    session.connectionDelUtilisateur=user;
    console.log(`Bienvenue ${session.connectionDelUtilisateur.name} ${session.connectionDelUtilisateur.role} `)
    return true
}

export {seConnecter}