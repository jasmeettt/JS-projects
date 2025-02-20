document.addEventListener("DOMContentLoaded", function () {
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const CartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  const product = [
    { id: 1, name: "Product 1", price: 12.99 },
    { id: 2, name: "Product 2", price: 34.99 },
    { id: 3, name: "Product 3", price: 59.99 },
  ];

  const cart = [];

  product.forEach((productItem) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>${productItem.name} - ${productItem.price.toFixed(2)}</span>
    <button data-id = "${productItem.id}">Add Cart</button>
    `;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.dataset.id);
      const products = product.find((p) => p.id === productId);
      cart.push(products);
      renderCart();
    }
  });
  function renderCart() {
    cartItems.innerHTML = "";
    let totalPrice = 0;

    if (cart.length > 0) {
      emptyCartMessage.classList.add("hidden");
      CartTotalMessage.classList.remove("hidden");

      cart.forEach((item) => {
        totalPrice += item.price;
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
        <span>${item.name} - ${item.price.toFixed(2)}</span>
        <button data-id="${item.id}">Remove</button>
        `;
        cartItems.appendChild(cartItem);
        totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
      });
    } else {
      emptyCartMessage.classList.remove("hidden");
      totalPriceDisplay.textContent = `0.00`;
    }
  }

  cartItems.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.dataset.id);
      const index = cart.findIndex((item) => item.id === productId);
      console.log(index);

      if (index !== -1) {
        cart.splice(index, 1);
      }
      renderCart();
    }
  });

  checkoutBtn.addEventListener("click", () => {
    cart.length = 0;
    alert(`Checkout Successful, your total is: ${totalPriceDisplay.innerHTML}`);
    renderCart();
    CartTotalMessage.classList.add("hidden");
  });
});
