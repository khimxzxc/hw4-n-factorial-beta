/** 1. Перепишите функцию, используя оператор '?' или '||'
function checkAge(age) {
  if (age > 18) {
  return true;
  } else {
  return confirm('Родители разрешили?');
  }
 
  }
  
*/

/** 
function checkAge (age) {
    return age > 18 ? true : confirm('Родители разрешили?');
  
}
let userAge = checkAge();
console.log(userAge);
*/


/** 
function checkAge(age) {
    return age > 18 || confirm('Родители разрешили?');
}

let userAge = checkAge();
console.log(userAge);
*/

//2. Функция pow(x,n)
/** 
function pow(x, n) {
    let result = 1;  
    
    for (let i = 0; i < n; i++) {
      result *= x;  
    }
  
    return x ** n;  
  }
  
let x = +prompt("x?", '');
let n = +prompt("n?", '');

alert(pow(x, n));
*/

//3. Перепишите с использованием функции-стрелки
/** 

let ask = (question,yes,no) => {
  if (confirm(question)) yes()
    else no();
}

ask("Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);
*/

//4. Сортировать в порядке по убыванию
/** 
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr ); // 8, 5, 2, 1, -10

*/

//5. Трансформировать в массив имён

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map

alert( names ); // Вася, Петя, Маша