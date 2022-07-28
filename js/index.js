btnGoAsAdmin.addEventListener("click", signInAsAdmin);
btnGoAsCustomer.addEventListener("click", signInAsCustomer);


function signInAsAdmin() {
  localStorage.setItem("isAdmin", true);
  location.replace("./home-page.html");
}

function signInAsCustomer() {
  localStorage.setItem("isAdmin", false);
  location.replace("./home-page.html");
}
