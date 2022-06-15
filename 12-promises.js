const umaPromessa = new Promise((resolve, reject) => {
  let soma = 1 + 1;
  if (soma === 2) {
    resolve("Tudo certo");
  } else {
    reject("Deu ruim");
  }
});

console.log("Esperando promisse...");

umaPromessa.then((resultado) => {
    console.log(`valor do then: ${resultado}`)
}).catch((erro) => {
    console.error(`valor do catch: ${erro}`)
}).finally(() => {
    console.log(`Independente do resultado eu sempre estarei aqui`)
})

console.log('iSSO VAI SER LOGADO ANTES DA PROMISSE')
