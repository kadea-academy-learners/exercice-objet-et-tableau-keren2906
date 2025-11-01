// Tu disposes d'un tableau nommé `eleves` dont chaque élément est un objet ayant la structure suivante :
// {
//   nom: string,      // Le nom de l'élève
//   notes: number[]   // Un tableau de notes (nombres) obtenues par l'élève
// }
//
// Écris une fonction `showStudentBulletin(eleves)` qui, pour chaque élève du tableau, retourne un bulletin scolaire contenant :
// - Son nom
// - Sa moyenne (calculée à partir de ses notes, arrondie à deux décimales)
// - Un commentaire basé sur la moyenne obtenue :
//     - Moyenne >= 16 : "Excellent"
//     - Moyenne >= 14 : "Très Bien"
//     - Moyenne >= 12 : "Bien"
//     - Moyenne >= 10 : "Passable"
//     - Moyenne < 10  : "À revoir"
// Dans le cas où l'élève n'a pas de notes, la moyenne doit être considérée comme 0 et le commentaire "À revoir".


function showStudentBulletin(eleves) {
    return eleves.map(eleve => {
        const notes = eleve.notes || [];

        // Calcul de la moyenne
        const moyenne = notes.length > 0 
            ? notes.reduce((acc, note) => acc + note, 0) / notes.length 
            : 0;

        // Arrondir à deux décimales
        const moyenneArrondie = Number(moyenne.toFixed(2));

        // Déterminantion des commentaires
        let commentaire = "";
        if (moyenneArrondie >= 16) commentaire = "Excellent";
        else if (moyenneArrondie >= 14) commentaire = "Très Bien";
        else if (moyenneArrondie >= 12) commentaire = "Bien";
        else if (moyenneArrondie >= 10) commentaire = "Passable";
        else commentaire = "À revoir";

        // Retourner le bulletin de l'élève
        return {
            nom: eleve.nom,
            moyenne: moyenneArrondie,
            commentaire: commentaire
        };
    });
}

// Exemple d'utilisation :
const eleves = [
    { nom: "hervé", notes: [15, 18, 16] },
    { nom: "elie", notes: [10, 9, 11] },
    { nom: "eldad", notes: [] },
    { nom: "jean", notes: [13, 14, 15] },
];

console.log(showStudentBulletin(eleves));


module.exports = {
    showStudentBulletin,
};