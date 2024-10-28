// Example array of products
const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$19.99",
    description: "Description for product 1.",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$29.99",
    description: "Description for product 2.",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$29.99",
    description: "Description for product 2.",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  },
  // Add more products as needed
];

// Function to generate product elements
function generateProductElements() {
  const productContainer = document.querySelector("main section ul");

  products.forEach((product) => {
    const productElement = document.createElement("li");

    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product--image" />
      <h1>${product.name}</h1>
      <p class="product--description">${product.description}</p>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    `;

    productContainer.appendChild(productElement);
  });
}

// Call the function to generate product elements when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", generateProductElements);
