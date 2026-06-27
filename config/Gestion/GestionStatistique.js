import { question } from '../../utils/interface.js'
import {identifierMeilleurEtudiant, moyenneGenerale, moyenneEtudiant, compterAbsences, statistiquesEtudiant, moyennesParMatiere} from '../../services/statistiquesimpleServices.js'


const GestionStatistiquesimple = async () => {
    let active = true;
    while (active) {
        console.log("\n〚=== GESTION DES STATISTIQUES ===〛");
        console.log('1. Identifier le meilleur étudiant');
        console.log('2. Moyenne générale de tous les étudiants');
        console.log("3. Moyenne d'un étudiant");
        console.log("4. Absences d'un étudiant");
        console.log("5. Statistiques complètes d'un étudiant");
        console.log("6. Moyennes par matière");
        console.log("0. Retour au menu");

        const choix = await question('Choix : ');
        
        switch (choix) {
            case '1': {
                try {
                    const meilleur = await identifierMeilleurEtudiant();
                    console.log(`\n🏆 Meilleur étudiant : ${meilleur.nom} ${meilleur.prenom} (Moyenne : ${meilleur.moyenne})`);
                } catch (error) {
                    console.error("Erreur lors de la recherche du meilleur étudiant :", error.message);
                }
                break;
            }
            case '2': {
                try {
                    const moyenneG = await moyenneGenerale();
                    console.log(`\n📊 Moyenne générale de l'établissement : ${moyenneG}`);
                } catch (error) {
                    console.error("Erreur lors du calcul de la moyenne générale :", error.message);
                }
                break;
            }
            case '3': {
                const id = await question("Entrez l'ID de l'étudiant : ");
                try {
                    const moyenne = await moyenneEtudiant(id);
                    console.log(`\n📈 Moyenne de l'étudiant : ${moyenne}`);
                } catch (error) {
                    console.error("Erreur ou étudiant introuvable :", error.message);
                }
                break;
            }
            case '4': {
                const id = await question("Entrez l'ID de l'étudiant : ");
                try {
                    const absences = await compterAbsences(id);
                    console.log(`\n❌ Nombre d'absences : ${absences}`);
                } catch (error) {
                    console.error("Erreur lors du décompte des absences :", error.message);
                }
                break;
            }
            case '5': {
                const id = await question("Entrez l'ID de l'étudiant : ");
                try {
                    const stats = await statistiquesEtudiant(id);
                    console.log(`\n📋 Statistiques de ${stats.nom} ${stats.prenom} :`);
                    console.log(`   - Moyenne : ${stats.moyenne}`);
                    console.log(`   - Absences : ${stats.absences}`);
                } catch (error) {
                    console.error("Erreur lors de la récupération des statistiques :", error.message);
                }
                break;
            }
            case '6': {
                try {
                    const matieres = await moyennesParMatiere();
                    console.log(`\n Moyennes par matière :`);
                    if (Array.isArray(matieres)) {
                        matieres.forEach(m => {
                            console.log(`   - ${m.matiere} : ${m.moyenne}`);
                        });
                    } else {
                        console.log(matieres);
                    }
                } catch (error) {
                    console.error("Erreur lors de la récupération des moyennes par matière :", error.message);
                }
                break;
            }
            case '0': {
                console.log("Retour au menu principal...");
                active = false;
                break;
            }
            default: {
                console.log(" ❌ Choix invalide, veuillez réessayer.");
                break;
            }
        }
    }
}

export { GestionStatistiquesimple };