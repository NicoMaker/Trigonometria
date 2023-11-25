function CalcolaTrigonometria() {
    let gradi = Inserisci();
    let info = "", stampaHTML = "";
    let options = document.getElementById("options").value;

    if (isNaN(gradi)) {
        stampaHTML = "inserisci un numero valido";
        document.getElementById("risultato").innerHTML = stampaHTML;
    }
    else {
        if (options === "Rad") {
            info = "Radianti";

            Risultato(info, gradi);

        } else if (options === "Grad") {
            info = "Gradi";
            gradi = Radianti(gradi);

            Risultato(info, gradi);
        }
    }
}

function Inserisci() {
    let gradi = parseFloat(document.getElementById("gradi-radianti").value);
    return gradi;
}

function Radianti(gradi) {
    let gradorad = (gradi * Math.PI) / 180;
    return gradorad;
}

function Gradi(gradi) {
    let gradograd = (gradi * 180) / Math.PI;
    return gradograd;
}

function Risultato(info, gradi) {
    let stampaHTML = "", cos = 0, sen = 0, tan = 0, arcsen = 0, arccos = 0, arctan = 0;

    sen = Math.sin(gradi);
    cos = Math.cos(gradi);
    tan = Math.tan(gradi);
    arcsen = Math.asin(gradi);
    arccos = Math.acos(gradi);
    arctan = Math.atan(gradi);

    if (info == "Gradi")
        gradi = Gradi(gradi);

    stampaHTML += "Dati del calcolo di " + gradi + " " + info;
    stampaHTML += "<br>";
    stampaHTML += "<br>";
    stampaHTML += "Seno : " + sen;
    stampaHTML += "<br>";
    stampaHTML += "Coseno : " + cos;
    stampaHTML += "<br>";
    stampaHTML += "Tangente : " + tan;
    stampaHTML += "<br>";
    stampaHTML += "Arcoseno : " + arcsen;
    stampaHTML += "<br>";
    stampaHTML += "Arcocoseno : " + arccos;
    stampaHTML += "<br>";
    stampaHTML += "Arcotangente : " + arctan;
    stampaHTML += "<br>";

    document.getElementById("risultato").innerHTML = stampaHTML;
}