import Students from "../models/StudentsModel.js";
import db from "../db/data.js";

// ajouter un etudiant
function addStudent(matricule, nom, prenom, age, classe) {
    if (!matricule || !nom || !prenom || !age || !classe) {
        console.error('Tous les champs sont obligatoires.');
        return false;
    }

    if (age < 0 || age > 100) {
        console.error("L'âge doit être compris entre 0 et 100.");
        return false;
    }

    const existing = db.prepare(`SELECT * FROM students WHERE matricule = ?`)
        .get(matricule);
    if (existing) {
        console.error('Un étudiant avec ce matricule existe déjà.');
        return false;
    }

    db.prepare(`INSERT INTO students (matricule, nom, prenom, age, classe) VALUES (?, ?, ?, ?, ?)`)
        .run(matricule, nom, prenom, age, classe);
    return true;
}

// modifier un etudiant
function updateStudent(matricule, nom, prenom, age, classe) {
    if (!matricule || !nom || !prenom || !age || !classe) {
        console.error('Tous les champs sont obligatoires.');
        return false;
    }

    if (age < 0 || age > 100) {
        console.error('L\'âge doit être compris entre 0 et 100.');
        return false;
    }

    db.prepare(`UPDATE students SET nom = ?, prenom = ?, age = ?, classe = ? WHERE matricule = ?`)
        .run(nom, prenom, age, classe, matricule);
    return true;
}

// supprimer un etudiant
function deleteStudent(matricule) {
    const existing = db.prepare(`SELECT * FROM students WHERE matricule = ?`)
        .get(matricule);
    if (!existing) {
        console.error('Aucun étudiant trouvé avec ce matricule.');
        return false;
    }

    db.prepare(`DELETE FROM students WHERE matricule = ?`)
        .run(matricule);
    return true;
}

// rechercher un etudiant
function rechercheStudent(matricule) {
    const student = db.prepare(`SELECT * FROM students WHERE matricule = ?`)
        .get(matricule);
    if (!student) {
        console.error('Aucun étudiant trouvé avec ce matricule.');
        return null;
    }
    return student;
}

// lister tous les etudiants
function listerStudents() {
    return db.prepare(`SELECT * FROM students`).all();
}

export { addStudent, updateStudent, deleteStudent, rechercheStudent, listerStudents };