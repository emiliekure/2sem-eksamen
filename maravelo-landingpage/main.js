// Signup form

// Variabler der henter inputs fra form
var navn = document.querySelector("#navn");
var email = document.querySelector("#email");
var mobilnr = document.querySelector("#mobilnr");
var postnr = document.querySelector("#postnr");

// Validering af mobilnr.
mobilnr.addEventListener("keyup", function (e) {
    var mobil = e.target.value;

    // Mobilnr. bliver ikke accepteret hvis det ikke er et nr. på præcis 8 cifre
    if (isNaN(mobil) || mobil.length < 8 || mobil.length > 8) {
        mobilnr.style.borderColor = "#e0424a";
        document.getElementById("mobilnr-fejl").innerHTML = "Indtast venligst et gyldigt mobilnr.";
    } else {
        mobilnr.style.borderColor = "#00bd5e";
        document.getElementById("mobilnr-fejl").innerHTML = "";
    }
})

// Validering af postnr.
postnr.addEventListener("keyup", function (e) {
    var post = e.target.value;

    // Postnr. bliver ikke accepteret hvis det ikke er et nr. på præcis 4 cifre, og/eller hvis værdien ligger uden for intervallet 1050-9990
    if (isNaN(post) || post.length < 4 || post.length > 4 || post < 1050 || post > 9990) {
        postnr.style.borderColor = "#e0424a";
        document.getElementById("postnr-fejl").innerHTML = "Indtast venligst et gyldigt postnr.";
    } else {
        postnr.style.borderColor = "#00bd5e";
        document.getElementById("postnr-fejl").innerHTML = "";
    }
})

// Validering af hele formen, der giver en alert. Funktionen bliver først kørt, når der trykkes på tilmeld-knappen.
function valider() {
    // Variabel der henter input fra label med name="navn" i formen
    var tekst = document.forms["signup"]["navn"].value;
    // Variabel der henter input fra label med name="email" i formen
    var mail = document.forms["signup"]["email"].value;
    // Variabel der henter den indre HTML hvor id="mobilnr-fejl"
    var mobilFejl = document.getElementById("mobilnr-fejl").innerHTML;
    // Variabel der henter den indre HTML hvor id="postnr-fejl"
    var postFejl = document.getElementById("postnr-fejl").innerHTML;

    // Først tjekkes om navn-feltet er tomt, samt om der er numre indtastet. Hvis begge eller en af betingelserne passer, bliver bruger bedt om at indtaste et navn, og formen bliver ikke submittet, ellers køres næste if-statement.
    if (isNaN(tekst) || tekst != "") {
        // Tjekker om mail-feltet er tomt. Hvis ja, bliver man bedt om at indtaste en mail, og formen bliver ikke submittet, ellers køres næste if-statement.
        if (mail != "") {
            // Tjekker om fejlbeskeden ved mobilnr. er væk. Hvis ikke, bliver man bedt om at indtaste et gyldigt mobilnr., og formen bliver ikke submittet, ellers køres næste if-statement.
            if (mobilFejl == "") {
                // Tjekker om fejlbeskeden ved postnr. er væk. Hvis ikke, bliver man bedt om at indtaste et gyldigt postnr., og formen bliver ikke submittet. Hvis feltet er tomt, har funktionen valideret alle inputs, og der vises en alert med bekræftelse på at man er tilmeldt.
                if (postFejl == "") {
                    alert("Tak for din tilmelding!\nVi kontakter dig snarest muligt med et fordelagtigt tilbud.");
                } else {
                    alert("Indtast venligst et gyldigt postnr.");
                    return false;
                }
            } else {
                alert("Indtast venligst et gyldigt mobilnr.");
                return false;
            }
        } else {
            alert("Indtast venligst en e-mail adresse.");
            return false;
        }
    } else {
        alert("Indtast venligst et navn.");
        return false;
    }
}