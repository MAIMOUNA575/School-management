import Users from "../models/Users.model";
import db from "../db/data";

// ajouter un utilisateur
function addUser(name, role) {
    if (!name || !role) {
        console.error('Le nom et le rôle sont obligatoires.');
        return false;
    }

    const rolesValides = ['admin', 'professeur', 'etudiant'];
    if (!rolesValides.includes(role)) {
        console.error(`Le rôle doit être l'un des suivants : ${rolesValides.join(', ')}.`);
        return false;
    }

    const existing = db.prepare(`SELECT * FROM users WHERE name = ?`)
        .get(name);
    if (existing) {
        console.error('Un utilisateur avec ce nom existe déjà.');
        return false;
    }

    db.prepare(`INSERT INTO users (name, role) VALUES (?, ?)`)
        .run(name, role);
    return true;
}

// modifier un utilisateur
function updateUser(id, name, role) {
    if (!id || !name || !role) {
        console.error('L\'identifiant, le nom et le rôle sont obligatoires.');
        return false;
    }

    const rolesValides = ['admin', 'professeur', 'etudiant'];
    if (!rolesValides.includes(role)) {
        console.error(`Le rôle doit être l'un des suivants : ${rolesValides.join(', ')}.`);
        return false;
    }

    const existing = db.prepare(`SELECT * FROM users WHERE id = ?`)
        .get(id);
    if (!existing) {
        console.error('Aucun utilisateur trouvé avec cet identifiant.');
        return false;
    }

    db.prepare(`UPDATE users SET name = ?, role = ? WHERE id = ?`)
        .run(name, role, id);
    return true;
}

// supprimer un utilisateur
function deleteUser(id) {
    if (!id) {
        console.error('L\'identifiant est obligatoire.');
        return false;
    }

    const existing = db.prepare(`SELECT * FROM users WHERE id = ?`)
        .get(id);
    if (!existing) {
        console.error('Aucun utilisateur trouvé avec cet identifiant.');
        return false;
    }

    db.prepare(`DELETE FROM users WHERE id = ?`)
        .run(id);
    return true;
}

// rechercher un utilisateur par id
function rechercheUser(id) {
    if (!id) {
        console.error('L\'identifiant est obligatoire.');
        return null;
    }

    const user = db.prepare(`SELECT * FROM users WHERE id = ?`)
        .get(id);
    if (!user) {
        console.error('Aucun utilisateur trouvé avec cet identifiant.');
        return null;
    }
    return user;
}

// lister tous les utilisateurs
function listerUsers() {
    return db.prepare(`SELECT * FROM users`).all();
}

export { addUser, updateUser, deleteUser, rechercheUser, listerUsers };