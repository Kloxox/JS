var compteur = 0;
var compteur = 0;

var MaDiv = document.getElementById("Methode1");
MaDiv.addEventListener("click, UneProcedureQuiChangeLeText");

var MaDiv = document.getElementById("Methode2");
MaDiv.addEventListener("mouseover, UneProcedureQuiSurvole");

var MaDiv = document.getElementById("Methode3");
MaDiv.addEventListener("keydown, UneProcedureQuiEcrit");

function UneProcedureQuiChangeLeText(evenement) {
    evenement.target.innerHTML = "On a appuyé sur : "+evenement.key;
}

function UneProcedureQuiSurvole(evenement) {
    compteur++;
    evenement.target.innerHTML = "On m'a cliqué dessus "+compteur+" fois";
}

function UneProcedureQuiEcrit(evenement) {
    compteur2++;
    evenement.target.innerHTML = "On m'a survoler "+compteur2+" fois";
}

