
// Utilisez setInterval avec une référence de fonction (sans parenthèses)
obtenirDate();
setInterval(obtenirHeure, 500);

function obtenirHeure() {
    const today = new Date();

    // Créez un nouvel élément h1 à chaque mise à jour
    let nouveauTitre = document.createElement("h2");
    nouveauTitre.textContent = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


    // Supprimez l'ancien titre s'il existe
    const ancienTitre = document.querySelector("h2");
    if (ancienTitre) {
        document.body.removeChild(ancienTitre);
    }

    // Ajoutez le nouveau titre au corps de la page
    document.body.appendChild(nouveauTitre);
}


function obtenirDate()
{
    const today = new Date();

    let jours = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];

    let jour = jours[today.getDay()];

    let moistab = ["janvier","fevrier","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","decembre"]
    let mois = moistab[today.getMonth()];

    let nouveauTitre = document.createElement("h1");
    nouveauTitre.textContent = jour +" "+ today.getDate() +" " + mois + today.getFullYear();

    document.body.appendChild(nouveauTitre);
}


