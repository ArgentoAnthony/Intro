
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

// const articles = document.getElementById('articles');
// const panier = document.getElementById('panier');
// const inputPrix = document.getElementById('prix');
// inputPrix.value = 0;

// function addToCart(id)
// {
//     //L'article sera trouvé depuis le dernier enfant de la table (donc le tbody), à l'ID mentionné (0 - 1 - 2 en fonction du bouton séléctionné (voir HTML) et ensuite le premier enfant de cet ID, soit le nom de l'article)
//     let article = articles.lastElementChild.children[id].firstElementChild.innerHTML;
//     // Idem au dessus sauf que le children 1 est la position du prix dans le tableau
//     let prix = Number(articles.lastElementChild.children[id].children[1].innerHTML);

//     console.log(article);
//     console.log(prix);

//     //Création de la nouvelle ligne qui finira dans le panier

//     // <tr></tr>
//     const newTr = document.createElement('tr');

//     // <td></td>
//     const articleTd = document.createElement('td');
//     const prixTd = document.createElement('td');
    
//     //<td>Chaise</td>
//     articleTd.innerText = article;
//     // <td>25</td>
//     prixTd.innerText = prix;


//     // <tr>
//     //    <td>Chaise</td>
//     // </tr>
//     newTr.appendChild(articleTd);
//      // <tr>
//     //    <td>Chaise</td>
//     //    <td>25</td>
//     // </tr>
//     newTr.appendChild(prixTd);

//     panier.children[1].appendChild(newTr);

//     inputPrix.value = Number(inputPrix.value) + prix;

// }
// #endregion

// #region Exercice 4

// const articles = document.getElementById('articles');
// const panier = document.getElementById('panier');
// const inputPrix = document.getElementById('prix');
// inputPrix.value = 0;


// let listArticleIntoCart = []

// function addToCart(articleId) {
//     let articleName = articles.lastElementChild.children[articleId-1].firstElementChild.innerHTML;
//     let articlePrice = Number(articles.lastElementChild.children[articleId-1].children[1].innerHTML);
//     let articleQty = 1

//     //system d'addition d'article au lieu de list total
//     let articleExistIndex = listArticleIntoCart.findIndex((eachItem) => {
//         if(eachItem.articleId == articleId)
//             return true
//         else
//             return false
//     })

//     //console.log(articleExistIndex)

//     if(articleExistIndex >= 0)
//     {
//         //existe déjà
//         listArticleIntoCart[articleExistIndex].articleQty += 1
//     }
//     else{
//         //n'existe pas
//         let newArt = {articleName, articlePrice, articleQty, articleId}
//         listArticleIntoCart.push(newArt)
//     }
    
    
    
//     appendArticleHtml()
//     recalculeTotalPrice("add")
// }

// function recalculeTotalPrice(operator)
// {
//     if(listArticleIntoCart.length  == 0) inputPrix.value = 0


//     listArticleIntoCart.forEach((eachArticle) => {
//         if(operator == "add")
//             inputPrix.value = Number(inputPrix.value) + Number(eachArticle.articlePrice)

//         else if(operator == "delete")
//             inputPrix.value = Number(inputPrix.value) - Number(eachArticle.articlePrice)
//     })
// }


// function appendArticleHtml()
// {
//     let newTbody = document.createElement("tobdy")
//     let oldTbody = panier.children[1]
    
//     panier.replaceChild(newTbody, oldTbody)

//     listArticleIntoCart.forEach((eachArticle) => 
//     {
//         const articleTd = document.createElement('td');
//         articleTd.innerText = eachArticle.articleName;
//         //<td>Chaise</td>
        

//         const prixTd = document.createElement('td');
//         prixTd.innerText = eachArticle.articlePrice;
//         //<td>25</td>

//         const qtyTd = document.createElement("td")
//         qtyTd.innerText = eachArticle.articleQty
//         //<td>un certain nomber</td>


//         const newTr = document.createElement('tr');
//         newTr.appendChild(articleTd);
//         newTr.appendChild(prixTd);
//         newTr.appendChild(qtyTd)
//         // <tr>
//         //     <td>Chaise</td>
//         //     <td>25</td>
//         //      <td>un certain nomber</td>
//         // </tr>

    
//         panier.children[1].appendChild(newTr); //panier.children[1] = <table><tbody> !!!!! </tabody></table>
//         //<tbody>
//         //   <tr>
//         //     <td>Chaise</td>
//         //     <td>25</td>
//         //   </tr>
//         //</tbody>
//     })
// }


// function delToCart(articleId)
// {
//     //system d'addition d'article au lieu de list total
//     let articleExistIndex = listArticleIntoCart.findIndex((eachItem) => {
//         if(eachItem.articleId == articleId)
//             return true
//         else
//             return false
//     })


//     if(articleExistIndex >= 0)
//     {
//         //existe déjà
//         //on vérifie la quantité existante
//         if(listArticleIntoCart[articleExistIndex].articleQty == 1){
//             //attention de ne pas recuprérer la shallow copy du splice... 
//             listArticleIntoCart.splice(0, 1)
//         }

//         else
//             listArticleIntoCart[articleExistIndex].articleQty -= 1
//     }

    
//     recalculeTotalPrice("delete")
//     appendArticleHtml()
}
// #endregion