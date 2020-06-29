
const mygtukasivest = document.getElementById("modivedimas") //modalo patvirtinimas po uzpildymo
const tablevieta = document.getElementById("tableid");

mygtukasivest.addEventListener('click', generavimas)
var click = 0;
function generavimas (){
    const inputas1 = document.getElementById("moduzduotpavadinimas").value; // modalo pavadinimo input 1
    const inputas2 = document.getElementById("modpriority").value; // modalo prioriteto input 2
    const inputas3 = document.getElementById("progress").value; // modalo progreso input 3
    if(!inputas1 || !inputas2){
        window.alert("uzpildykite laukus!");
        return ;
        click--;
    }
    click++;
    var row = 1;
    var naujaEilute = tablevieta.insertRow(row);
    var dezute1 = naujaEilute.insertCell(0);
    var dezute2 = naujaEilute.insertCell(1);
    var dezute3 = naujaEilute.insertCell(2);
    var dezute4 = naujaEilute.insertCell(3);
    var dezute5 = naujaEilute.insertCell(4);

    dezute1.innerHTML = click;
    dezute2.innerHTML = inputas1;
    dezute3.innerHTML = inputas2;
    dezute4.innerHTML = progresbar();
    dezute5.innerHTML = `<button id="edit" type="button" class="btn btn-primary" >Edit</button>`;
    row++;
// formos progressas

function progresbar() {
    dezute4.innerHTML = `<progress id="myProgress" value="0" max="100"></progress>`;
    var x = document.getElementById("myProgress");		  
    x.value = inputas3;
    return `<progress id="myProgress" value="${x.value}" max="100"></progress>`;
}

// edit kazka 
const editas = document.getElementById("edit");
editas.addEventListener('click', editinimas);
function editinimas(){
    
}

// formos resetas
    document.formplus.reset();
}

