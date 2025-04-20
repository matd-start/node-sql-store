import { getConnection, sql, queries } from "../database";

//obtener todos los productos
export const getProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllProdructs);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
  //console.log(result.recordset);
};
//insertar un nuevo producto
export const insertProduct = async (req, res) => {
  const { name, description, price } = req.body;
  let { quantity } = req.body;
  if (name == null || description == null || price == null) {
    return res
      .status(400)
      .json({ msg: "Bad Request por favor rellene todos los campos" });
  }
  try {
    if (quantity == null) quantity = 0;
    const pool = await getConnection();

    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("price", sql.Int, price)
      .input("quantity", sql.Int, quantity)
      .input("description", sql.Text, description)
      .query(queries.createNewProduct);
    res.json({ name, price, quantity, description });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
//obtener un producto por su id
export const getProductsById = async (req, res) => {
  const { id } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("Id", id)
    .query(queries.getProductById);
  //console.log(result);
  res.send(result.recordset[0]);
};

//borrar un producto
export const deleteProductById = async (req, res) => {
  const { id } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("Id", id)
    .query(queries.deleteProduct);
  //console.log(result);
  res.send(result);
};

//optener el total de productos
export const getTotalProducts = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query(queries.getTotalProducts);

  //console.log(result);
  res.json(result.recordset[0][""]);
};

export const updateProductById = async (req, res) => {
  const { name, description, price, quantity } = req.body;
  const { id } = req.params;
  if ((name == null || description == null, price == null, quantity == null)) {
    return res
      .status(400)
      .json({ msg: "Bad Request por favor rellene todos los campos" });
  }
  const pool = await getConnection();
  await pool
    .request()
    .input("name", sql.VarChar, name)
    .input("price", sql.Int, price)
    .input("quantity", sql.Int, quantity)
    .input("description", sql.Text, description)
    .input("id", sql.Int, id)
    .query(queries.updateProductById);

  res.json({ name, price, quantity, description });
};
