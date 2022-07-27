const addButton=document.querySelector('#add_btn')

let i = 0;
if(addButton)
addButton.addEventListener('click', (e) => {
    console.log(names.value);
    e.preventDefault()
    let products = {
        id: Date.now(),
        name: names.value,
        description: description.value,
        price: price.value,
        img_url: img_url.value,
        category: category.value,
        quantity: 0
    }
    console.log(products)
    staticProducts.push(products);
    window.localStorage.setItem('ArrayOfProducts', JSON.stringify(staticProducts));
    names.value=""
    description.value=""
    price.value=""
    img_url.value=""
    category.value=""
});
