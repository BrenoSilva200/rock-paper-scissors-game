let PlayerMove = "";

let ComputadorMove = '';

let Resultado = "";



let score = {
  vitorias: 0,
  derrotas: 0,
  empates: 0
}

JSON.parse(localStorage.getItem("score"));



function jogo(PlayerMove) {
  const randomnumber = Math.random();

  if (randomnumber >= 0 && randomnumber < 1 / 3) {
    ComputadorMove = "pedra";
  } else if (randomnumber >= 1 / 3 && randomnumber < 2 / 3) {
    ComputadorMove = "papel";
  } else if (randomnumber >= 2 / 3 && randomnumber < 1) {
    ComputadorMove = "tesoura";
  }

  if (PlayerMove === "pedra") {
    if (ComputadorMove === "pedra") {
      Resultado = "Empate.";
    } else if (ComputadorMove === "papel") {
      Resultado = "Você perdeu.";
    } else if (ComputadorMove === "tesoura") {
      Resultado = "Você ganhou.";
    }
  } else if (PlayerMove === "papel") {
    if (ComputadorMove === "pedra") {
      Resultado = "Você ganhou.";
    } else if (ComputadorMove === "papel") {
      Resultado = "Empate.";
    } else if (ComputadorMove === "tesoura") {
      Resultado = "Você perdeu.";
    }
  } else if (PlayerMove === "tesoura") {
    if (ComputadorMove === "pedra") {
      Resultado = "Você perdeu.";
    } else if (ComputadorMove === "papel") {
      Resultado = "Você ganhou.";
    } else if (ComputadorMove === "tesoura") {
      Resultado = "Empate.";
    }
  }

  if (Resultado === "Você ganhou.") {
    score.vitorias = score.vitorias + 1;
  } else if (Resultado === "Você perdeu.") {
    score.derrotas = score.derrotas + 1;
  } else if (Resultado === "Empate.") {
    score.empates = score.empates + 1;
  }

  document.querySelector(".div1").innerHTML = `
    <p class="oi1">Você escolheu:<img class="img1" src="images/${PlayerMove}-emoji.png"> Computador escolheu:<img class="img1" src="images/${ComputadorMove}-emoji.png"</p>
    <p class="oi2">${Resultado}</p>
    <p>Vitórias ${score.vitorias} Derrotas: ${score.derrotas}
    Empates: ${score.empates}</p>`;

    

   localStorage.setItem("score", JSON.stringify(score));

}

function div2() {
  document.querySelector(".div2").innerHTML = "";
}

document.body.addEventListener("keydown", (event) => {
  if (event.key === "a") {
    jogo("pedra");
  } else if (event.key === "s") {
    jogo("papel");
  } else if (event.key === "d") {
    jogo("tesoura");
  }
});





  






