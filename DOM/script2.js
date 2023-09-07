
// #region Exercice 1

// function AddItem()
// {
//     let maListe = document.getElementById("liste");
//     let NewLi = document.createElement("li");
//     NewLi.textContent = "item";
//     maListe.appendChild(NewLi);
// }

// function pressButton()
// {
//   console.log(AddItem());
// }

// #endregion

// #region Exercice 2

// function pressButton()
// {
// //   console.log(AddItem());
//   let champTexte = document.getElementById("nouvelElement");
//     let liste = document.getElementById("liste");

//     var texteAAjouter = champTexte.value;
    
//     if (texteAAjouter.trim() !== "") {
//         var nouvelElementLi = document.createElement("li");
//         nouvelElementLi.textContent = texteAAjouter;
//         liste.appendChild(nouvelElementLi);
//         champTexte.value = ""; // Effacez le champ de texte après l'ajout.
//     }
// }

// #endregion

// #region Exercice 3

function pressButton(nomElement, prix)
{
    let liste = document.getElementById("liste");
    let nouvelElement = document.createElement("tr")
    let test = document.createElement("td");
    let nouveauprix = document.createElement("td");
    test.textContent = nomElement;
    nouveauprix.innerHTML = prix;
    nouvelElement.appendChild(test)
    nouvelElement.appendChild(nouveauprix)


 
    liste.appendChild(test);
   
}

// #endregion