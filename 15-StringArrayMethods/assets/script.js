
// tassk1 

// function say() {
//   return str.match(/[aeiouəöüAEIOUƏİÖÜ]/g) || [] ;
// }
// console.log(say());




// task2

// function say() {
//     return str.split(' ')

// }
// console.log(say());




// tasskk3

// function say() {
//     let words = str.split(" ");  
//     let enuzun = "";

//     for (let word of words) {
//       if (word.length > enuzun.length) {
//         enuzun = word; 
//       }
//     }
//     return enuzun;
//   }
//   console.log(say());





//   task4


// function say() {
//     let words = str.split(" ");
//     let upper = [];
//     for (let word of words) {
//         if (word == word.toUpperCase()) {
//             upper.push(word)
//         }
//     }
//     return upper
// }
// console.log(say());







// task5


// function say() {
//     let words = str.split(" ");
//     let upper = [];

//     for (let word of words) {
//         let say = 0;

//         for (let herf of word) {
//             if (herf == herf.toUpperCase() ) {  
//                 say++;
//             }
//         }
//         if (say > 2) {
//             upper.push(word);
//         }
//     }
//     return upper;  
// }
// console.log( say());







// takss6


// function say() {
//     let words = str.split(" "); 
//     let birlesmis = [];

//     for (let word of words) {
//         birlesmis.push(word.charAt(0));  
//     }

//     return birlesmis.join(""); 
// }

// console.log(say());





let str = "I am frontend DEVELOPER I LEARN Javascript"

// task7



// function say() {
//     let words = str.split(" ");  
//     let qisastr = [];

//     for (let word of words) {
//         if (word.length > 4) {

//             let qisa = word.charAt(0) + (word.length - 2) + word.charAt(word.length - 1);

//             qisastr.push(qisa);

//         } else {

//             qisastr.push(word);

//         }
//     }
//     return qisastr.join(" "); 
// }

// console.log(say());  


// ARRAY METHODS

// task1


function say() {

}








// task2

// function yoxla(soz) {
//     let ters = soz.split('').reverse().join('');
//     if (soz == ters) {
//         return "polindromdur"
//     }else{
//         return "polindrom deyil"
//     }
//   }
//   console.log(yoxla("ana"));      
//   console.log(yoxla("salam"));     
//   console.log(yoxla("level")); 






// task3

let arr = [1, 3, 4, 3, 5, 6, 12]

// function say(eded) {
// kicik = 0
// for (let i = 0; i< arr.length; i++) {
// if (arr[i] > eded) {
//     kicik ++
// }

// }return kicik
// }
// console.log(say(4));





// task4

// const customers = [
//     {
//         name: "Tyrone",
//         personal: {
//             age: 33,
//             hobbies: ["Bicycling", "Camping"],
//         },
//     },
//     {
//         name: "Elizabeth",
//         personal: {
//             age: 25,
//             hobbies: ["Guitar", "Reading", "Gardening"],
//         },
//     },
//     {
//         name: "Penny",
//         personal: {
//             age: 36,
//             hobbies: ["Comics", "Chess", "Legos"],
//         },
//     },
// ];

// function say(customers) {
//     customers.reduce((accumulator, customer) => {
//       console.log(customer.name + " hobbies: " + customer.personal.hobbies.join(', '));
//       return accumulator;
//     }, []);
//   }

//   say(customers);





// takss5

// function say() {
//     const randomarr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);
//     console.log(randomarr);
    
//     console.log(Math.max(...randomarr));

//     console.log(Math.min(...randomarr));
    
//     let sum = randomarr.reduce((s,d) => s +d ,0)
//     console.log(sum/randomarr.length);
    
//     console.log(sum);

//     let kvadrat = randomarr.map(eded => eded * eded)
//     console.log(kvadrat);
    
// }
// console.log(say())

