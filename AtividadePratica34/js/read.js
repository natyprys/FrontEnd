window.onload = function(){
    let viagem = [];
    localStorage.setItem("viagem", JSON.stringify(viagem)); 
    lerTabela();
}

function lerTabela(event){
    event.preventDefault();
    let tbody = document.getElementById("tabela");
    let viagens = JSON.parse(localStorage.getItem("viagem"));
    tbody.innerHTML = "";
    viagens.array.forEach( p => {
        tbody.innerHTML += "<tr>"
        + "<td>" + p["id"] + "</td>"
        + "<td>" + p["origem"] + "</td>"
        + "<td>" + p["destino"] + "</td>"
        + "<td>" + p["estadia"] + "</td>"
        + "<td>" + p["preco"] + "</td>"
        + "</tr>";
});
}

