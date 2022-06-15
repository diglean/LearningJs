class Dev{
    constructor(nome, idade, principalLinguagem, stack) {
      this.nome = nome;
      this.idade = idade;
      this.principalLinguagem = principalLinguagem;
      this.stack = stack;
    }

    saudacao() {
        console.log(`Oi! Sou dev ${this.stack}, trabalho com ${this.principalLinguagem} e me chamo ${this.nome} \n\n`);
    }

}


class Frontend extends Dev {
    constructor(nome, idade, principalLinguagem, stack, framework) {
    super(nome, idade, principalLinguagem, stack);
    this.framework = framework;
  }
}


class Backend extends Dev {
    constructor(nome, idade, principalLinguagem, stack, bancoDeDados) {
    super(nome, idade, principalLinguagem, stack);
    this.bancoDeDados = bancoDeDados;  
  }
}

const FrontEnd1 = new Frontend("Dig", "19", "JavaScript", "Frontend", "React.js");
const Backend1 = new Backend("Lean", "20", "C#","Backend", "SMSS");

console.log(FrontEnd1);
FrontEnd1.saudacao();

console.log(Backend1);
Backend1.saudacao();

