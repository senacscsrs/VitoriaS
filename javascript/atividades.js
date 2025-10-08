// Exercícios sobre Variáveis e Console.log

// 1. Declare três variáveis: uma string com o seu nome, um number com a sua idade e um boolean que diga se você gosta de programação. Use console.log() para mostrar todas juntas.

let nome = "Vitória";
console.log(nome);
let idade = 16;
console.log(idade);
let gostodeprogramação = true;
console.log(gostodeprogramação);

// 2. Crie uma variável chamada fruta com valor "maçã". Em seguida, mude o valor dela para "banana" e imprima os dois momentos no console.
let fruta = "maça";
console.log(fruta);
fruta = "banana";
console.log(fruta);

// 3. Mostre no console uma frase que use template string para exibir: "Meu nome é X e tenho Y anos".
console.log(`Meu nome é ${nome} e tenho ${idade} anos`);

// 4. Declare uma variável cidade e outra estado. Mostre no console uma frase completa usando concatenação com +.
let cidade = " Santa Cruz do Sul";
console.log(cidade);
estado = "Rio Grande do Sul";
console.log("eu moro em " + cidade + "," + estado);

// 5. Repita o exercício anterior, mas agora usando template string.
console.log(`Eu moro em ${cidade} , ${estado}`)

// 6. Use console.log() com vírgula para exibir três informações: "Produto:", o nome de um produto e o preço dele.
let produto = "Produto:";
let nomeproduto = "caderno";
let precoproduto = 10.00;
console.log(produto + nomeproduto + " = R$" + precoproduto);

// 7. Crie uma variável que contenha uma quebra de linha usando \n e mostre no console.
let algo = "que maneiro \n titia";
console.log(algo);

// 8. Crie uma variável que contenha um símbolo especial com \u00A9 e exiba no console.
let simboloespecial = "\u00A9";
console.log(simboloespecial);

// Exercícios sobre If / Else

// 9. Crie uma variável nota com valor numérico. Se for maior ou igual a 7, mostre "Aprovado". Senão, mostre "Reprovado".
let nota = 8;
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// 10. Declare uma variável idade. Se for maior ou igual a 18, mostre "Maior de idade". Caso contrário, mostre "Menor de idade".
let idade1 = 17;
if (idade1 >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

// 11. Crie uma variável senha. Se ela for igual a "1234", mostre "Acesso permitido", caso contrário mostre "Senha incorreta".
let senha = 1234;
if (senha = 1234) {
    console.log("Acesso permitido");
} else {
    console.log("Senha incorreta");
}

// 12. Declare uma variável numero. Se for positivo, mostre "Número positivo". Se for negativo, mostre "Número negativo". Se for 0, mostre "Número neutro".
let numero = 0;
if (numero > 0) {
    console.log("Número positivo");
} else if (numero < 0) {
    console.log("Número negativo");
} else {
    console.log("Número neutro");
}
// 13. Crie duas variáveis num1 e num2. Use if/else para verificar qual é o maior e mostre o resultado no console.
let num1 = 10;
let num2 = 12;
if (num1 > num2) {
    console.log("número 1 é maior que número 2");
} else {
    console.log("Número 2 é maior que número 1")
}
// Exercícios sobre Switch

// 14. Crie uma variável diaSemana com um número de 1 a 7 e use switch para mostrar qual é o dia correspondente.
let diasemana = 2;
switch (diasemana) {
    case 1:
        console.log("segunda");
        break;
    case 2:
        console.log("terça");
        break;
    default:
        console.log("inválido");
        break;
}



// 15. Use switch para verificar a cor de um semáforo ("vermelho", "amarelo", "verde") e mostre no console a ação correspondente.
let semaforo = "verde";
switch (semaforo) {
    case "vermelho":
        console.log("vermelho");
        break;
    case "amarelo":
        console.log("amarelo");
        break;
    case "verde":
        console.log("verde");
        break;
    default:
        console.log("inválido");
        break;
}


// 16. Crie uma variável notaConceito que pode ser "A", "B", "C", "D" ou "F". Use switch para mostrar a mensagem correspondente à nota.
let notaconceito = "A";
switch (notaconceito) {
    case "A":
        console.log("exelente");
        break;
    case "B":
        console.log("Muito bom");
        break;
    case "C":
        console.log("Bom")
        break;
    default:
        console.log("Reprovado");
        break;
}
// 17. Declare uma variável mes com número de 1 a 12 e use switch para mostrar o nome do mês.
let numero2 = 2;
switch (numero2) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("fevereiro");
        break;
    default:
        console.log("Inválido");
        break;
}
// Exercícios sobre For

// 18. Use um for para imprimir os números de 1 a 10 no console.
let l = 0;
for (l = 1; l <= 10; l++) {

    console.log(l);
}

// 19. Monte um for que faça uma contagem regressiva de 10 até 0 e ao final mostre "Fogo!".
let e = 10;
for (e = 10; e >= 0; e--) {
    console.log(e);
}
console.log("Fogo!");

// 20. Crie um for que multiplique um número qualquer de 1 até 10 e mostre a tabuada no console.
let a = 1;
let num = 2;
for (a = 1; a <= 10; a++) {
    console.log(a * num);
}

// 21. Use um for para imprimir apenas os números pares de 0 até 20.
let s = 1;
for (s = 1; s <= 20; s++) {
    if (s % 2 === 0) {
        console.log(s);
    }
}

// 22. Use um for para somar todos os números de 1 a 100 e mostre o resultado no console.

let soma = 0;

for (let i = 1; i <= 100; i++) {
    soma += i; // soma = soma + i
}

console.log("A soma de 1 a 100 é:", soma);

// Exercícios sobre While

// 23. Crie uma variável contador iniciando em 0 e use while para imprimir os números até 5.
let contador = 0;
while (contador <= 5) {
    console.log(contador);
    contador++;
}
// 24. Simule um caixa eletrônico: comece com saldo = 100 e enquanto o saldo for maior que 0, retire 10 e mostre no console.
let caixa = 100;
while (caixa > 0) {
    caixa = caixa - 10;
    console.log(caixa);
}
// 25. Use while para mostrar todos os números ímpares entre 1 e 20.
let impar = 1;
while (impar < 20) {
    console.log(impar);
    impar += 2;
}

// 26. Crie uma variável senha e simule uma tentativa de senha com while, até que a senha correta "abcd" seja digitada.
let tentativa = "";
while (tentativa !== "abcd") {
    tentativa = "abcd";
}
console.log("Senha correta!");


// Exercícios sobre Do/While

// 27. Peça uma senha (simulada com uma variável) e use do/while para repetir até que ela seja "1234".
let senha1 = "";
do {
    senha1 = "1234";
} while (senha1 !== "1234");
console.log("Senha correta!");

// 28. Use do/while para imprimir números de 0 a 3.
let i = 0;
do {
    console.log(i);
    i++;
} while (i <= 3);

// 29. Crie um do/while que mostre um menu com três opções (simulado com uma variável) e só saia quando a opção for "sair".
let opcao = "";
do {
    console.log("Menu:");
    opcao = "sair";
} while (opcao !== "sair");
console.log("Saindo do menu...");

// 30. Use do/while para gerar números de 1 até 5 e mostrá-los no console.
let j = 1;
do {
    console.log(j);
    j++;
    console.log(j);
} while (j <= 5);




// Crie uma variável chamada frase com o texto "O JavaScript é divertido" e mostre no console a quantidade de caracteres dessa frase, em seguida exiba apenas a palavra "divertido" utilizando o método slice.
let frase = "O JavaScript é divertido";
console.log("Quantidade de caracteres:", frase.length);
console.log("Palavra slice:", frase.slice(15));

// Declare uma variável nome contendo o seu próprio nome e mostre esse valor no console primeiro em letras maiúsculas com toUpperCase() e depois em letras minúsculas com toLowerCase().
let nome2 = "vivi";
console.log("Maiúsculas:", nome.toUpperCase());
console.log("Minúsculas:", nome.toLowerCase());


// Crie uma variável animal com o valor "O gato dorme muito" e substitua a palavra "gato" por "cachorro", exibindo o resultado final no console.
let animal = "O gato dorme muito";
let novoAnimal = animal.replace("gato", "cachorro");
console.log(novoAnimal);


// Escreva um código que verifique se a palavra "JavaScript" está contida na frase "Estou aprendendo JavaScript" e, caso esteja, mostre no console "Achei a palavra!", caso contrário mostre "Não achei".
let frase2 = "Estou aprendendo JavaScript";
if (frase2.includes("JavaScript")) {
    console.log("Achei a palavra!");
} else {
    console.log("Não achei");
}


// Crie um programa que peça o nome de uma fruta armazenado em uma variável e utilize a estrutura switch para exibir mensagens diferentes para "maçã", "banana" e "uva", e para qualquer outra fruta mostre a mensagem "Fruta não cadastrada".
let fruta3 = "banana";
switch (fruta3) {
    case "maçã1":
        console.log("Você escolheu maçã!");
        break;
    case "banana1":
        console.log("Você escolheu banana!");
        break;
    case "uva1":
        console.log("Você escolheu uva!");
        break;
    default:
        console.log("Fruta não cadastrada");
}



// Utilize um laço for para percorrer a string "Aprender" e exibir cada letra separadamente no console.
let palavra = "Aprender";
for (let i = 0; i < palavra.length; i++) {
    console.log(palavra[i]);
}


// Crie uma variável senhaCorreta com o valor "1234" e utilize um laço do...while que simule a digitação de senhas até acertar a senha correta, exibindo "Senha correta!" quando a senha informada for igual.
let senhaCorreta = "1234";
let senhaDigitada;
do {
    senhaDigitada = "1234";
} while (senhaDigitada !== senhaCorreta);
console.log("Senha correta!");


// Crie uma variável saldo com o valor 5 representando passagens de transporte e, enquanto o saldo for maior que zero, exiba no console "Usei 1 passagem. Restam X passagens", mostrando ao final "Saldo esgotado!".
let saldo = 5;
while (saldo > 0) {
    console.log(`Usei 1 passagem. Restam ${saldo - 1} passagens`);
    saldo--;
}
console.log("Saldo esgotado!");


// Escreva um programa que armazene um número em uma variável e verifique se esse número é par ou ímpar, exibindo a mensagem "Número par" ou "Número ímpar" conforme o caso.
let numero4 = 7;
if (numero % 2 === 0) {
    console.log("Número par");
} else {
    console.log("Número ímpar");
}


// Crie uma variável texto com o valor "O rato roeu a roupa do rei de Roma" e utilize o método split(" ") para transformá-la em um array de palavras, em seguida percorra esse array com um laço for exibindo cada palavra em uma linha diferente no console.
let texto = "O rato roeu a roupa do rei de Roma";
let palavras = texto.split(" ");
for (let i = 0; i < palavras.length; i++) {
    console.log(palavras[i]);
}


// Crie um vetor com os nomes de cinco colegas da turma e exiba cada nome no console utilizando um laço for.
let colegas = ["Maria", "Luiza", "Isa", "Vivi", "Davii"];
for (let i = 0; i < colegas.length; i++) {
    console.log(colegas[i]);
}
// Crie um vetor com cinco números inteiros e calcule a soma de todos eles, mostrando o resultado final no console.
let numeros7 = [5, 10, 15, 20, 25];
let soma8 = 0;
for (let i = 0; i < numeros7.length; i++) {
    soma8 += numeros7[i];
}
console.log("Soma total:", soma8);
// Crie um vetor com alguns itens de supermercado (por exemplo: "arroz", "feijão", "leite") e utilize o método push() para adicionar dois novos itens, exibindo o vetor atualizado no console.
let mercado = ["arroz", "feijão", "leite"];
mercado.push("açúcar", "café");
console.log("Lista atualizada:", mercado);

// Crie um vetor com os dias da semana e mostre no console apenas o dia correspondente à posição atual retornada pelo método getDay() do objeto Date.
let dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
let hoje = new Date().getDay();
console.log("Hoje é:", dias[hoje]);

// Crie um vetor com cinco notas de alunos e utilize um laço para calcular a média. Ao final, exiba no console a média calculada.
let notas = [8, 7, 9, 6, 10];
let total = 0;
for (let i = 0; i < notas.length; i++) {
    total += notas[i];
}
let media = total / notas.length;
console.log("Média final:", media);




// 1. Crie um código que declare uma variável chamada nome e exiba no console a mensagem:
// Olá, [nome]! Seja bem-vindo ao JavaScript!
let nome4 = "vitória";
console.log("Olá,", nome4, "!Seja bem-vindo ao JavaScrpt!");
// ________________________________________
// 2. Faça um programa que receba a idade de uma pessoa e exiba se ela é maior ou menor de idade.
let idade4 = 17;
if (idade4 >= 18) {
    console.log("maior de idade");
} else {
    console.log("menor de idade");
}
// ________________________________________
// 3. Crie um programa que receba duas notas de um aluno, calcule a média e exiba se ele foi Aprovado, em Recuperação ou Reprovado.
let nota1 = 8;
let nota2 = 6;
let media1 = (nota1 + nota2) / 2;
if (media1 >= 7) {
    console.log("Aprovado");
} else if (media1 >= 5); {
    console.log("Recuperação");
}
// ________________________________________
// 4. Desenvolva um programa que receba o salário de um funcionário e calcule um aumento de 15%. Mostre o novo salário.


// ________________________________________
// 5. Monte um código que receba o nome de um produto e o valor de compra. Se o valor for maior que 100, aplique 10% de desconto e mostre o valor final.
let produto1 = "caderno";
let valor = 10;
if (valor > 100) {
    console.log(preco -= preco * 0.1);
    console.log(preco = preco - (preco * 0.1));
} else {
    console.log("Sem desconto");
}

// ________________________________________
// 6. Crie um código que exiba todos os números de 1 a 10 usando um laço for.
for (i = 1; i <= 10; i++) {
    console.log(i);
}

// ________________________________________
// 7. Faça um programa que exiba todos os números pares de 0 a 20 usando o laço while.
let pares = 0
while (pares <= 20) {
    if (pares % 2 === 0) {
        console.log("pares " + pares);
    }
    pares++;
}


// ________________________________________
// 8. Crie um programa que receba um número e mostre a tabuada desse número de 1 a 10.
let numm=1;

// ________________________________________
// 9. Desenvolva um programa que peça um número e verifique se ele é par ou ímpar.
// ________________________________________
// 10. Crie um programa que receba um nome de usuário e uma senha. Se o usuário e a senha estiverem corretos, mostre "Acesso permitido". Caso contrário, "Acesso negado".
// ________________________________________
// 11. Monte um programa que pergunte a distância em km e calcule o valor de uma corrida considerando:
// •	Tarifa base = R$5,00
// •
// o	R$2,50 por km rodado
// Mostre o valor total da corrida.
// ________________________________________
// 12. Crie um vetor chamado frutas com três itens. Depois adicione mais uma fruta usando push() e exiba o vetor completo.
// ________________________________________
// 13. Crie um vetor com 5 números e exiba os números maiores que 10 e sua posição no console.
//________________________________________
// 14. Monte um programa que receba três nomes e armazene em um vetor. Depois, exiba apenas o segundo nome.
// ________________________________________
// 15. Faça um programa que armazene 5 notas em um vetor e mostre a média delas.
// ________________________________________
// 16. Crie um programa que pergunte o dia da semana (1 a 7) e mostre no console:
// 1 - Domingo
// 2 - Segunda
// ...
// 7 - Sábado
// ________________________________________
// Use a estrutura switch para isso.
// ________________________________________
// 17. Crie um código que receba o nome de uma cidade e mostre no console quantas letras ela possui.
// ________________________________________
// 18. Monte um programa que receba o nome completo de uma pessoa e exiba apenas o primeiro nome (dica: use split(" ")).
// ________________________________________
// 19. Crie um vetor com o nome de 5 alunos e, usando um laço for, exiba uma mensagem de boas-vindas para cada um deles no console.
// ________________________________________
// 20. Faça um programa que armazene em um vetor os preços de 4 produtos e mostre:
// •	O valor total da compra
// •	O preço médio dos produtos