//console.log("Bienvenue sur mon site");

//let message = 'Bienvneue sur mon site';
//console.log(message);

// #region Exo p77

// let phrase = new String("ma formation javascript");

// console.log(phrase.indexOf("ma"));

// console.log(phrase.search("p"));

// console.log(phrase.charAt(21));

// console.log(phrase.replace("javascript", "C#"));

// console.log(phrase.split(" "));

// // let reponse = "";
// // for (let i=0; i< phrase.length; i++)
// // {
// //     reponse += phrase.charAt(phrase.length-1-i);
// // }
// // console.log(reponse);

// console.log(phrase.split("").reverse().join(""));

// #endregion

// #region Exo p93 Calcul de la TVA

// prix = prompt("Quel est le prix du livre?");
// quantite = prompt("Combien en voulez vous?");
// total = prix * quantite +((prix*quantite)*0.21);
// alert(total +" €")

// #endregion

// #region Exo p103 

// date = new Date();
// let jour = "";
// switch (date.getDay())
// {
//     case 0:
//         jour = "dimanche";
//         break;
//     case 1:
//         jour = "lundi";
//         break;
//     case 2:
//         jour = "mardi";
//         break;
//     case 3:
//         jour = "mercredi";
//         break;
//     case 4:
//         jour = "jeudi";
//         break;
//     case 5:
//         jour = "vendredi";
//         break;
//     case 6:
//         jour = "samedi";
//         break;    
// }

// console.log("Bonjour, nous sommes "+jour);

// Ou

// let jours = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];

// let jour = jours[new Date().getDay()];

// // altgr 4 pour faire `

// console.log(`Bonjour, nous sommes ${jour}`);
// alert(`Bonjour, nous sommes ${jour}`);

// #endregion

// #region Exo p104 Sapin

// let sapin = "T"

// for (let cpt=1; cpt < 10; cpt++)
// {
//     let tString = "T".repeat(cpt);
//     console.log(tString);
// }

// console.log("----------------------------------------------------------------------------------------------------------------");

// const hauteurSapin = 6; 

// for (let i = 1; i <= hauteurSapin; i++) {
//   let espaces = " ".repeat(hauteurSapin - i);
//   let tString = "*".repeat(2 * i - 1);
//   console.log(espaces + tString);
// }

// let troncHeight = 1;
// let troncWidth = hauteurSapin % 2 === 0 ? hauteurSapin + 1 : hauteurSapin;
// for (let i = 0; i < troncHeight; i++) {
//   let espaces = " ".repeat((2 * hauteurSapin - troncWidth) / 2);
//   let troncString = "R".repeat(troncWidth);
//   console.log(espaces + troncString);
// }

// #endregion

// #region algorithmie
// 1
// let Prenom = prompt("Quel est votre prenom?");
// let date = new Date();

// console.log("Bonjour "+Prenom+ " nous sommes le " +date);

// 2
// let age = prompt("Quel est votre age?");
// if (age >= 18)
// {
//     console.log("Bienvenue")
// }
// else
// {
//     console.log("Dégage gamin")
// }

// 3

// Nb1 = prompt("Nbr1:");
// Nb2 = prompt("Nbr2:");

// let symbole ="";

// if (Nb1 > Nb2)
// {
//     symbole = ">"
// }
// else
// {
//     symbole = "<"
// }
// console.log(Nb1 +" "+ symbole +" "+ Nb2);

// 4

// let Nb1 = prompt("Nbr1:");
// let Nb2 = prompt("Nbr2:");
// let Nb3 = prompt("Nbr3:");
// let temp = 0;

// if (Nb1 > Nb2)
// {
//   temp = Nb1;
//   Nb1 = Nb2;
//   Nb2 = temp;
// }
// if (Nb2 > Nb3)
// {
//   temp = Nb2;
//   Nb2 = Nb3;
//   Nb3 = temp;
// }

// console.log(Nb1 +" <= "+ Nb2 +" <= " + Nb3);

// Exercice 5:

// let enter = prompt("Quelle est votre valeur en seconde à convertir?");
// let depart = enter;

// let jour = Math.floor((enter/86400));
// enter = enter%86400;

// let heurerestante = Math.floor((enter/3600));
// enter = enter%3600;

// let minutes = Math.floor((enter/60));
// enter = enter%60;

// console.log(`${depart} secondes peuvent être converties en: ${jour} jour(s), ${heurerestante} heures, ${minutes} minutes et ${enter} secondes`);

// Exercice 6:

// let somme = prompt("Combien voulez vous?");

// let sommedepart = somme;

// let billet500 = Math.floor(somme/500);
// somme = somme%500;

// let billet200 = Math.floor(somme/200);
// somme = somme%200;

// let billet20 = Math.floor(somme/20);
// somme = somme%20;

// let billet5 = Math.floor(somme/5);
// somme = somme%5;

// console.log(`${sommedepart}€ peut etre décomposé en ${billet500} * 500€ + ${billet200} * 200€ + ${billet20} * 20€ + ${billet20} * 20€ + ${billet5} * 5€ + ${somme} * 1€`)

// Exercice 7:

// Entre1et10();

// Exercice 8:




// #endregion

// #region fonction

function sayHello()
{
  return "Hello";
}

function pressButton()
{
  console.log(sayHello());
}

function Entre1et10()
{
  let nbr = 0;
do{

  nbr = prompt("Entrez un nombre entre 1 et 10");

}while(!(nbr > 1 && nbr < 11))
}


// #endregion

// #region Exo Fibonacci pavage

// function Fibonacci(n)
// {
//   if(n === 0) return 0;
//   if(n === 1) return 1;
//   return Fibonacci(n-2) + Fibonacci(n-1);
// }

// function pavageFibo(n)
// {
//   return Math.pow(2, n) + Fibonacci(n + 1);
// }
// function pavage(n)
// {
//   if(n === 1) return 2;
//   if (n === 2) return 8;
//   return 4 * pavage(n - 2) + 2 * pavage(n - 1);
// }

// let n = Number(prompt("Combien de metres?"));
// alert(pavageFibo);
// alert(pavage(n));

// #endregion