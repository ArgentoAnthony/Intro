
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

// function pressButton(nomElement, prix)
// {
//     let total = 0;
//     let liste = document.getElementById("liste");

//     let totalElement = document.getElementById("prixTotal");
//     total = parseInt(totalElement.innerHTML);


//     let nouvelElement = document.createElement("tr")
//     let article = document.createElement("td");
//     let nouveauprix = document.createElement("td");
//     article.textContent = nomElement;
//     nouveauprix.textContent = prix;
//     nouvelElement.appendChild(article)
//     nouvelElement.appendChild(nouveauprix)

//     liste.appendChild(nouvelElement);
//     total += prix;

//      totalElement.textContent = total;
   
// }

// #endregion

// #region Exercice 3 version Seb

const articles = document.getElementById('articles');
const panier = document.getElementById('panier');
const inputPrix = document.getElementById('prix');
inputPrix.value = 0;

function addToCart(id)
{
    //L'article sera trouvé depuis le dernier enfant de la table (donc le tbody), à l'ID mentionné (0 - 1 - 2 en fonction du bouton séléctionné (voir HTML) et ensuite le premier enfant de cet ID, soit le nom de l'article)
    let article = articles.lastElementChild.children[id].firstElementChild.innerHTML;
    // Idem au dessus sauf que le children 1 est la position du prix dans le tableau
    let prix = Number(articles.lastElementChild.children[id].children[1].innerHTML);

    console.log(article);
    console.log(prix);

    //Création de la nouvelle ligne qui finira dans le panier

    // <tr></tr>
    const newTr = document.createElement('tr');

    // <td></td>
    const articleTd = document.createElement('td');
    const prixTd = document.createElement('td');
    
    //<td>Chaise</td>
    articleTd.innerText = article;
    // <td>25</td>
    prixTd.innerText = prix;


    // <tr>
    //    <td>Chaise</td>
    // </tr>
    newTr.appendChild(articleTd);
     // <tr>
    //    <td>Chaise</td>
    //    <td>25</td>
    // </tr>
    newTr.appendChild(prixTd);

    panier.children[1].appendChild(newTr);

    inputPrix.value = Number(inputPrix.value) + prix;

}


// #endregion