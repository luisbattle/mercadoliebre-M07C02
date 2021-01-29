window.addEventListener("load", function () {
  console.log("test");

  //obtengo el tag
  button = document.getElementById("addToCart");

  button.addEventListener("click", function (e) {
    productId = document.getElementById("productId").value;
    quantity = document.getElementById("quantity").value;

    e.preventDefault();
    axios
      .post("/api/items/", {
        productId: productId,
        quantity: quantity,
        userId: 102,
      })
      .then(function (response) {
        console.log(response);
        window.location.href = "/users/cart";
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
