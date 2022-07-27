btnSignOut.addEventListener("click", signOut);

if (isAdmin != "true") {
  btnAddProduct.children[0].setAttribute("class", "fa fa-shopping-cart");
  btnAddProduct.setAttribute("href", "./cart.html");
}
function signOut() {
  location.replace("./index.html");
}


const CarLocal = localStorage.getItem('cart')
const carConvert = JSON.parse(CarLocal)
let Cart = carConvert || [];

localStorage.setItem("cart", JSON.stringify(Cart));
const getProductById = (ele, id) => {
  const filterEle = ele.filter((e) => {
    return e.id == id
  })
  return filterEle
}
function addToCart(e) {
  const productId = e.target.parentNode.parentNode.parentNode.id
  const car = getProductById(staticProducts, productId)
  car[0].quantity = Number(car[0].quantity) + 1;
  car[0].quantity = `${car[0].quantity++}`;
  // console.log(car[0])
  // console.log(staticProducts,55555)
  const itemContainer = document.querySelector('#items-container');
  itemContainer.textContent = ""
  renderStaticProducts()

  // const 
}
const addToLocal = (e) => {
  const productId = e.target.parentNode.parentNode.parentNode.id

  const car = getProductById(staticProducts, productId)
  Cart.push(car[0])
  console.log(carConvert, 58585)
  localStorage.setItem("cart", JSON.stringify(Cart))

}
