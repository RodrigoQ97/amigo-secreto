let amigos = [];
amigoDigitado = '';
amigoSecreto = '';
lista = '';

function agregarAmigo(){
    let datoUsuario = document.querySelector('input').value; 

    if (datoUsuario === '') {  
        alert('Por favor, inserte un nombre.'); 
        return;
    }
    document.querySelector('input').value = ''; 
    amigos.push(datoUsuario); 
    añadiNombreAmigo(datoUsuario);
    console.log(amigos);
    return;
}

function sortearAmigo() { 

    let amigoSecreto = Math.floor(Math.random()*amigos.length); 
    const indice = amigos[amigoSecreto];
    let lista = document.getElementById("listaAmigos");

    if (indice === undefined) {  
        alert('No se puede sortear porque no hay un amigo registrado.'); 
        return;
    } else {
        lista.innerHTML =  "";
        lista.innerHTML += `<li>El amigo secreto es: ${indice}</li>`;
    }
}

function añadiNombreAmigo() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}