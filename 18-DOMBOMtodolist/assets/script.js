
let input1 = document.querySelector('.inp1');
let input2 = document.querySelector('.inp2');

let result = document.querySelector('.result');

let sumButton = document.querySelector('.sum');
let cixButton = document.querySelector('.cix');
let vurButton = document.querySelector('.vur');
let bolButton = document.querySelector('.bol');

sumButton.addEventListener('click', () => {
    result.value = Number(input1.value) + Number(input2.value);
});

cixButton.addEventListener('click', () => {
    result.value = Number(input1.value) - Number(input2.value);
});

vurButton.addEventListener('click', () => {
    result.value = Number(input1.value) * Number(input2.value);
});

bolButton.addEventListener('click', () => {
    if (Number(input2.value) !== 0) {
        result.value = Number(input1.value) / Number(input2.value);
    } else {
        result.value = "0-a bolme yoxdur:)";
    }
});











// task22222222222222222222222222222222222222222


// let input = document.querySelector("#inp")
// let btn = document.querySelector(".btn")
// let list_item = document.querySelector('.list-item')

// let sira = 1

// btn.addEventListener("click", () => {

//     let list = document.createElement("ul")
//     list.classList.add("list")

//     let elem = document.createElement("li")
//     elem.classList.add("list-elem")
//     elem.textContent = `${sira}. ${input.value}`
//     elem.dataset.num = sira
//     input.value = ""
//     sira++
//     elem.style.color = "red"

//     let icons = document.createElement("div")
//     icons.classList.add("icons")

//     let idel = document.createElement("i")

//     idel.classList.add("fa-solid", "fa-trash")
//     idel.addEventListener("click", () => {
//         list.remove()
//     })


//     let iedit = document.createElement("i")

//     iedit.classList.add("fa-solid", "fa-pen-to-square")
//     iedit.addEventListener("click", () => {
//         let newText = prompt("Yeni mətn daxil edin:", elem.textContent);
//         if (newText) {
//             elem.textContent = `${elem.dataset.num}. ${newText}`;
//         }
//     })
//     let xett = document.createElement("button")
//     xett.classList.add("btn_xett")
//     xett.style.backgroundColor = "gray";
//     xett.style.color = "white";
//     xett.style.border = "none";
//     xett.style.borderRadius = "5px";
//     xett.style.cursor = "pointer";

//     xett.textContent = "Xətt Çək"

//     xett.addEventListener("click", () => {
//         if (elem.style.textDecoration === "line-through") {
//             elem.style.textDecoration = "";
//     elem.style.color = "red"

//         } else {
//             elem.style.textDecoration = "line-through";
//     elem.style.color = "green"

//         }
//     })

//     icons.append(idel, iedit , xett)
//     list.append(elem, icons)
//     list_item.append(list)
// })



// let deleteall = document.querySelector(".deleteall")

// deleteall.addEventListener("click", () => {
//     list_item.innerHTML = ""
//     sira = 1
// })
