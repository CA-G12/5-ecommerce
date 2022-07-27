let products = {
    id: Date.now(),
    name: "",
    description: "",
    price: 0,
    img_url: "",
    category: ""
}
let i = 0;
add_btn.addEventListener('click', (e) => {
    console.log(names.value);
    products = {
        id: Date.now(),
        name: names.value,
        description: description.value,
        price: price.value,
        img_url: img_url.value,
        category: category.value,
    }
    window.localStorage.setItem(`${products.name}`, JSON.stringify(products));
    i++;

});
