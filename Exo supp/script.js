
let tache = 0;
let nouvelleTache = document.querySelector('#taskInput');

    nouvelleTache.addEventListener('keydown', function(event){
        if(event.key === 'Enter'){
            AddTask();
        }
    })


function AddTask()
{
    let taskList = document.querySelector("#taskList");

    var tacheAAjouter = nouvelleTache.value;

    if(tacheAAjouter.trim() != "")
    {
        var nouvelElementLi = document.createElement("li");
        var nouveauP = document.createElement("span");
        nouveauP.addEventListener('click', barrerTexte);
        nouveauP.textContent = tacheAAjouter;

        nouvelElementLi.appendChild(nouveauP);

        var boutonSupprimer = document.createElement("button");
        boutonSupprimer.textContent = "Supprimer";
        boutonSupprimer.classList.add("delete-button");
        boutonSupprimer.addEventListener('click',function(){
            taskList.removeChild(nouvelElementLi);

        });

        // Ajout du bouton au nouveau Li
        nouvelElementLi.appendChild(boutonSupprimer);
        // Ajout du Li à la liste des tâches
        taskList.appendChild(nouvelElementLi);
        nouvelleTache.value = "";
        tache ++;
        majCpt();
    }
}


function barrerTexte(event) {
    // Récupérer l'élément avec l'id "test"
    var recupId = event.target;

    // Obtenir la valeur actuelle de la propriété text-decoration
    var textDecoration = window.getComputedStyle(recupId).textDecoration;

    // Vérifier si la ligne est déjà présente
    if (textDecoration.includes("line-through")) {
        // Supprimer la ligne en définissant la valeur sur une chaîne vide
        recupId.style.textDecoration = "";
        tache++;
        majCpt();
    } else {
        // Ajouter la ligne en définissant la valeur sur "line-through"
        recupId.style.textDecoration = "line-through";
        tache --;
        majCpt();
    }
}

function majCpt(){
    let tacheCours = document.getElementById("tacheEnCours");
        tacheCours.textContent = tache;
}

function modifierTache(event){
    
}






