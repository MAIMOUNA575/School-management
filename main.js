import { addUser, listerUsers } from './services/UsersServices.js';
import { addTeacher, listerTeachers } from './services/TeacherServices.js';
import { addSubject, listerSubjects, affecteSubject } from './services/SubjectServices.js';
import { addStudent, listerStudents } from './services/StudentServices.js';
import { addGrades } from './services/GradesServives.js';
import { addAbsence, marquerAbsence } from './services/absencesServives.js';
import { identifierMeilleurEtudiant, moyenneGenerale, statistiquesEtudiant } from './services/statistiquesimpleServices.js';

function runTests() {
    console.log("=== Début du test d'intégration direct ===\n");

    // 1. AJOUT DES UTILISATEURS

    console.log("-> Insertion des utilisateurs...");
    addUser("Maimouna", "admin","maimouna@gmail.com","1234");
    addUser("Jean Prof", "professeur","jean@gmail.com","prof123");
    addUser("Amadou", "etudiant","amadou@gmail.com","etud123");

    console.log("\n[Utilisateurs en base] :");
    console.table(listerUsers());

    // 2. AJOUT DES PROFESSEURS ET MATIÈRES

    console.log("\n-> Insertion des professeurs et des matières...");
    addTeacher("Jean Prof", "Algorithmique");
    addTeacher("Marie Expert", "Base de données");

    // On récupère les profs pour avoir leurs ID
    const profs = listerTeachers();
    const idProf1 = profs[0]?.id;
    const idProf2 = profs[1]?.id;

    // Ajout des matières liées aux profs
    addSubject("JavaScript", idProf1);
    addSubject("Maths", idProf2);

    console.log("\n[Matières en base] :");
    console.table(listerSubjects());


    // 3. AJOUT DES ÉTUDIANTS

    console.log("\n-> Insertion des étudiants...");
    // Attention : votre fonction addStudent prend (matricule, nom, prenom, age, classe)
    addStudent("MAT-2026-01", "Koffi", "Amadou", 21, "Tle");
    addStudent("MAT-2026-02", "Traoré", "Fatou", 22, "seconde C");

    console.log("\n[Étudiants en base] :");
    console.table(listerStudents());

    // On récupère les IDs générés pour la suite (notes et absences)
    const etudiants = listerStudents();
    const idEtudiant1 = etudiants[0]?.id; // SQLite génère un 'id' auto-incrémenté en tâche de fond
    const idEtudiant2 = etudiants[1]?.id;

    const matieres = listerSubjects();
    const idMatiere1 = matieres[0]?.id;
    const idMatiere2 = matieres[1]?.id;

    
    // 4. ATTRIBUTION DES NOTES
    console.log("\n-> Attribution des notes...");
    if (idEtudiant1 && idMatiere1) {
        addGrades(idEtudiant1, idMatiere1, 15); // Amadou en JS
        addGrades(idEtudiant1, idMatiere2, 12); // Amadou en SQL
    }
    if (idEtudiant2 && idMatiere1) {
        addGrades(idEtudiant2, idMatiere1, 18); // Fatou en JS
        addGrades(idEtudiant2, idMatiere2, 16); // Fatou en SQL
    }


    // 5. ENREGISTREMENT DES ABSENCES

    console.log("\n-> Enregistrement des absences...");
    if (idEtudiant1 && idMatiere1) {
        addAbsence(idEtudiant1, "2026-06-15",justifiée = 0);
        addAbsence(idEtudiant1, "2026-06-16", justifiée = 1);
        
        // Supposons que la première absence insérée possède l'id 1, on la justifie
        marquerAbsence(1, 1); 
    }


    // 6. CALCULS ET STATISTIQUES FINALES

    console.log("\n=========================================");
    console.log("       RAPPORTS ET STATISTIQUES          ");
    console.log("=========================================");

    const moyGen = moyenneGenerale();
    console.log(`Moyenne générale de l'école : ${moyGen ? moyGen.toFixed(2) : 'N/A'}/20`);

    const meilleur = identifierMeilleurEtudiant();
    if (meilleur) {
        console.log(`Meilleur étudiant : ${meilleur.prenom} ${meilleur.nom} avec ${meilleur.moyenne.toFixed(2)}/20`);
    }

    if (idEtudiant1) {
        console.log(`\n-> Fiche statistique d'Amadou (ID: ${idEtudiant1}) :`);
        console.log(JSON.stringify(statistiquesEtudiant(idEtudiant1), null, 2));
    }

    console.log("\n=== Fin des tests. Tout s'est exécuté sans erreur ! ===");
}

// Lancement automatique du script
runTests();