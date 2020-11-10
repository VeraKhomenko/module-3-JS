// циклы в массиве
"use strict";

const frends = ["mango", "kiwi", "poly", "ajax"];
const nameToFind = "poly";
// let message;
let message = "такого друга нет"; //предположение от обратного решение по умолчанию
for (const friend of frends) {
  if (nameToFind === friend) {
    message = "нашли такого друга";
    break;
  }
  // message = "такого друга нет";
}
console.log(message);
