/*
Écrire une fonction "createUser" qui permet de créer un utilisateur.

La fonction doit accepter trois paramètres :
    - nom (string) : le nom de l'utilisateur
    - age (number) : l'âge de l'utilisateur
    - estConnecte (boolean) : indique si l'utilisateur est connecté

La fonction doit retourner un objet contenant ces trois propriétés :
    - nom (string)
    - age (number)
    - estConnecte (boolean)
*/
// creation de la fonction createUser
function createUser(nom, age, estConnecté) {
    return { nom : nom, 
             age : age, 
             estConnecté : estConnecté
            }
}
// appelle de la fonction et on affiche le resultat dans la console
    console.log(createUser("tracy",20,true));
    
module.exports = {
    createUser,
};

