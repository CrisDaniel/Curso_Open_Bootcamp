const a = 9;
let b = 6;

new TypeIt("#result", {
  strings: [`Se multiplicaron dos numeros: a = ${a} y b = ${b}`, `Resultado: ${a * b}`],
  speed: 50,
  waitUntilVisible: true,
}).go();
