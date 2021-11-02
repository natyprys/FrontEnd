var pessoas = [];
//para declarar lista
var idades = [];

window.onload = function(){
    console.log('Carregando Js...');

}
// salvar(event) para evitar q o dado suma ao recarregar a pagina

function salvar(event){
    event.preventDefault();
    // função para evitar a ação de recarregar
    let nome = document.getElementById('nome');
    let sobrenome = document.getElementById('sobrenome');
    let idade = document.getElementById('idade');

    console.log(nome.value ,sobrenome.value ,idade.value);
    idades.push(idade.value);
    console.log(idades);
    // nesse caso estamos usando var idades = [] em um array para salvar só de idades.


    //dicionario - Chave:Valor

    if(idade.value >= 18){
        pessoa = { "nome": nome.value, "sobrenome": sobrenome.value, "idade": idade.value };
        pessoas.push(pessoa);
        //console.log (pessoa["nome"]);  - Para imprimir só o nome
    }else{
        alert('Sai fora de menor')
    }
    carregaTabela();
}

function carregaTabela(){
    let tbody = document.getElementById("corpo-tabela");
    tbody.innerHTML = "";
    // para n exponenciar é preciso limpar o corpo da tabela; por isso o tbody.innerHTML = "";

    //for do JS:
    //Array.forEach( elemento => carrega um corpo da tabela )
        pessoas.forEach(p => {
            tbody.innerHTML += "<tr>"
    // += para não sobreescrever. conteudo atual + o proximo
                        +"<td>"+ p["nome"] +"</td>"
                        +"<td>"+ p["sobrenome"] +"</td>"
                        +"<td>"+ p["idade"] +"</td>"
                       +"</tr>";
    });    
}