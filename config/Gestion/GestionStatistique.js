import { question } from "../../utils/interface.js";
import {identifierMeilleurEtudiant, moyenneGenerale, moyenneEtudiant, compterAbsences, statistiquesEtudiant } from '../../services/statistiquesimpleServices.js';



const GestionStatistiquesimple = async()=>{
    let active= true;
    while(active){
        console.log("\n〚=== GESTION DES STATISTIQUES ===〛");
        console.log('1. identifier le meileur etudiant : ');
        console.log('2. moyenne generale de tous les etudiants');
        console.log("3. moyenne d'un etudiant : ");
        console.log("4. absence d'un etudiant");
        console.log("5. statistique complete d'un etudiant : ");
        console.log("0. Retour au menu");


        const choix = await question ("choix : ");
        switch (choix){
            case '1':{
                await identifierMeilleurEtudiant();
                break;
            }
            case '2':{
                await moyenneGenerale();
                break;
            }
            case '3' :{
                await moyenneEtudiant();
                break;
            }
            case '4':{
                const student_id = await question('Id du student : ');
                await compterAbsences(student_id);
                break;
            }
            case '5':{
                const student_id = await question ('ID du student : ');
                await statistiquesEtudiant(student_id);
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
    };
}
export{GestionStatistiquesimple}