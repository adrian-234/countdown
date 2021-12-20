var idobe = 0;
function startstop() {
    if (document.getElementById("idobe").value != "") {    
        if (document.getElementById("startgomb").innerHTML == "Start") {
            //start
                idobe = document.getElementById("idobe").value;
                document.getElementById("szamlalo").innerHTML = idobe;
                document.getElementById("startgomb").innerHTML = "Stop";
                szamlalo()
        } else {
            //stop
            //itt kell majd a a stoppot meg csinálni
            //ez még nem jó
            clearTimeout(to);
            document.getElementById("startgomb").innerHTML = "Start";
        }
    }
}

var i = 1;
var ido = 0;
var to = 0;
var csalas = true
function szamlalo() {
    ido = idobe * 60 - i;
    document.getElementById("szamlalo").innerHTML = Math.floor(ido / 60) + ":" + ido % 60;
    document.getElementById("csik").style.width = ido / (idobe*60) * 100 + "%"
    i += 1
    if (ido == 0) {
        //itt megáll a számláló és fel ugrik egy ablak DE nem alert hanem div
        document.getElementById("hatterdiv").style.display = "block";
    } else {
        if (csalas == false) {
            to = setTimeout(szamlalo,1000);
        } else {
            to = setTimeout(szamlalo,1300);
        }
    }
}

function reset() {
    i = 0;
    ido = 0;
    idobe = 0;
    clearTimeout(to);
    document.getElementById("idobe").value = "";
    document.getElementById("startgomb").innerHTML = "Start";
    document.getElementById("szamlalo").innerHTML = "0:00";
    document.getElementById("hatterdiv").style.display = "none";
    document.getElementById("csik").style.width = "100%";
}
