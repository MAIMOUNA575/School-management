import {question} from '../../utils/interface.js';
import { addSubject, listerSubjects, rechercheSubject, updateSubject, deleteSubject, affecteSubject, } from '../../services/SubjectServices.js';


const GestionSubjects = async ()=>{
    let active = true;
    while(active){
        console.log("\n〚=== GESTION DES SUJET ===〛");
        console.log("1. ajouter un Sujet");
        console.log("2. lister les Sujets");
        console.log("3. rechercher des Sujets");
        console.log("4. modifier les Sujets");
        console.log("5. supprimer un Sujet");
        console.log("6. affecter un sujet a un professeur");
    };
    const choix = await question('choix : ');
    switch(choix){
        case '1' :{
            const nom = await question("Nom : ");
            const teacher_id = await question ("L'id du teacher : ");
            await addSubject({ nom, teacher_id});
            break;
        };
        case '2' :{
            const listerSubjects = await listerSubjects();
            console.table(listerSubjects);
            break;
        };
        case '3' :{
            const id = await question ('ID du sujet à rechercher');
            const subject = await rechercheSubject(id);
            console.table(subject);
            break;
        };
        case '4' :{
            const id = await question ('ID du nouveau sujet : ');
            const nom = await question ('Nouveau nom : ');
            break;
        };
        case '5':{
            const id = await question('ID du sujet à supprimer : ');
            break;
        };
        case '6':{
            const id = await question ('ID du sujet : ');
            const teacher_id = await question ('ID du professeur : ');
            break;
        };
    };
};