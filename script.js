const dados = document.getElementById( "go" ) ;
const  adviceNum = document.getElementById( "advice-number" ) ;
const  adviceText = document.querySelector( ".advice-text" ) ;

window.onload = mostrarCitação;

dados.addEventListener ( "click" , function() {
    mostrarCitação() ;
} ) 

// função mostrarCitação para mostrar citações aleatórias da API
function  mostrarCitação() {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) => {
        adviceNum.textContent = data.id;
        adviceText.textContent = data.advice;
    })
    .catch((error) => {
        alert(`Error ${error}`);
    });
}