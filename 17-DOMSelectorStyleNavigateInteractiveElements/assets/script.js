// task1.1


// let icon = document.querySelector(".heart")
// let i = document.querySelector(".fa-regular fa-heart")
// let img = document.querySelector("img")
// let cardContent = document.querySelector(".cardContent")
// let title = document.querySelector(".cardTitle")
// let text = document.querySelector(".cardText")
// let price = document.querySelector(".cardPrice")
// let btn = document.querySelector(".shopBtn")

// let object = {
//     icon,
//     i,
//     img,
//     cardContent,
//     title,
//     text,
//     price,
//     btn
// }
// console.log(object);



// let icon = document.querySelector(".heart")

// let card = icon.closest(".card")

// let imgdiv = document.querySelector(".image")
// let i = document.querySelector(".fa-regular fa-heart")
// let img = document.querySelector("img")
// let cardContent = document.querySelector(".cardContent")
// let title = document.querySelector(".cardTitle")
// let text = document.querySelector(".cardText")
// let price = document.querySelector(".cardPrice")
// let btn = document.querySelector(".shopBtn")

// let object = {
//     card,
//     i,
//     img,
//     cardContent,
//     title,
//     text,
//     price,
//     btn
// }
// console.log(object);





// task1.2


// let card = document.querySelector(".card")
// let icon = document.querySelector(".heart")
// let i = document.querySelector(".fa-regular fa-heart")
// let img = document.querySelector("img")
// let cardContent = document.querySelector(".cardContent")
// let title = document.querySelector(".cardTitle")
// let text = document.querySelector(".cardText")
// let price = document.querySelector(".cardPrice")
// let btn = document.querySelector(".shopBtn")

// let object = {
//     card,
//     icon,
//     i,
//     img,
//     cardContent,
//     title,
//     text,
//     price,
//     btn
// }

// card.style.margin = "50px";
// card.style.width = "300px";
// card.style.border = "1px solid black";
// card.style.padding = "10px";

// icon.style.display = "inline-flex";
// icon.style.alignItems = "center";
// icon.style.justifyContent = "center";
// icon.style.width = "30px";
// icon.style.height = "30px";
// icon.style.borderRadius = "50%";
// icon.style.backgroundColor = "silver";
// icon.style.position = "absolute";
// icon.style.top = "15px";
// icon.style.right = "15px";
// icon.style.cursor = "pointer";

// img.style.width = "100%";
// img.style.height = "100%";
// img.style.borderRadius = "10px";

// cardContent.style.display = "flex";
// cardContent.style.flexDirection = "column";
// cardContent.style.alignItems = "center";
// cardContent.style.gap = "10px";
// cardContent.style.marginTop = "20px";
// cardContent.style.color = "burlywood";

// price.style.display = "inline-block";
// price.style.padding = "5px";
// price.style.borderRadius = "5px";
// price.style.backgroundColor = "rgb(95, 94, 91)";


// btn.style.width = "100%";
// btn.style.padding = "10px";
// btn.style.backgroundColor = "skyblue";
// btn.style.border = "none";
// btn.style.cursor = "pointer";
// btn.style.color = "white";
// btn.style.textTransform = "uppercase";
// btn.style.borderRadius = "5px";
// btn.style.fontWeight = "bold";

// console.log(object);


// task1.3

// let i = document.querySelector(".fa-regular fa-heart")
// let img = document.querySelector("img")
// let cardContent = document.querySelector(".cardContent")
// let title = document.querySelector(".cardTitle").textContent = "Yeni title";
// let text = document.querySelector(".cardText").textContent = "Yeni text";
// let price = document.querySelector(".cardPrice").textContent = "200 Azn";
// let btn = document.querySelector(".shopBtn").textContent = "Yeni Buton";


// let object = {
//         i,
//         img,
//         cardContent,
//         title,
//         text,
//         price,
//         btn
//     }
//     console.log(object);



// task2

document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.height = '100vh';

let card = document.createElement('div');
card.classList.add('card');

card.style.width = '300px';
card.style.backgroundColor = 'white';
card.style.borderRadius = '10px';
card.style.padding = '20px';


let imgDiv = document.createElement('div');
imgDiv.classList.add('img');
let img = document.createElement('img');
img.src = './assets/images/download.jpeg';
imgDiv.appendChild(img);  
card.appendChild(imgDiv);

let detached = document.createElement('div');
detached.textContent = 'DETACHED HOUSE • 5Y OLD';
card.appendChild(detached);

let price = document.createElement('div');
price.classList.add('price');
let strongPrice = document.createElement('strong');
strongPrice.textContent = '$750,000';
price.appendChild(strongPrice);
card.appendChild(price);

price.style.fontSize = '24px';


let address = document.createElement('div');
address.classList.add('address');
address.textContent = '742 Evergreen Terrace';
card.appendChild(address);

address.style.marginBottom = '15px';
address.style.paddingBottom = '15px';
address.style.borderBottom = '1px solid #eee';



let details = document.createElement('div');
details.classList.add('details');

details.style.display = 'flex';
details.style.justifyContent = 'space-between';
details.style.marginBottom = '20px';

let bedrooms = document.createElement('div');
bedrooms.classList.add('detail');
let bedroomValue = document.createElement('div');
bedroomValue.textContent = '3';
let bedroomText = document.createElement('div');
bedroomText.textContent = 'Bedrooms';
bedrooms.appendChild(bedroomValue);
bedrooms.appendChild(bedroomText);
details.appendChild(bedrooms);

let bathrooms = document.createElement('div');
bathrooms.classList.add('detail');
let bathroomValue = document.createElement('div');
bathroomValue.textContent = '2';
let bathroomText = document.createElement('div');
bathroomText.textContent = 'Bathrooms';
bathrooms.appendChild(bathroomValue);
bathrooms.appendChild(bathroomText);
details.appendChild(bathrooms);

card.appendChild(details);

let realtor = document.createElement('div');
realtor.classList.add('realtor');

let realtorText = document.createElement('div');
realtorText.classList.add('realtor-text');
realtorText.textContent = 'REALTOR';
realtor.appendChild(realtorText);

realtor.style.marginTop = '20px';
realtor.style.paddingTop = '15px';
realtor.style.borderTop = '1px solid #eee';


realtorText.style.fontSize = '12px';

let realtorName = document.createElement('div');
realtorName.classList.add('realtor-name');
realtorName.textContent = 'Tiffany Heffner';
realtor.appendChild(realtorName);

realtorName.style.fontWeight = 'bold';
realtorName.style.color = '#333';



let realtorPhone = document.createElement('div');
realtorPhone.classList.add('realtor-phone');
realtorPhone.textContent = '(555) 555-4321';
realtor.appendChild(realtorPhone);

realtorPhone.style.color = '#444';
realtorPhone.style.fontSize = '14px';


card.appendChild(realtor);

document.body.appendChild(card);
