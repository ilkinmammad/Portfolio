// task2

// for (let i = 1; i <= 10; i++) {
//     let vurma = "";
//     for (let  d = 1; d <= 10; d++) {
//         vurma += `${i * d}\t`; 
//     }
//     console.log(vurma); 
// }








// task3

// const users = [
//     { name: "Eli", age: 25 },
//     { name: "Veli", age: 35 },
//     { name: "Deli", age: 28 },
//     { name: "Mehmed", age: 40 },
//     { name: "Ayxan", age: 22 }
// ]

// for (let i = 0; i < users.length-1; i++) {
//     let user = users[i].age

//     if (user > 30 ) {

//         console.log(user);
        
        
//     }
    
// }









// task4

// let cem = 0
// let eded = 0

// while (eded <10 ) {
//     let number = Number(prompt("Eded daxil edin"))
    
//     cem += number
//     eded++
// }
// let orta = cem / 10
// console.log(orta);











// task5

let arr = [203, 19, 2, 13, 196, 86, 35, 77];

// let mode = Number(prompt("Dəyəri daxil edin:"));

// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   result(arr[i] % mode);  
// }

// console.log(result);








// task6

// let maxNumber = Math.max(...arr);

// console.log(maxNumber);











// task7

// let maxNumber = Math.max(...arr);
// let minNumber = Math.min(...arr);

// let maxIndex = arr.indexOf(maxNumber);
// let minIndex = arr.indexOf(minNumber);

// arr[maxIndex] = minNumber;
// arr[minIndex] = maxNumber;

// console.log(arr);








// task8

// let maxNumber = Math.max(...arr);
// let minNumber = Math.min(...arr);

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== maxNumber && arr[i] !== minNumber) {
//     sum += arr[i];  
//   }
// }

// console.log(sum);







// task9

// let input = Number(prompt("Zəhmət olmasa, bir ədəd daxil edin:"));

// if (arr.includes(input)) {
//   console.log("var");
// } else {
//   console.log("yoxdur");
// }









// TASK10

let tek = 0;
let iki = 0;
let uc = 0;

for (let i = 0; i < arr.length; i++) {
  let num = arr[i];

  if (num >= 0 && num < 10) {
    tek++;  
  } else if (num >= 10 && num < 100) {
    iki++;  
  } else if (num >= 100 && num < 1000) {
    uc++;  
  }
}

console.log(tek);
console.log(iki);
console.log(uc);
