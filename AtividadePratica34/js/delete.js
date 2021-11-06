window.onload = function(){
    console.log("Carregando Js ...")
    let viagem = [];
    // Crie uma função que capture as informações do formulário e salve em localstorage
    localStorage.setItem("viagem", JSON.stringify(viagem)); 
    //O dado deve ser um dicionário dentro de uma lista e convertido para JSON.
    lerTabela();
}

function lerTabela(event){
    event.preventDefault();
    // função para evitar a ação de recarregar
    let tbody = document.getElementById("tabela");
    let viagens = JSON.parse(localStorage.getItem("viagem"));
    //.parse tira a conversao para JSON (para conseguir ler original. para usar o push)
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

// Como deletar??