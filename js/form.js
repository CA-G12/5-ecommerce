
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
    window.localStorage.setItem('ArrayOfProducts', JSON.stringify(arrayOfProducts));
    
});
