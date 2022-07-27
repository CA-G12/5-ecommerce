btnSignOut.addEventListener("click", signOut);

function signOut() {
    location.replace("./index.html");
  }

// Add to Cart function
btnAddToCart.addEventListener("click", addToCart);

let Cart = [];
localStorage.setItem("cart", JSON.stringify(Cart));
let product = {
  id: Date.now(),
  name: "",
  description: "",
  price: 0,
  img_url: "",
  category: "",
  quantity:0,
}

function addToCart() {
  
  const cartFetch = localStorage.getItem('cart');
  const carr= JSON.parse(cartFetch)
  const car = carr.filter((ele)=>{
    return  ele.id === btnAddToCart.target.id;
  });
  product.quantity = Number(product.quantity ) + 1;
  console.log(btnAddToCart);
  Cart.push(product);
  quantity.textContent =`${product.quantity}`;
}
