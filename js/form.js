const addButton=document.querySelector('#add_btn')

let arrayOfProducts = []
let i = 0;
if(addButton)
addButton.addEventListener('click', (e) => {
    console.log(names.value);
    let products = {
        id: Date.now(),
        name: names.value,
        description: description.value,
        price: price.value,
        img_url: img_url.value,
        category: category.value,
        quantity: 0
    }
    arrayOfProducts.push(products);
    window.localStorage.setItem('ArrayOfProducts', JSON.stringify(arrayOfProducts));
    
});
