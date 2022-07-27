let arrayOfProducts = []
let i = 0;
var selectedProductId = sessionStorage.getItem("productID");


const names = document.querySelector("#name");
const price = document.querySelector("#price");
const img_url = document.querySelector("#img_url");
const category = document.querySelector("#category");
const description = document.querySelector("#description");
const add_btn = document.querySelector("#add_btn");


if (selectedProductId) {
    window.localStorage.getItem("ArrayOfProducts");
    let selectedProduct = arrayOfProducts.filter(e => {
        return e.id == selectedProductId
    })[0]
    names.setAttribute("placeholder",selectedProduct.name)
    price.setAttribute("placeholder",selectedProduct.price)
    img_url.setAttribute("placeholder",selectedProduct.img_url)
    category.setAttribute("placeholder",selectedProduct.category)
    description.setAttribute("placeholder",selectedProduct.description)
}

add_btn.addEventListener("click", (e) => {
  console.log(names.value);
  let products = {
    id: Date.now(),
    name: names.value,
    description: description.value,
    price: price.value,
    img_url: img_url.value,
    category: category.value,
  };
  arrayOfProducts.push(products);
  window.localStorage.setItem(
    "ArrayOfProducts",
    JSON.stringify(arrayOfProducts)
  );
});
