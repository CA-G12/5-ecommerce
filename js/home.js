btnSignOut.addEventListener("click", signOut);
const isAdmin = localStorage.getItem("isAdmin");

console.log("isAdmin", isAdmin, typeof isAdmin, isAdmin == "true");

if (isAdmin == "true") {
  console.log("isAdmin", isAdmin);
  btnAddProduct.style.display = "block";
}
function signOut() {
  location.replace("./index.html");
}
