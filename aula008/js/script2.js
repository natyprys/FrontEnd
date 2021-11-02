window.onload = function(){
    console.log('Carregando Js...');
    let pessoa = []
    localStorage.setItem("pessoa", JSON.stringify(pessoa));
}
//coloco pra salvar convertido para json

function salvar(event){
    event.preventDefault();
    let nome = document.getElementById('nome');
    let sobrenome = document.getElementById('sobrenome');
    let idade = document.getElementById('idade');
    //dicionario - Chave:Valor
    if(idade.value >= 18){
        pessoa = { "nome": nome.value, "sobrenome": sobrenome.value, "idade": idade.value };
        let pessoas = JSON.parse(localStorage.getItem("pessoa"));
        //.parse tira a conversao para JSON (para conseguir ler original. para usar o push)

        pessoas.push(pessoa);
        //adicionando a lista
        localStorage.setItem("pessoa", JSON.stringify(pessoas));
        //converte esse dado para JSON

    }else{
        alert('Sai fora de menor')
    }
    carregaTabela();
}

function carregaTabela(){
    let tbody = document.getElementById("corpo-tabela");
    let pessoas = JSON.parse(localStorage.getItem("pessoa"));
    tbody.innerHTML = "";
    pessoas.forEach(p => {
        tbody.innerHTML += "<tr>"
                        +"<td>"+ p["nome"] +"</td>"
                        +"<td>"+ p["sobrenome"] +"</td>"
                        +"<td>"+ p["idade"] +"</td>"
                       +"</tr>";
    });    
}