function sendtext() {
    let text = document.getElementById("text").value;
    document.getElementById("coments").innerHTML += '<div id="pessoa">' + text + '</div>' + '<input type="button" value="editar" onclick="editar()"><input type="button" value="excluir" onclick="excluir()">';
    esvaziar();
}

function esvaziar() {
    document.getElementById("text").value = " ";
}

function editar() {
    let pessoa = document.getElementById("pessoa").innerText;
    document.getElementById("pessoa").innerHTML += '<input type="text" id="teste" value="' + pessoa + '">' + '<input type="button" value="update" onclick="update()">';
    
}

function update() {
    let novo = document.getElementById("teste").value;
    document.getElementById("pessoa").innerText = novo;
}

function excluir() {
    document.getElementById("coments").innerHTML = "";
}