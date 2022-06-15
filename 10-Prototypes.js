//

const animal = {
    tipo: 'animal',
    som: 'um som de animal',
    emitirSom: function () {
        console.log(this.som)
    }
}

const gato = {
    som: 'miau',
    tipo: 'gato',
    emitirSom: function () {
        console.log(this.som)
    }
}

Object.setPrototypeOf(gato, animal);
gato.emitirSom();

const gatoRaivoso = {
    tipo: 'gatoRaivoso',
    miarForte: function () {
        console.log(this.som.toUpperCase())
    }
}

Object.setPrototypeOf(gatoRaivoso, gato);
gatoRaivoso.miarForte();

console.log('TESTES:')