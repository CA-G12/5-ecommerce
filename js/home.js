btnSignOut.addEventListener("click", signOut);

if (isAdmin != "true") {
  btnAddProduct.children[0].setAttribute("class", "fa fa-shopping-cart");
  btnAddProduct.setAttribute("href", "./cart.html");
}
function signOut() {
  location.replace("./index.html");
}
