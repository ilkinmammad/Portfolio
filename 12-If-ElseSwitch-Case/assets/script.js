const dizel = 0.9;
const benzin = 1;
const premium = 1.5;

let text = "1-dizel\n 2-benzin\n 3-premium";

let operation = Number(prompt(text));

let litr, budce; 

if (operation !== 1 && operation !== 2 && operation !== 3) {
    alert('Yanlış seçim etdiniz!');
} else {
    litr = Number(prompt("Neçə litr alacaqsınız?"));
    budce = Number(prompt("Mövcud pulunuz nə qədərdir?"));
}

let qiymet;

switch (operation) {
    case 1:
        qiymet = dizel;
        break;
    case 2:
        qiymet = benzin;
        break;
    case 3:
        qiymet = premium;
        break;
    default:
        break;
}

let odenis = qiymet * litr;

if (budce >= odenis) {
    let qalan = budce - odenis;
    alert(`Benzin yükləndi: ${litr} Litr\nQalan pulunuz: ${qalan} AZN`);
} else {
    let catmayan = odenis - budce;
    alert(`Ümumi: ${odenis} AZN\nSizin balansınız: ${budce} AZN\nÇatmayan: ${catmayan} AZN`);
}



// task 1


// let text = " yaz yay payiz qis\n Fesil daxil edin"
// let operation = prompt(text)

// switch (operation) {
//     case "yaz":
//         alert('Mart , Aprel , May ')
//         break;
//     case "yay":
//         alert('Iyun , Iyul , Avqust ')
//         break;
//     case "payiz":
//         alert('Sentyabr  , Oktyabr  , Noyabr  ')
//         break;
//     case "qis":
//         alert('Dekabr  , Yanvar  , Fevral  ')
//         break;
//     default:
//         break;
// }

// // task 2

