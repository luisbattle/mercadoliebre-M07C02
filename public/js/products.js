console.log("test");
//get products -> latest
axios
  .get("/api/products/latest")
  .then((products) => {
    if (products["data"]["data"].length > 0) {
      products["data"]["data"].forEach((product) => {
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
      productTag.innerHTML = `<div class="col-12" id="no-products">
      <h2 class="noproducts">Aun no se encontraron productos</h2></div>`;
    }
  })
  .catch((err) => {
    console.log(err);
  });

//get products -> offers
axios
  .get("/api/products/offers")
  .then((offers) => {
    //console.log(products["data"]["data"]);

    if (offers["data"]["data"].length > 0) {
      offers["data"]["data"].forEach((offers) => {
        console.log(offers);
        offers = `<div class="col-12 col-sm-6 col-lg-3">
            <section class="product-box">
              <a href="/products/detail/${offers.id} ">
                <figure class="product-box_image">
                  <img src="/images/products/${offers.image}" alt="${
          offers.name
        }">
                </figure>
                <article class="product-box_data">
                  <h2>$ ${
                    offers.price - offers.price * (offers.discount / 100)
                  }</h2>
                  <span> ${offers.discount} % OFF</span>
                  <p>${offers.name}</p>
                  <i class="fas fa-truck"></i>
                </article>
              </a>
            </section>
          </div>`;
        productTag = document.getElementById("offers-products");
        productTag.innerHTML += offers;
      });
    } else {
      productTag = document.getElementById("offers-products");
      productTag.innerHTML = `<div class="col-12" id="no-products">
      <h2 class="noproducts">Aun no se encontraron productos</h2></div>`;
    }
  })
  .catch((err) => {
    console.log(err);
  });
