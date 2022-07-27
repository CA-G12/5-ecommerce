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

const itemContainer = document.querySelector('#items-container');

const staticProducts = [
    {
        id: Math.random(),
        name: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 20,
        img_url:"https://www.transparentpng.com/thumb/shirt/jcsIrn-long-sleeved-t-shirt-collar-png.png",
        category: 'Clothes',
        quantity : 0,
    },
    {
        id: Math.random(),
        name: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 20,
        img_url:"https://www.transparentpng.com/thumb/shirt/oYBUkZ-white-t-shirt-clipart-hd.png",
        category: 'Clothes',
        quantity : 0,
    },
    {
        id: Math.random(),
        name: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 20,
        img_url:"https://www.transparentpng.com/thumb/shirt/7A1cP2-dress-clothin-long-t-shirt-suit-fashion-background.png",
        category: 'Clothes',
        quantity : 0,
    },
    {
        id: Math.random(),
        name: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 20,
        img_url:"https://www.transparentpng.com/thumb/t-shirt/JcvzGC-orange-t-shirt-image.png",
        category: 'Clothes',
        quantity : 0,
    },
    {
        id: Math.random(),
        name: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 20,
        img_url:"https://www.transparentpng.com/thumb/blazer/sport-top-coat-blazer-clothing-coat-dress-fashion-style-suit-photo-19.png",
        category: 'Clothes',
        quantity : 0,
    },
    {
        id: Math.random(),
        name: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 20,
        img_url:"https://www.transparentpng.com/thumb/blazer/adidas-coat-vest-cowl-suit-coat-images-25.png",
        category: 'Clothes',
        quantity : 0,
    },
]
function renderStaticProducts(){

    staticProducts.forEach((ele)=>{
        const shownProducts  = document.createElement('div');
        shownProducts.setAttribute('class','card-container')
        shownProducts.setAttribute('id',ele.id)
        itemContainer.appendChild(shownProducts);

        const image  = document.createElement('img');
        image.setAttribute('id','img-product');
        image.setAttribute('src',`${ele.img_url}`);
        shownProducts.appendChild(image);

        const headLine  = document.createElement('h3');
        headLine.textContent = ele.name;
        shownProducts.appendChild(headLine);

        const description  = document.createElement('p');
        description.setAttribute('id','description-product');
        description.textContent = ele.description;
        shownProducts.appendChild(description);

        const footer = document.createElement('div')
        footer.setAttribute('id','card-product-footer')
        shownProducts.appendChild(footer);

        const footerLine  = document.createElement('h2');
        footerLine.setAttribute('id','price')
        footerLine.textContent = ele.price;
        footer.appendChild(footerLine);

        const controlProduct = document.createElement('div')
        controlProduct.setAttribute('id','control-product')
        footer.appendChild(controlProduct);

        const removeBtn = document.createElement('button');
        removeBtn.textContent = '-'
        removeBtn.setAttribute('id','btn-remove-product')
        removeBtn.setAttribute('class','btn')
        controlProduct.appendChild(removeBtn);

        const quantity  = document.createElement('h3');
        quantity.setAttribute('id','quantity-product')
        quantity.textContent = ele.quantity;
        controlProduct.appendChild(quantity);

        const addBtn = document.createElement('button')
        addBtn.setAttribute('id','btn-add-product')
        addBtn.setAttribute('class','btn')
        addBtn.textContent = '+'
        controlProduct.appendChild(addBtn);
        addBtn.addEventListener('click',addToCart)
        
                const addBtnToLocal = document.createElement('button')
                addBtnToLocal.setAttribute('id','btn-add-product')
                addBtnToLocal.setAttribute('class','btn')
                addBtnToLocal.textContent = 'add'
                controlProduct.appendChild(addBtnToLocal);
                addBtnToLocal.addEventListener('click',addToLocal)
    })
}
renderStaticProducts();