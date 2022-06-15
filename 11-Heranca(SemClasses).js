const Dev = function (nome, idade, principalLinguagem, stack) {
  this.nome = nome;
  this.idade = idade;
  this.principalLinguagem = principalLinguagem;
  this.stack = stack;

  this.saudacao = function () {
    console.log(
      `Oi! Sou dev ${this.stack}, trabalho com ${this.principalLinguagem} e me chamo ${this.nome} \n\n`
    );
  };
};

const Frontend = function (nome, idade, principalLinguagem, stack, framework) {
    const newDev = new Dev(nome, idade, principalLinguagem, "FrontEndDev")
    newDev.framework = framework;
    Object.setPrototypeOf(this, newDev);
};

const Backend = function (nome, idade, principalLinguagem, stack, bancoDeDados) {
    const newDev = new Dev(nome, idade, principalLinguagem, "BackEndDev")
    newDev.bancoDeDados = bancoDeDados;
    Object.setPrototypeOf(this, newDev);
};

const FrontEnd1 = new Frontend(
  "Dig",
  "19",
  "JavaScript",
  "Frontend",
  "React.js"
);
const Backend1 = new Backend("Lean", "20", "C#", "Backend", "SMSS");

console.log(FrontEnd1);
FrontEnd1.saudacao();

console.log(Backend1);
Backend1.saudacao();

console.log("Testes");
