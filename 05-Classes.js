//Classes em Js é syntax sugar
//(
//Em ciência da computação,
//um açúcar sintático é uma sintaxe dentro da linguagem de programação que tem por finalidade
//tornar suas construções mais fáceis de serem lidas e expressas.
//)

class Carro{
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
}

const carro1 = new Carro("Audi", "2020");

const carro2 = new Carro("Ferrari", "2010");

console.log(carro1, carro2)