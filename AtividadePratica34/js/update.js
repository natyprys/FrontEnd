window.onload = function(){
    console.log("Carregando Js ...")
    let viagem = [];
    localStorage.setItem("viagem", JSON.stringify(viagem)); 
    salvar();
}

function salvar(event){
    event.preventDefault();
    let id = document.getElementById ('id');
    let origem = document.getElementById ('origem');
    let destino = document.getElementById ('destino');
    let estadia = document.getElementById ('estadia');
    let preco = document.getElementById ('preco')
    
    viagem = { "id": id.value, "origem": origem.value, "destino": destino.value, "estadia": estadia.value, "preco":  preco.value};
    let viagens = JSON.parse(localStorage.getItem("viagem"));

    viagens.push(viagem);
    
    localStorage.setItem("viagem", JSON.stringify(viagens))
}
