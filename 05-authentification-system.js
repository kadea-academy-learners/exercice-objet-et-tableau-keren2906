// 1. Crée un tableau nommé `baseDeDonnees` qui contiendra des objets représentant des utilisateurs.
//    Chaque utilisateur doit avoir les propriétés suivantes :
//    - id: number (identifiant unique)
//    - nom: string
//    - email: string
//    - password: string
//    - estConnecte: boolean (indique si l'utilisateur est connecté)
//    - estBloque: boolean (indique si l'utilisateur est bloqué)

// 2. Écris une fonction `signUp(nom, email, password, confirmPassword)` qui :
//    - Vérifie si l'email existe déjà dans `baseDeDonnees`. Si oui, retourne un message d'erreur.
//    - Vérifie si `password` et `confirmPassword` sont identiques. Si non, retourne un message d'erreur.
//    - Sinon, ajoute le nouvel utilisateur à `baseDeDonnees` (avec un id unique, estConnecte à false, estBloque à false) et retourne l'objet utilisateur créé.

// 3. Écris une fonction `login(email, password)` qui :
//    - Recherche l'utilisateur correspondant à l'email dans `baseDeDonnees`.
//    - Si l'utilisateur n'existe pas ou si le mot de passe est incorrect, retourne un message d'erreur.
//    - Si l'utilisateur est bloqué (`estBloque` à true), retourne un message d'erreur spécifique.
//    - Sinon, met à jour `estConnecte` à true pour cet utilisateur et retourne l'objet utilisateur connecté.


const baseDeDonnees = [];

function signUp(nom, email, password, confirmPassword) {
     const utilisateurExistant = baseDeDonnees.find(user => user.email === email);
    if (utilisateurExistant) {
        return "Erreur: cet email existe déjà";
    }

    // Vérification du mot de passe
    if (password !== confirmPassword) {
        return "Erreur: les mots de passe ne correspondent pas";
    }
    const nouvelUtilisateur = {
        id: baseDeDonnees.length + 1,
        nom: nom,
        email: email,
        password: password,
        estConnecte: false,
        estBloque: false,
    };

    // Ajouter dans la base de données
    baseDeDonnees.push(nouvelUtilisateur);

    return nouvelUtilisateur;
}

function login(email, password) {
     const utilisateur = baseDeDonnees.find(user => user.email === email);

    // Vérification de l'utilisateur existant
    if (!utilisateur) {
        return "Erreur: utilisateur non trouvé";
    }

    // Vérification du mot de passe
    if (utilisateur.password !== password) {
        return "Erreur: mot de passe incorrect";
    }

    // Vérifier si le compte est bloqué
    if (utilisateur.estBloque) {
        return "Erreur: utilisateur bloqué";
    }

    // Connexion réussie
    utilisateur.estConnecte = true;
    return utilisateur;
}


console.log(signUp("Alice", "alice@example.com", "1234", "1234")); // inscription
console.log(signUp("Alice", "alice@example.com", "1234", "1234")); // email déjà utilisé
console.log(login("alice@example.com", "1234")); // connexion réussie
console.log(login("bob@example.com", "1234")); // utilisateur introuvable
console.log(login("alice@example.com", "0000")); // mot de passe incorrect

module.exports = { baseDeDonnees, signUp, login };


