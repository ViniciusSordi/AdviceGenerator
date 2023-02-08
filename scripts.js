const dice = window.document.querySelector(".dice-container");
const h1 = window.document.querySelector("h1");
const p = window.document.querySelector("p");

async function puxarDados() {
  try {
    const dadosResponse = await fetch("https://api.adviceslip.com/advice/" + Math.floor(Math.random() * 224));
    const dadosJSON = await dadosResponse.json();
    const dados = await dadosJSON.slip;
    h1.innerHTML = "advice # " +  dados.id;
    p.innerHTML =  `"${dados.advice}"`;
  }
  catch (erro) {
    console.log(erro)
  }
}

window.addEventListener("load", puxarDados);
dice.addEventListener("click", puxarDados)