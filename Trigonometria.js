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

let Inserisci = () => parseFloat(document.getElementById("gradi-radianti").value);

let Radianti = (gradi) => (gradi * Math.PI) / 180;

let Gradi = (gradi) => (gradi * 180) / Math.PI;

function Risultato(info, gradi) {
    let stampaHTML = "";

    let sen = Math.sin(gradi);
    let cos = Math.cos(gradi);
    let tan = Math.tan(gradi);
    let arcsen = Math.asin(gradi);
    let arccos = Math.acos(gradi);
    let arctan = Math.atan(gradi);

    if (info == "Gradi")
        gradi = Gradi(gradi)

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