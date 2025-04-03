


// task2


// let num = [14, 20, 35, 40, 57, 60, 100]

// function say() {
//     let cut =  ""
//     let tek =   ""       

//     for (let i = 0; i < num.length; i++) {

//         if (num[i] % 2 == 0) {
// console.log(num[i]);
//         }
//         else if (num[i] % 2 == 1){
//         }
//     }

    
// }
// say()




// taks3

// function say() {

//     for (let i = 0; i < num.length; i++) {
//         if (num[i] % 4 == 0 && num[i] % 5 == 0) {
//             console.log(num[i]);
                    
//                 }
        
//     }
    
// }
// say()




// task4

// const cumle = "Salam af-108 , Salam Seid mlm!";
// const simvol = "a";

// function say() {
//     let nece = 0
//     for (let i = 0; i < cumle.length; i++) {
//         if (cumle[i] == simvol) {
//             nece ++
//         }
//     }
//     console.log(nece);
    
// }
// say()





// task5

// let eded = Number(prompt("Eded daxil edin"))
// function say() {
//     let cem = 0
//     for (let i = 1; i < eded; i++) {
        
//     if (eded % i === 0) {
//         cem += i
//     } 
// }
// if (cem < eded) {
//     console.log("Deficient");
// }
// if (cem > eded) {
//     console.log(cem);
// }
    
// }
// say()




// task6

// let arr = [1,3,4]
// let nums =[]
// function say() {
//     for (let i = 0; i < arr.length; i++ ) {
//         nums[i] = arr[i] ** 2
        
//     }
//     console.log(nums);
    
// }
// say()





// task7

let people = [
    { name: 'Eli', age: 22 },
    { name: 'Veli', age: 31 },
    { name: 'Deli', age: 23 },
    { name: 'Elli', age: 41 }
];
function sub(max , min) {
    return max - min
    
}

function say() {
    let minage = people[0].age
    let maxage = people[0].age
 
    for (let i = 1; i < people.length; i++) {
        minage = Math.min(minage , people[i].age); 
        maxage = Math.max(maxage , people[i].age); 
    }
    let ferq = sub(maxage,minage)
console.log(minage);
console.log(maxage);
console.log(ferq);

}
say()



