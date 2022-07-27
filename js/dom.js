const btnGoAsAdmin = document.getElementById("btnAdmin")
const btnGoAsCustomer = document.getElementById("btnBuyer")
const btnSignOut = document.getElementById("btnSignOut")

let names = document.querySelector('#name');
let price = document.querySelector('#price');
let img_url = document.querySelector('#img_url');
let category = document.querySelector('#category');
let description = document.querySelector('#description');
let add_btn = document.querySelector('#add_btn');

let arrayOfProducts = []
let i = 0;
add_btn.addEventListener('click', (e) => {
    console.log(names.value);
    let products = {
        id: Date.now(),
        name: names.value,
        description: description.value,
        price: price.value,
        img_url: img_url.value,
        category: category.value,
    }
    arrayOfProducts.push(products);
    window.localStorage.setItem(`${products.name}`, JSON.stringify(products));
    i++;

});
