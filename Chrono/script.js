let finTimer = 5000;
let seconde = 0;
let minute = 0;
let timer;

function formatTime(value) {
    // Utilisez padStart pour obtenir deux chiffres avec un 0 à gauche si nécessaire
    return value.toString().padStart(2, '0');
}

function startChrono() {
    // Utilisez setInterval pour mettre à jour le chronomètre chaque seconde
    timer = setInterval(() => {
        seconde++;
        if (seconde === 60) {
            minute++;
            seconde = 0;
        }
        // Formatez les valeurs de minute et seconde avec deux chiffres
        const formattedMinute = formatTime(minute);
        const formattedSeconde = formatTime(seconde);

        var nouveauTitre = document.querySelector("h1#timer");
        nouveauTitre.textContent = formattedMinute + ":" + formattedSeconde;

        document.body.appendChild(nouveauTitre);
    }, 100);
}
function stopChrono(){
    clearInterval(timer);
}
function reset(){
    stopChrono();
    seconde = 0;
    var test = document.querySelector("h1#timer");
    test.textContent = "00:00";
}


