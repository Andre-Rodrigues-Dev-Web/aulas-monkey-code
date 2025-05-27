//função soma com validação de tipo de número por outra função interna
// function Soma(x, y) {
//     function validaNumero(n) {
//         if (typeof n !== 'number') {
//             alert('x e y precisam ser números.');
//         }
//     }
//     validaNumero(x);
//     validaNumero(y);
//     return x + y;
// }
// alert(Soma('Maria tem ', 30));

//Exemplo de arrow function simples
// const Soma = (x, y) => {
//    if (typeof x !== 'number' || typeof y !== 'number') {
//         throw new Error('x e y precisam ser números.');
//     }
// }

// Exemplo de arrow function direta
// const Soma = (x, y) => x + y + ' anos';

//Exemplo de uso de arrow function com switch
// const numAlunos = (alunos) => {
//     switch (alunos) {
//         case 1000:
//             alert('Temos 1000 alunos.');
//             break;
//         case 2000:
//             alert('Temos 2000 alunos.');
//             break;
//         case 3000:
//             alert('Temos 3000 alunos.');
//             break;
//         default:
//             alert('Não temos esse número de alunos.');
//     }
// }

// numAlunos(3000);

//função que valida a temperatura
const cardValidationTemp = (temp) => {
  const cardTemp = document.querySelector(".card-temp");
  switch (temp) {
    case 15:
      cardTemp.classList.add("chuva");
      cardTemp.innerHTML = `
            <div class="overlay">
                <h1>Tempo de chuva</h1>
                <p>fique em casa</p>
            </div>
        `;
      break;
    case 30:
      cardTemp.classList.add("verao");
      cardTemp.innerHTML = `
            <div class="overlay">
                <h1>Tempo de Verão</h1>
                <p>Vamos curtir a praia</p>
            </div>
            `;
      break;
    case 20:
      cardTemp.classList.add("primavera");
      cardTemp.innerHTML = `
            <div class="overlay">
                <h1>Tempo de Primavera</h1>
                <p>Vamos ver as flores</p>
            </div>
            `;
      break;
    default:
      cardTemp.classList.add("inverno");
      cardTemp.innerHTML = `
        <div class="overlay">
            <h1>Tempo de Inverno</h1>
            <p>Vamos tomar chocolate quente</p>
        </div>
        `;
      break;
  }
};
cardValidationTemp(20);
