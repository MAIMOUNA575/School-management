import Teachers from "../models/TeachersModel";
import db from "../db/data";

// ajouter un professeur
function addTeacher(name, matiere) {
    if (!name || !matiere) {
        console.error('Le nom et la matière sont obligatoires.');
        return false;
    }

    const existing = db.prepare(`SELECT * FROM teachers WHERE name = ?`)
        .get(name);
    if (existing) {
        console.error('Un professeur avec ce nom existe déjà.');
        return false;
    }

    db.prepare(`INSERT INTO teachers (name, matiere) VALUES (?, ?)`)
        .run(name, matiere);
    return true;
}

// modifier un professeur
function updateTeacher(id, name, matiere) {
    if (!id || !name || !matiere) {
        console.error('L\'identifiant, le nom et la matière sont obligatoires.');
        return false;
    }

    const existing = db.prepare(`SELECT * FROM teachers WHERE id = ?`)
        .get(id);
    if (!existing) {
        console.error('Aucun professeur trouvé avec cet identifiant.');
        return false;
    }

    db.prepare(`UPDATE teachers SET name = ?, matiere = ? WHERE id = ?`)
        .run(name, matiere, id);
    return true;
}

// supprimer un professeur
function deleteTeacher(id) {
    if (!id) {
        console.error('L\'identifiant est obligatoire.');
        return false;
    }

    const existing = db.prepare(`SELECT * FROM teachers WHERE id = ?`)
        .get(id);
    if (!existing) {
        console.error('Aucun professeur trouvé avec cet identifiant.');
        return false;
    }

    db.prepare(`DELETE FROM teachers WHERE id = ?`)
        .run(id);
    return true;
}

// rechercher un professeur
function rechercheTeacher(id) {
    if (!id) {
        console.error('L\'identifiant est obligatoire.');
        return null;
    }

    const teacher = db.prepare(`SELECT * FROM teachers WHERE id = ?`)
        .get(id);
    if (!teacher) {
        console.error('Aucun professeur trouvé avec cet identifiant.');
        return null;
    }
    return teacher;
}

// lister tous les professeurs
function listerTeachers() {
    return db.prepare(`SELECT * FROM teachers`).all();
}

export { addTeacher, updateTeacher, deleteTeacher, rechercheTeacher, listerTeachers };