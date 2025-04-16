
document.addEventListener("DOMContentLoaded", () => {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  

  let loginBtn = document.querySelector(".login");
  let registerBtn = document.querySelector(".register");
  let logoutBtn = document.querySelector(".logout");
  let usernameBtn = document.querySelector(".username");

  function getCurrentUser() {
    return users.find((user) => user.isLogined === true);
  }

   function updateUserStatus() {
    let currentUser = getCurrentUser();
    if (currentUser) {
      usernameBtn.textContent = currentUser.username;
      loginBtn.classList.add("d-none");
      registerBtn.classList.add("d-none");
      logoutBtn.classList.remove("d-none");
    } else {
      usernameBtn.textContent = "Username";
      loginBtn.classList.remove("d-none");
      registerBtn.classList.remove("d-none");
      logoutBtn.classList.add("d-none");
    }
  }

   function logout() {
    let currentUser = getCurrentUser();
    if (currentUser) {
      currentUser.isLogined = false;
      localStorage.setItem("users", JSON.stringify(users));
      updateUserStatus();
      updateWishlistIcons();
      toast("You have successfully logged out.");
      setTimeout(() => window.location.reload(), 1000);
    }
  }

  logoutBtn.addEventListener("click", logout);

   function updateWishlistIcons() {
    let heartIcons = document.querySelectorAll(".card-heart");
    heartIcons.forEach((icon) => {
      icon.classList.add("far");
      icon.classList.remove("fas");
    });
  }
  

   function promise () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(products && products.length > 0) {
          resolve(products);
        } else {
          reject("mehsullar tapilmadi");
        }

      }, 500);
    });
  }

  async function createUserCard() {
    let currentUser = getCurrentUser();
    const cardsContainer = document.querySelector(".cards");
    cardsContainer.innerHTML = "";
  
    try {
      const response = await fetch("http://localhost:3001/products");
      const products = await response.json(); // <-- JSON-serverdən gələn məhsullar
  
      products.forEach((product) => {
        let card = document.createElement("div");
        card.classList.add("card");
  
        card.addEventListener("click", () => {
          window.location.href = `product_detail.html?id=${product.id}`;
        });
  
        let image = document.createElement("div");
        image.classList.add("card-image");
        let img = document.createElement("img");
  
        let cardContent = document.createElement("div");
        cardContent.classList.add("card-content");
  
        let cardTitle = document.createElement("h2");
        cardTitle.classList.add("card-title");
  
        let category = document.createElement("h2");
        category.classList.add("card-category");
  
        let cardFooter = document.createElement("div");
        cardFooter.classList.add("card-footer");
  
        let price = document.createElement("span");
        price.classList.add("card-price");
  
        let rating = document.createElement("div");
        rating.classList.add("card-rating");
  
        let ratingStar = document.createElement("span");
        let count = document.createElement("span");
  
        let heart = document.createElement("i");
        heart.classList.add("far", "fa-heart", "card-heart");
  
        if (
          currentUser &&
          currentUser.wishlist.some((item) => item.id === product.id)
        ) {
          heart.classList.remove("far");
          heart.classList.add("fas");
        }
  
        heart.addEventListener("click", (e) => {
          e.stopPropagation();
          toggleAddWishList(product, heart);
        });
  
        let addToCart = document.createElement("button");
        addToCart.classList.add("btn", "btn-primary", "add-to-cart");
        addToCart.textContent = "Add Basket";
  
        addToCart.addEventListener("click", (e) => {
          e.stopPropagation();
          addBasket(product);
        });
  
        rating.append(ratingStar, count);
        cardFooter.append(price, rating);
        cardContent.append(cardTitle, category, cardFooter);
        image.append(img);
        card.append(heart, image, cardContent, addToCart);
        cardsContainer.append(card);
  
        img.src = product.image;
        cardTitle.textContent = product.title.slice(0, 20) + " ...";
        category.textContent = product.category;
        price.textContent = `$${product.price}`;
        ratingStar.textContent = product.rating.rate;
        count.textContent = product.rating.count;
      });
    } catch (error) {
      console.error("Məhsulları gətirərkən xəta baş verdi:", error);
    }
  } 
  

   function toggleAddWishList(productId, heartElement) {
    let currentUser = getCurrentUser();
    if (!currentUser) {
      toast("Please login");
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1000);
      return;
    }

    let userIndex = users.findIndex((user) => user.id === currentUser.id);

    if (currentUser.wishlist.some((item) => item.id === productId)) {
      let productIndex = currentUser.wishlist.findIndex(
        (product) => product.id === productId
      );
      currentUser.wishlist.splice(productIndex, 1);
      heartElement.classList.add("far");
      heartElement.classList.remove("fas");
      toast("Product removed from wishlist");
    } else {
      let product = products.find((product) => product.id === productId);
      currentUser.wishlist.push(product);
      heartElement.classList.remove("far");
      heartElement.classList.add("fas");
      toast("Product added to wishlist");
    }

    users[userIndex] = currentUser;
    localStorage.setItem("users", JSON.stringify(users));
  }

   function addBasket(productId) {
    let currentUser = getCurrentUser();
    if (!currentUser) {
      toast("Please login to add to basket");
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1000);
      return;
    }

    let userIndex = users.findIndex((user) => user.id === currentUser.id);
    if (userIndex === -1) {
      toast("User not found");
      return;
    }

    let basket = currentUser.basket || [];
    let existingProduct = basket.find((product) => product.id === productId);

    if (existingProduct) {
      existingProduct.count++;
    } else {
      let product = products.find((product) => product.id === productId);
      if (product) {
        basket.push({ ...product, count: 1 });
      }
    }
    toast("Product add basket");
    currentUser.basket = basket;
    users[userIndex] = currentUser;
    localStorage.setItem("users", JSON.stringify(users));
    updateBasketCount();
  }

   function updateBasketCount() {
    let currentUser = getCurrentUser();
    if (currentUser) {
      let basketElement = document.querySelector(".basketIcon sup");
      let basketCount = currentUser.basket.reduce(
        (acc, product) => acc + product.count,
        0
      );
      basketElement.textContent = basketCount;
    }
  }

   function toast(text) {
    Toastify({
      text: text,
      duration: 1000,
      gravity: "top",
      position: "right",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
    
  }
  updateUserStatus();
  createUserCard();
  updateBasketCount();
});