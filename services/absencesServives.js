import db from "../db/data.js";

// ajouter une absence 
function addAbsence(student_id, date, status = 0) {
    if (!student_id || !date || (status !== 0 && status !== 1)) {
        console.error('L\'étudiant, la date et un statut valide (0 ou 1) sont obligatoires.');
        return false;
    }

    const student = db.prepare(`SELECT * FROM students WHERE id = ?`)
        .get(student_id);
    if (!student) {
        console.error('Aucun étudiant trouvé avec cet identifiant.');
        return false;
    }

    db.prepare(`INSERT INTO absences (student_id, date, status) VALUES (?, ?, ?)`)
        .run(student_id, date, status);
    return true;
}

// Marquer une absence comme justifiée ou non justifiée
function marquerAbsence(id, status) {
    if (!id || status === undefined) {
        console.error('L\'identifiant et le statut sont obligatoires.');
        return false;
    }

    if (status !== 0 && status !== 1) {
        console.error('Le statut doit être 0 (non justifiée) ou 1 (justifiée).');
        return false;
    }

    const existing = db.prepare(`SELECT * FROM absences WHERE id = ?`)
        .get(id);
    if (!existing) {
        console.error('Aucune absence trouvée avec cet identifiant.');
        return false;
    }
    db.prepare(`UPDATE absences SET status = ? WHERE id = ?`)
        .run(status, id);
    return true;
}

// Consulter l'historique des absences d'un étudiant
function consulerAbsences(student_id) {
    if (!student_id) {
        console.error('L\'identifiant de l\'étudiant est obligatoire.');
        return null;
    }

    const student = db.prepare(`SELECT * FROM students WHERE id = ?`)
        .get(student_id);
    if (!student) {
        console.error('Aucun étudiant trouvé avec cet identifiant.');
        return null;
    }

    return db.prepare(`SELECT * FROM absences WHERE student_id = ?`)
        .all(student_id);
}

export { addAbsence, marquerAbsence, consulerAbsences };