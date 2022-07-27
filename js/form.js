const addButton=document.querySelector('#add_btn')

let i = 0;
var selectedProductId = sessionStorage.getItem("productID");
if (selectedProductId !== "null") {
  add_btn.textContent = "EDIT";
  window.localStorage.getItem("ArrayOfProducts");
  let selectedProduct = staticProducts.filter((e) => {
    console.log(
      "selectedProductId == e.id => ",
      e.id,
      Number(selectedProductId),
      e.id === selectedProductId
    );
    return e.id == selectedProductId;
  })[0];
  names.setAttribute("placeholder", selectedProduct.name);
  price.setAttribute("placeholder", selectedProduct.price);
  img_url.setAttribute("placeholder", selectedProduct.img_url);
  category.setAttribute("placeholder", selectedProduct.category);
  description.setAttribute("placeholder", selectedProduct.description);
}
btnCancel.addEventListener("click", cancelOperation);
add_btn.addEventListener("click", (e) => {
  console.log(names.value);
  let products = {
    id: staticProducts.length,
    name: names.value,
    description: description.value,
    price: price.value,
    img_url: img_url.value,
    category: category.value,
  };
  console.log(products);
  staticProducts.push(products);
  window.localStorage.setItem(
    "ArrayOfProducts",
    JSON.stringify(staticProducts)
  );
  names.value = "";
  description.value = "";
  price.value = "";
  img_url.value = "";
  category.value = "";
  sessionStorage.setItem("productID", null);
});

function cancelOperation() {
  sessionStorage.setItem("productID", null);
}
