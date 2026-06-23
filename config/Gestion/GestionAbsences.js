import { question } from "../../utils/interface.js";
import {addAbsence, marquerAbsence, consulerAbsences} from '../../services/absencesServives.js';



const GestionAbsence = async()=>{
    let active = true;
    while(active){
        console.log("\n〚=== GESTION DES ABSENCES ===〛");
        console.log('1. ajouter une absence : ');
        console.log('2. marquer une absence : ');
        console.log('3. consulter une absence : ')
    }
    const choix = await question('choix : ');
    switch(choix){
        case '1':{
            const student_id = await question('ID du student : ');
            const date = await question('Date : ');
            const status = await question('Status : ');
            await addAbsence({student_id,date,status});
            break;
        }
        case '2':{
            const id = await question("ID de l'absent : ");
            const status = await quest('Status : ');
            await marquerAbsence({id,status});
            break;
        }
        case '3':{
            const student_id = await question('ID du student');
            await consulerAbsences(student_id);
            break;
        };
    };
};