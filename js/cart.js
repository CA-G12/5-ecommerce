const getLocalStorage = localStorage.getItem('cart')
console.log(Array.isArray(getLocalStorage))
let cartConvert = JSON.parse(getLocalStorage)
console.log(cartConvert, 88888888)
const container = document.querySelector(".cards-section")
const price = document.querySelector(".price")
let sum = 0
const removeItem = (e) => {
    console.log("testtttttttttttttttttttttttttt");
    const cardId = e.target.parentNode.id;
    console.log(cardId)
    const filtaring = cartConvert.filter((ele) => {
        return ele.id != cardId;
    })
    // localStorage.removeItem(filtaring)

    console.log(filtaring)
    cartConvert = filtaring;
    console.log(cartConvert, 55)
    localStorage.setItem("cart", JSON.stringify(cartConvert))
    location.reload()

}
function cardss() {

    cartConvert.forEach((ele) => {
        const shownProducts = document.createElement('div');
        shownProducts.setAttribute('class', 'card-container')
        shownProducts.setAttribute('id', ele.id)
        container.appendChild(shownProducts);

        const delIcon = document.createElement('i');
        delIcon.setAttribute('class', 'fa fa-trash-o')
        delIcon.setAttribute('id', 'delIcon')
        delIcon.setAttribute('aria-hidden', 'true')
        shownProducts.appendChild(delIcon);
        delIcon.addEventListener('click',removeItem)

        const image = document.createElement('img');
        image.setAttribute('id', 'img-product');
        image.setAttribute('src', `${ele.img_url}`);
        shownProducts.appendChild(image);

        const headLine = document.createElement('h3');
        headLine.textContent = ele.name;
        shownProducts.appendChild(headLine);

        const description = document.createElement('p');
        description.setAttribute('id', 'description-product');
        description.textContent = ele.description;
        shownProducts.appendChild(description);

        const footer = document.createElement('div')
        footer.setAttribute('id', 'card-product-footer')
        shownProducts.appendChild(footer);

        const footerLine = document.createElement('h2');
        footerLine.setAttribute('id', 'price')
        footerLine.textContent = ele.price;
        footer.appendChild(footerLine);

        const controlProduct = document.createElement('div')
        controlProduct.setAttribute('id', 'control-product')
        footer.appendChild(controlProduct);

        const removeBtn = document.createElement('button');
        removeBtn.textContent = '-'
        removeBtn.setAttribute('id', 'btn-remove-product')
        removeBtn.setAttribute('class', 'btn')
        controlProduct.appendChild(removeBtn);

        const quantity = document.createElement('h3');
        quantity.setAttribute('id', 'quantity-product')
        quantity.textContent = ele.quantity;
        controlProduct.appendChild(quantity);

        const addBtn = document.createElement('button')
        addBtn.setAttribute('id', 'btn-add-product')
        addBtn.setAttribute('class', 'btn')
        addBtn.textContent = '+'
        controlProduct.appendChild(addBtn);
        // addBtn.addEventListener('click',addToCart)
        sum += ele.price * ele.quantity
        console.log(sum)
        price.textContent = sum
    })
}
cardss();



// delIcon.addEventListener('click', removeItem)
const buyButton = document.querySelector(".button-buy")
const clear = () => {
    console.log("clear")
    localStorage.clear()
    location.reload()
    // cardss()
}
buyButton.addEventListener("click", clear)