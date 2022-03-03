var id = 0;
function idGeneration() {
    id++;
    return id;
};

var x;

function send() {
    let personagemGen = x;
    let i = idGeneration()
    let value = document.getElementById("text").value;
    limpar();
    criarDiv(i);
    criarImg(i,personagemGen);
    criarNome(i,personagemGen);
    criarId(i);
    criarEdit(i);
    criarDelete(i);
    criarComentario(i,value);
    personagemRandom();
};

function limpar() {
    document.getElementById("text").value = "";
};

function criarDiv(i) {
    let comments = document.getElementById("comments");
    comments.innerHTML += '<div id="box'+i+'" class="box"></div>';
};

function criarImg(i,p) {
    let imgRandom = ["image-amyrobson", "image-juliusomo", "image-maxblagun", "image-ramsesmiron"];
    let img = document.getElementById("box"+i);
    img.innerHTML += '<img class="foto" src="images/avatars/'+imgRandom[p]+'.png"></img>';
};

function criarNome(i,p) {
    let nomes = ["Amy Robson", "Juliu Somo", "Max Blagun", "Ramses Miron"];
    let nome = document.getElementById("box"+i);
    nome.innerHTML += '<h2 class="nome">'+nomes[p]+'</h2>';
};

function criarId(i) {
    let id = document.getElementById("box"+i);
    id.innerHTML += '<h3 class="id">'+i+'</h3>';
};

function criarComentario(i,value) {
    let comentario = document.getElementById("box"+i);
    comentario.innerHTML += '<p id="comentario'+i+'" class="comentario">'+value+'</p>';
};

function criarEdit(i) {
    let edit = document.getElementById("box"+i);
    edit.innerHTML += '<input onclick="edit('+i+')" class="btin" type="button" value="Edit">';
};

function criarDelete(i) {
    let edit = document.getElementById("box"+i);
    edit.innerHTML += '<input onclick="excluir('+i+')" class="btin red" type="button" value="Delete">';
}

function excluir(d) {
   let excluirHTML = document.getElementById("box"+d);
   excluirHTML.remove();
};

function edit(e) {
    let conteudoAntigo = document.getElementById("comentario"+e).innerText;
    let edit = document.getElementById("box"+e);
    document.getElementById("comentario"+e).innerHTML = '<input id="inputxt'+e+'" class="inputxt" value="'+conteudoAntigo+'" type="text"><input class="button update" type="button" value="UPDATE" onclick="update('+e+')">';
};

function update(u) {
    let conteudoNovo = document.getElementById("inputxt"+u).value;
    document.getElementById("comentario"+u).innerHTML = '<p id="comentario'+u+'" class="comentario">'+conteudoNovo+'</p>';
};

function personagemRandom() {
    let imgRandom = ["image-amyrobson", "image-juliusomo", "image-maxblagun", "image-ramsesmiron"];
    let personagemGeneration = Math.round((Math.random()*3));
    let avatartInicial = document.getElementById("entrada");
    avatartInicial.innerHTML += '<img id="avatarInicial" class="foto" src="images/avatars/'+imgRandom[personagemGeneration]+'.png"></img>'
    x = personagemGeneration;
    return personagemGeneration;    
};