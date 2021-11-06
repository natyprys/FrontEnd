window.onload = function(){
    console.log("Carregando Js ...")
    let viagem = [];
    // Crie uma função que capture as informações do formulário e salve em localstorage
    localStorage.setItem("viagem", JSON.stringify(viagem)); 
    //O dado deve ser um dicionário dentro de uma lista e convertido para JSON.
    salvar();
}

// ao inves de usar só o function salvar(), vamos usar o function salvar(event) para evitar que o dado suma ao recarregar a pag.
function salvar(event){
    event.preventDefault();
    // função para evitar a ação de recarregar
    let id = document.getElementById ('id');
    let origem = document.getElementById ('origem');
    let destino = document.getElementById ('destino');
    let estadia = document.getElementById ('estadia');
    let preco = document.getElementById ('preco')
    
    viagem = { "id": id.value, "origem": origem.value, "destino": destino.value, "estadia": estadia.value, "preco":  preco.value};
    let viagens = JSON.parse(localStorage.getItem("viagem"));
    //.parse tira a conversao para JSON (para conseguir ler original. para usar o push)

    viagens.push(viagem);
    //adicionando a lista
    
    localStorage.setItem("viagem", JSON.stringify(viagens))
    //convertendo o dado para JSON

    carregaTabela();
}

function carregaTabela(){
    
    let tbody = document.getElementById("corpo-tabela");
    let viagens =  JSON.parse(localStorage.getItem("viagem"));
    console.log(tbody);
    tbody.innerHTML = "";
    viagens.forEach ( p => {
        tbody.innerHTML += "<tr>"
                        + "<td>" + p["id"] + "</td>"
                        + "<td>" + p["origem"] + "</td>"
                        + "<td>" + p["destino"] + "</td>"
                        + "<td>" + p["estadia"] + "</td>"
                        + "<td>" + p["preco"] + "</td>"
                        + "</tr>";
    });
}