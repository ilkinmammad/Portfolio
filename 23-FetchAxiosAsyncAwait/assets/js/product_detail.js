document.addEventListener("DOMContentLoaded", async () => {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let currentUser = users.find((user) => user.isLogined === true);
  let basket = currentUser?.basket || [];
  
  let URL = new URLSearchParams(location.search);
  let productId = URL.get("id");

  try {
    let response = await axios.get(`http://localhost:3001/products/${productId}`);
    let findProduct = response.data;

    let productContainer = document.querySelector(".product-container");

    productContainer.innerHTML = `
      <div class="product-image">
        <img class="img" src="${findProduct.image}" alt="" />
      </div>
      <div class="product-details">
        <h1 class="product-title">${findProduct.title}</h1>
        <p class="product-category">Category: ${findProduct.category}</p>
        <p class="product-price">$${findProduct.price.toFixed(2)}</p>
        <p class="product-description">${findProduct.description}</p>
        <div class="quantity-selector">
          <button class="btn-minus">-</button>
          <input type="number" value="1" min="1" />
          <button class="btn-plus">+</button>
        </div>
        <button class="btn btn-danger add-to-cart-btn">Add to Cart</button>
      </div>`;

    let btnMinus = document.querySelector(".btn-minus");
    let btnPlus = document.querySelector(".btn-plus");
    let quantityInput = document.querySelector(".quantity-selector input");
    let addToCartBtn = document.querySelector(".add-to-cart-btn");

    btnMinus.addEventListener("click", () => {
      let currentValue = parseInt(quantityInput.value);
      if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
      }
    });

    btnPlus.addEventListener("click", () => {
      let currentValue = parseInt(quantityInput.value);
      quantityInput.value = currentValue + 1;
    });

    addToCartBtn.addEventListener("click", () => {
      let quantity = parseInt(quantityInput.value);
      let totalPrice = quantity * findProduct.price;

      let existingProduct = basket.find((item) => item.id === findProduct.id);
      if (existingProduct) {
        existingProduct.count += quantity;
        existingProduct.totalPrice += totalPrice;
      } else {
        basket.push({
          id: findProduct.id,
          title: findProduct.title,
          image: findProduct.image,
          price: findProduct.price,
          count: quantity,
          totalPrice: totalPrice,
          category: findProduct.category,
        });
      }

      currentUser.basket = basket;
      let userIndex = users.findIndex((user) => user.id === currentUser.id);
      if (userIndex !== -1) {
        users[userIndex] = currentUser;
      }
      localStorage.setItem("users", JSON.stringify(users));

      window.location.href = "basket.html";
    });

    toasts("Product added to cart!");

  } catch (error) {
    console.error("Məhsul məlumatlari alinarkən xəta baş verdi:", error);
  }
});

function toasts(text) {
  Toastify({
    text: text,
    duration: 2000,
    gravity: "top",
    position: "right",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
}
