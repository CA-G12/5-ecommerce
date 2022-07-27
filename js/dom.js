// DOM Index Page 
const btnGoAsAdmin = document.getElementById("btnAdmin")
const btnGoAsCustomer = document.getElementById("btnBuyer")
const btnSignOut = document.getElementById("btnSignOut")

// DOM Form
const names = document.querySelector('#name');
const price = document.querySelector('#price');
const img_url = document.querySelector('#img_url');
const category = document.querySelector('#category');
const description = document.querySelector('#description');
const add_btn = document.querySelector('#add_btn');

// DOM Home Page
// const btnAddToCart = document.getElementById('btn-add-product');
// const RemoveFromCart = document.getElementById('btn-remove-product');
// const quantity = document.getElementById('quantity-product');
const cartFetch = localStorage.getItem('cart');
const carr= JSON.parse(cartFetch);
console.log(carr);
function renderProduct() {
    const div = document.createElement('div');
    div.setAttribute('id','items-container');
    div.innerHTML =`
    <div class="card-container">
    <img
        id="img-product"
        src=''
        alt="product Image"
    />
    <h3 style="margin-top:10px;">Product</h3>
    <p id="description-product">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <div id="card-product-footer">
        <h2 id="price">50$</h2>
        <div id="control-product">
        <button id="btn-remove-product" class="btn" type="button">  -
        </button>
        <h3 id="quantity-product">0</h3>
        <button id="btn-add-product" class="btn" type="button">+</button>
        </div>
    </div>
    `
}