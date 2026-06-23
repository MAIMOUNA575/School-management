import { question } from "../../utils/interface.js";
import {addGrades, updateGrades, deleteGrades, calculeGrade} from '../../services/GradesServives.js';



const GestionGrades = async()=>{

    const active= true;

    while(active){
        console.log("\n〚=== GESTION DES NOTES ===〛");
        console.log('1. ajouter une note : ');
        console.log('2. modifier une note : ');
        console.log('3. supprimer une note : ');
        console.log('4. calculer la moyenne : ');
    }
    const choix = await question('choix : ')
    switch(choix){
        case '1':{
            const student_id = await question('ID du student : ');
            const subject_id = await question ('ID du sujet : ');
            const note = await question ('note : ');
            await addGrades({student_id,subject_id,note});
            break;
        }
        case '2':{
            const student_id = await question('Nouveau ID du student : ');
            const subject_id = await question('Nouveau ID du sujet : ');
            const note = await question('Nouvelle note : ');
            await updateGrades({student_id,subject_id,note});
            break;
        }
        case '3':{
            const id = await question('ID de la note : ');
            await deleteGrades(id);
            break;
        }
        case '4':{
            const student_id = await question("Id de l'etudiant : ");
            await calculeGrade(id);
            break;
        }
    }
}