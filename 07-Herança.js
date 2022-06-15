class Dev{
    constructor(nome, idade, principalLinguagem) {
        this.nome = nome;
        this.idade = idade;
        this.principalLinguagem = principalLinguagem;
    }

    saudacao() {
        console.log(`Oi! Sou dev FrontEnd, trabalho com ${this.principalLinguagem} e me chamo ${this.nome} \n\n`);
    }

}


class Frontend extends Dev {
    constructor(nome, idade, principalLinguagem, framework) {
    super();
    this.nome = nome;
    this.idade = idade;
    this.principalLinguagem = principalLinguagem;
    this.framework = framework;
  }

  saudacao() {
    console.log(
      `Oi! Sou dev FrontEnd, trabalho com ${this.principalLinguagem} e me chamo ${this.nome} \n\n`
    );
  }
}


class Backend extends Dev {
    constructor(nome, idade, principalLinguagem, bancoDeDados) {
    super();
    this.nome = nome;
    this.idade = idade;
    this.principalLinguagem = principalLinguagem;
    this.bancoDeDados = bancoDeDados;  
  }

  saudacao() {
    console.log(
      `Oi! Sou dev Backend, trabalho com ${this.principalLinguagem} e me chamo ${this.nome} \n\n`
    );
  }
}

const FrontEnd1 = new Frontend("Dig", "19", "JavaScript", "React.js");
const Backend1 = new Backend("Lean", "20", "C#", "SMSS");

console.log(FrontEnd1);
FrontEnd1.saudacao();

console.log(Backend1);
Backend1.saudacao();

