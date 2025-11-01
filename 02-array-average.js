// Crée un tableau `notes` contenant 5 nombres
// Écrire une fonction averageNote avec `notes` comme parametre qui effectue les opérations suivantes :
// - Calcule la moyenne des notes
// - retourne un message "Réussi" si la moyenne est >= 10, sinon "Échoué"

// creation du tableau
const notes = [18, 9, 15, 20, 4];
function averageNote(notes) {
	const total = notes.reduce((sum,note)=> sum + note,0);
	// calcul de la moyenne
	const moyenne = total /notes.length;
	// les conditions
	if(moyenne >= 10){
		return "Réussi";
	} else {
		return "Échoué";
	}
}
// affichage dans la console
console.log(averageNote (notes));

module.exports = {
	averageNote,
};



