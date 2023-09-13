const loginForm = document.loginForm;

const inputUsername = document.querySelector("#username");
const inputLastname = document.querySelector("#lastName");
const inputCodePostal = document.querySelector("#codePostal");

function changeFocus(e) {
    if (e.key === 'Enter') {
      e.preventDefault(); // Empêche le comportement par défaut du formulaire
  
      // Obtenez la liste des éléments du formulaire
      const formElements = [inputUsername, inputLastname, inputCodePostal];
  
      // Trouvez l'index de l'élément actuel dans la liste
      const currentIndex = formElements.indexOf(e.target);
  
      // Passez au champ de formulaire suivant (ou revenez au premier si c'est le dernier)
      const nextIndex = (currentIndex + 1) % formElements.length;
  
      // Donnez le focus au prochain champ de formulaire
      formElements[nextIndex].focus();
    }
  }
  
  // Ajoutez un gestionnaire d'événements 'keydown' aux champs de formulaire
  inputUsername.addEventListener('keydown', changeFocus);
  inputLastname.addEventListener('keydown', changeFocus);
  inputCodePostal.addEventListener('keydown', login); // Utilisez login() pour la touche "Enter" ici

function login(){
    //const login = document.forms['loginForm'];
    if(loginForm.username.value.trim() ===""){
        console.log('Wrong name');
        return;
    }
    if(loginForm.lastName.value.trim() ===""){
        console.log('Wrong lastname');
        return;
    }
    if(loginForm.codePostal.value < 1000 || loginForm.codePostal.value >9999 ){
        console.log("Wrong PC");
        return;
    }
    nouveauP = document.createElement("p");
    nouveauP.innerText = "Formulaire OK";
    document.body.appendChild(nouveauP);
    console.log('Ok');



    reset();
}

function autoCompl(){
    let nom = document.querySelector("#username");
    nom.value ="Dupont";
    // Ou
    loginForm.lastName.value="Jean";
    // Ou
    document.querySelector("#codePostal").value="4100";
}

function reset(){
    loginForm.reset();
}

  