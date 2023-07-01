const seleccionLetra = document.querySelector('.abecedario');


seleccionLetra.addEventListener('click', leector);

function leector(e){
    letraa = e.target.innerHTML
    const visualizador = document.getElementById('letraenpantalla').value = letraa;
}