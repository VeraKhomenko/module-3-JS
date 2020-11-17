const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line

  const entries = Object.entries(employees);
  entries.sort((a, b) => (a[1] < b[1] ? 1 : -1));
  return entries[0][0];
  //   if (entries.length === 0) {
  //     return '';
  //   }
  //   let bestEmployee = entries[0];
  //   for (let i = 1; i < entries.length; i += 1) {
  //     if (entries[i][1] > bestEmployee[1]) {
  //       bestEmployee = entries[i];
  //     }
  //   }
  //   return bestEmployee[0];
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'

/*Задача 3-3
Поиск наибольшего значения среди свойств объекта
Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненных задач содержатся как свойства объекта в формате "имя":"кол-во задач"*/
