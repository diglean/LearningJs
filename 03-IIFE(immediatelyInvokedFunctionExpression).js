//IIFE pode ser usada para ser executada ao mesmo tempo que é criada, no exemplo abaixo
//ela é usada para criada e em seguida usada para atribuir um valor à uma constante.

const resultado = (function () {
    const meuNome = "Dig";
    return meuNome;
})()

console.log(resultado);