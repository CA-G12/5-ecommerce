// DOM Index Page
const btnGoAsAdmin = document.getElementById("btnAdmin");
const btnGoAsCustomer = document.getElementById("btnBuyer");
const btnSignOut = document.getElementById("btnSignOut");
const btnAddProduct = document.getElementById("btnAddProduct");
const btnEditProduct = document.getElementById("btnEdit");

// DOM Form
const names = document.querySelector("#name");
const price = document.querySelector("#price");
const img_url = document.querySelector("#img_url");
const category = document.querySelector("#category");
const description = document.querySelector("#description");
const add_btn = document.querySelector("#add_btn");

const itemContainer = document.querySelector("#items-container");
const staticProducts = [
  {
    id: Math.random(),
    name: "Product 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 20,
    img_url:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    category: "Clothes",
  },
  {
    id: Math.random(),
    name: "Product 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 20,
    img_url:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    category: "Clothes",
  },
  {
    id: Math.random(),
    name: "Product 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 20,
    img_url:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    category: "Clothes",
  },
  {
    id: Math.random(),
    name: "Product 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 20,
    img_url:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    category: "Clothes",
  },
  {
    id: Math.random(),
    name: "Product 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 20,
    img_url:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    category: "Clothes",
  },
  {
    id: Math.random(),
    name: "Product 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 20,
    img_url:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    category: "Clothes",
  },
];

function renderStaticProducts() {
  staticProducts.forEach((ele) => {
    const shownProducts = document.createElement("div");
    shownProducts.setAttribute("class", "card-container");
    shownProducts.setAttribute("id", ele.id);
    itemContainer.appendChild(shownProducts);

    const image = document.createElement("img");
    image.setAttribute("id", "img-product");
    image.setAttribute("src", `${ele.img_url}`);
    shownProducts.appendChild(image);

    const edit = document.createElement("i");
    edit.setAttribute("class", "btnEdit fa fa-pencil-square");
    edit.setAttribute("aria-hidden", "true");
    shownProducts.appendChild(edit);

    const headLine = document.createElement("h3");
    headLine.textContent = ele.name;
    shownProducts.appendChild(headLine);

    const description = document.createElement("p");
    description.setAttribute("id", "description-product");
    description.textContent = ele.description;
    shownProducts.appendChild(description);

    const footer = document.createElement("div");
    footer.setAttribute("id", "card-product-footer");
    shownProducts.appendChild(footer);

    const footerLine = document.createElement("h2");
    footerLine.setAttribute("id", "price");
    footerLine.textContent = ele.price;
    footer.appendChild(footerLine);

    const controlProduct = document.createElement("div");
    controlProduct.setAttribute("id", "control-product");
    footer.appendChild(controlProduct);

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "-";
    removeBtn.setAttribute("id", "btn-remove-product");
    removeBtn.setAttribute("class", "btn");
    controlProduct.appendChild(removeBtn);

    const quantity = document.createElement("h3");
    quantity.setAttribute("id", "quantity-product");
    quantity.textContent = "0";
    controlProduct.appendChild(quantity);

    const addBtn = document.createElement("button");
    addBtn.setAttribute("id", "btn-add-product");
    addBtn.setAttribute("class", "btn");
    addBtn.textContent = "+";
    controlProduct.appendChild(addBtn);

    edit.addEventListener("click", function editProduct(element) {
      sessionStorage.setItem("productID", element.target.parentElement.id);
      location.replace("./form-add.html");
    });
  });
}
renderStaticProducts();
