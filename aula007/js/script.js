function alertaInicio(){
    console.log("Seja bem-vindo");
}


function salvar(){
    console.log('Funcao funcionando');
    //para aparecer no console
    
    let input_nome = document.getElementById('nome');
    //para salvar o nome

    console.log(input_nome.value);
    //para imprimir o valor digitado

    console.log(input_nome.type);
    // para aparecer o tipo

    console.log(input_nome.id);

    //let h2 =input_nome.value;
    //let h2 = document.getElementById("nome-preenchido")
    //h2.innerHTML = "Inserindo informações h2";
    //para aparecer em h2 o valor digitado no nome

    let div = document.getElementById('nome-preenchido');
    div.innerHTML = div.innerHTML + "<h1>" + input_nome.value + "</h1>";
    
    input_nome.value = "";
    //para limpar o campo
}

window.onload=function (){
    alertaInicio();
}