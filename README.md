# 🏫 School Management System (CLI)

Une application complète en ligne de commande (CLI) de gestion scolaire robuste et modulaire, développée en **Node.js** avec une persistance de données sous **SQLite**. Ce projet applique une architecture logicielle propre (séparation des modèles, des services et de l'interface utilisateur) conforme aux exigences de production réelles.

---

## 🚀 Fonctionnalités du Projet

L'application est divisée en 7 modules fonctionnels interconnectés :

* **👤 Module 1 : Utilisateurs** – Gestion des accès avec rôles dédiés (`admin`, `teacher`, `student`), emails et mots de passe sécurisés.
* **🎓 Module 2 : Étudiants** – Suivi complet des fiches étudiants (matricule, nom, prénom, âge, classe).
* **💼 Module 3 : Professeurs** – Gestion des enseignants et liaison avec leurs comptes utilisateurs.
* **📚 Module 4 : Matières** – Création de matières et affectation dynamique des professeurs.
* **📝 Module 5 : Notes** – Attribution de notes (de 0 à 20), modification, suppression et calcul de moyennes.
* **❌ Module 6 : Absences** – Suivi rigoureux des absences avec gestion des statuts (justifiée / non justifiée).
* **📊 Module 7 : Statistiques** – Tableaux de bord automatiques (meilleur étudiant, moyenne générale, bilans individuels).

---

## 🛠️ Spécifications Techniques & Contraintes

* **Backend :** Node.js (ECMAScript Modules - ESM `import/export`).
* **Base de données :** Relational SQLite via le package `better-sqlite3`.
* **Architecture :** Modulaire (MVC / Service-Pattern), aucun framework tiers.
* **Journalisation (Logging) :** Système sur mesure horodaté avec niveaux de criticité `[INFO]`, `[WARNING]`, `[ERROR]`.

---

## 📂 Structure du Projet

```text
School-management/
│
├── main.js                  # Point d'entrée de l'application
├── package.json             # Configuration Node.js et dépendances
├── logger.txt               # Fichier centralisé des logs applicatifs
│
├── db/
│   └── data.js              # Initialisation et connexion à la base SQLite
│
├── models/
│   ├── Users.model.js       # Modèle de données Utilisateur
│   ├── StudentsModel.js     # Modèle de données Étudiant
│   └── TeachersModel.js     # Modèle de données Professeur
│
├── services/
│   ├── UserServices.js      # Logique métier et requêtes SQL Utilisateurs
│   ├── TeacherServices.js   # Logique métier Professeurs
│   └── statistiquesimpleServices.js # Calculs des moyennes et statistiques
│
├── config/
│   └── Menu/
│       ├── menuAdmin.js     # Interface du menu Administrateur
│       ├── menuStudent.js   # Interface du menu Étudiant
│       ├── menuTeacher.js   # Interface du menu Enseignant
│       └── menuPrincipale.js# Menu d'accueil et de connexion
│
└── utils/
    ├── interface.js         # Gestion globale sécurisée des entrées readline
    └── logger.js            # Moteur de journalisation des actions
