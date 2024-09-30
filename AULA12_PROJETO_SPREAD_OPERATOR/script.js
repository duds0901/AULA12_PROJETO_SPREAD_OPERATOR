let primeiros = [1, 2, 3];
let numeros = [4, 5, 6];

let juntados = [primeiros,numeros];
console.log(primeiros);
console.log(numeros);
console.log(juntados);

let juntadosSpread = [...primeiros,...numeros];
console.log(juntadosSpread);

//exemplo de scread com objeto
let pessoa = {
    nome: 'Duda',
    idade: 17,
    cargo: 'estudante'
};
let dadosPessoa = {
    status: 'Ativo',
    cidade: 'Campo Largo'
};

console.log(pessoa);
console.log(dadosPessoa);