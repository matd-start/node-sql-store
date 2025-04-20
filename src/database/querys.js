
export const queries = {
    getAllProdructs: 'SELECT * FROM products',
    createNewProduct: 'INSERT INTO products(name, description, price, quantity) VALUES (@name, @description, @price, @quantity)',
    getProductById: 'SELECT * FROM products WHERE id = @id',
    deleteProduct: 'DELETE FROM [webstore].[dbo].[products] WHERE id = @id',
    getTotalProducts: 'SELECT COUNT(*) FROM products',
    updateProductById: 'UPDATE products SET name = @name, description = @description, price = @price, quantity = @quantity WHERE id = @id'

};