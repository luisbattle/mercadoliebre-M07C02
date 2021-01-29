const { cart, Product, Item } = require("../../database/models");
const { param } = require("../../routes/api/productsRouter");

const itemsControllers = {
  addItem: (req, res) => {
    console.log(req.body);

    // Busco el producto que voy a agregar como Item.
    Product.findByPk(req.body.productId, {
      include: ["user"],
    })
      .then((product) => {
        console.log("ENCONTRO EL PRODUCTO", product);
        // Saco el valor del producto, teniendo en cuenta el descuento.

        let price =
          Number(product.discount) > 0
            ? product.price - (product.price * product.discount) / 100
            : product.price;

        // Creo el Item de compra
        return Item.create({
          salePrice: price,
          quantity: req.body.quantity,
          subTotal: price * req.body.quantity,
          state: 1,
          userId: req.body.userId,
          sellerId: product.user.id,
          productId: product.id,
        });
      })
      .then((item) => {
        console.log("ENTRO AL CREATE", item);
        res.status(201).json({
          meta: {
            status: 201,
            message: "Product added to cart",
          },
          data: {
            item: {
              id: 126,
              salePrice: 4968,
              quantity: "1",
              subTotal: 4968,
              state: 1,
              userId: 102,
              sellerId: 101,
              productId: 221,
              updatedAt: "2020-10-01T19:36:24.590Z",
              createdAt: "2020-10-01T19:36:24.590Z",
            },
          },
        });
      })
      .catch((e) => {
        console.log("ERROR: ", e);
      });
  },
  removeItem: (req, res) => {
    //enviar delete a la DB
    console.log(req.body.itemId);

    Item.destroy({
      where: {
        id: req.body.itemId,
      },
    }).then((item) => {
      console.log(item);
      if (item) {
        res.status(200).json({
          meta: {
            status: 200,
            message: "Cart Item was deleted",
          },
          data: {
            item: {},
          },
        });
      } else {
        res.status(404).json({
          meta: {
            status: 404,
            message: "Cart Item to delete not found",
          },
          data: {
            item: {},
          },
        });
      }
    });
  },
};

module.exports = itemsControllers;
