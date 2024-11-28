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
