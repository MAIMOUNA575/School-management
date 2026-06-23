import { question } from "../../utils/interface;js";
import{addStudent, updateStudent, deleteStudent, rechercheStudent, listerStudents} from '../../services/StudentServices.js';


const GestionStudent = async ()=>{
    let active = true;
    while(active){
        console.log("\n〚=== GESTION DES STUDENTS ===〛");
        console.log('1. ajouter un etudiant');
        console.log('2; modifier un etudiant');
        console.log('3. supprimer un etudiant');
        console.log('4. rechercher un etudiant');
        console.log('5. lister tout les etudiants');
    };
    const choix = await question('choix : ');
    switch (choix){
        case '1':{
            const nom = await question ('Nom : ');
            const prenom = await question ('Prenom : ');
            const matricule = await question ('Matricule : ');
            const age = await question ('Age : ');
            const classe =await question ('classe : ');
            await addStudent({nom,prenom,matricule,age,classe});
            break;
        };
        case '2':{
            const nom = await question ('Nouveau nom: ');
            const prenom = await question('Nouveau prenom : ');
            const matricule = await question('Nouveau matricule : ');
            const age = await question ('nouvel age : ');
            const classe = await question ('nouvelle classe : ');
            await updateStudent({nom,prenom,matricule,age,classe});
            break;
        };
        case '3':{
            const id = await question("ID de l'etudiant a supprimer")
            await deleteStudent(id)
            break
        };
        case '4':{
            const id = await question ("ID de l'etudiant a rechercher")
            const student = await rechercheStudent(id)
            console.table(student)
            break
        };
        case '5':{
            const liststudent= await listerStudents()
            console.table(liststudent)
            break
        };
    };
};
