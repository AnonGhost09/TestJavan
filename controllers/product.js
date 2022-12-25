const apiUser = require("../utils/apiProduct");

const getAll = async (req, res) => {
  try {
    const result = await apiUser.get();
    const productList = result.data.products.map((product) => {
      return {
        title: product.title,
        description: product.description,
        price: product.price,
      };
    });

    return res.status(200).json({
      status: "success",
      data: productList,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      status: "error",
      message: "Gagal menampilkan product",
    });
  }
};

const controller = {
  getAll,
};

module.exports = controller;
