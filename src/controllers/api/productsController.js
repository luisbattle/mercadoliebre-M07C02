const { Product, Sequelize } = require("../../database/models");
const Op = Sequelize.Op;

const productsController = {
  latest: (req, res) => {
    const ultimos = Product.findAll({
      order: [["createdAt", "DESC"]],
      limit: 8,
    }).then((products) => {
      res.status(200).send({
        meta: {
          status: 200,
          count: products.length,
          url: "/api/products/latest",
        },
        data: products,
      });
    });
  },

  offers: (req, res) => {
    const inSale = Product.findAll({
      where: {
        discount: {
          [Op.gt]: 0,
        },
      },
      limit: 8,
    }).then((products) => {
      res.status(200).send({
        meta: {
          status: 200,
          count: products.length,
          url: "/api/products/offers",
        },
        data: products,
      });
    });
  },
};

module.exports = productsController;
