console.log("test");

axios
  .get("/api/products/latest")
  .then((products) => {
    //console.log(products["data"]["data"]);

    if (products["data"]["data"].length > 0) {
      products["data"]["data"].forEach((product) => {
        console.log(product);
        products = `<div class="col-12 col-sm-6 col-lg-3" >
    <section class="product-box">
          <a href="/products/detail/${product.id}">
              <figure class="product-box_image">
                  <img src="/images/products/${
                    product.image
                  }" alt="{product.name}">
              </figure>
              <article class="product-box_data">
                  <h2>$ ${
                    product.price - (product.price * product.discount) / 100
                  }
                  </h2>
                  <p>${product.name}</p>
                  <i class="fas fa-truck"></i>
              </article>
          </a>
      </section>
      </div>`;
        productTag = document.getElementById("latest-products");
        productTag.innerHTML += products;
      });
    } else {
      productTag = document.getElementById("latest-products");
      productTag.innerHTML = `<div class="col-12" id="no-products" class="no-products-not-show">
      <h2 class="noproducts" class="no-products-not-show">Aun no se encontraron productos</h2></div>`;
    }
  })
  .catch((err) => {
    console.log(err);
    //show error on page
  });
