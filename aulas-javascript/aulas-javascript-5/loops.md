# Introdução ao conceito de loop
Um loop (ou laço) permite executar um bloco de código várias vezes, conforme uma condição for verdadeira.

## Tipos de loops em JavaScript
for
Usado quando sabemos o número exato de vezes que queremos repetir algo.

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Repetição número:", i);
}
```

### Explicando o for:

let i = 0 → início

i < 5 → condição

i++ → incremento

## while
Usado quando não sabemos quantas vezes algo deve ser repetido, mas temos uma condição de parada.

```javascript
let i = 0;
while (i < 5) {
  console.log("Número:", i);
  i++;
}
```
## do...while
Parecido com while, mas garante que o bloco será executado ao menos uma vez, mesmo que a condição seja falsa.

```javascript
let i = 0;
do {
  console.log("Executando:", i);
  i++;
} while (i < 5);
```
## for...of
Usado para percorrer valores de arrays, strings, etc.

```javascript
const frutas = ["maçã", "banana", "laranja"];

for (const fruta of frutas) {
  console.log(fruta);
}
```
## for...in
Usado para percorrer as chaves (índices ou propriedades) de objetos ou arrays.

```javascript
const pessoa = { nome: "Ana", idade: 30 };

for (const chave in pessoa) {
  console.log(chave, "=>", pessoa[chave]);
}
```
### Cuidados com loops infinitos
Se a condição nunca for falsa, o loop nunca termina:

```javascript
while (true) {
  // Isso nunca para!
}
```
### Sempre certifique-se de que sua condição vai parar em algum momento.

🧪 4. Exercícios práticos
Exercício 1
Imprima os números de 1 a 10 usando um for.

Exercício 2
Some os números de 1 a 100 usando um while.

Exercício 3
Use um for...of para listar cada letra da string "JavaScript".

Exercício 4
Crie um objeto com 3 propriedades e use for...in para exibir suas chaves e valores.

## 5. Desafio bônus
Crie um loop que percorre um array de números e imprime apenas os números pares.

📌 Dica Extra: Use break e continue
break → Encerra o loop imediatamente
javascript
Copiar
Editar
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
continue → Pula para a próxima iteração
javascript
Copiar
Editar
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue; // pula pares
  console.log(i); // imprime ímpares
}