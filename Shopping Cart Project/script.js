document.addEventListener("DOMContentLoaded", function () {
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const CartTotalMessage = document.getElementById("cart-total");
  const totalPrice = document.getElementById("total-price");
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
      emptyCartMessage.innerHTML = "";
      const productId = parseInt(e.target.dataset.id);
      const products = product.find((p) => p.id === productId);
      cart.push(product);
      console.log(cart);
    }
  });
});
