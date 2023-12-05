const express = require('express');
const router = express.Router();
const { connectToOracleDB } = require('../dbs');

router.post('/save', async function (req, res, next) {
  try {
    
    const connection = await connectToOracleDB(); // Obtain the connection

    const { productId, productName, productPrice } = req.body;

    const query = `INSERT INTO TEST1 (PRODUCT_ID, PRODUCT_NAME, PRODUCT_PRICE)
                   VALUES (:productId, :productName, :productPrice)`;

    const result = await connection.execute(query, {
      productId,
      productName,
      productPrice
    });
    console.log(req.body);
    await connection.execute('COMMIT'); // Commit the transaction

    // Check result or handle success accordingly
    res.render('list', { title: 'Product List' });

  } catch (error) {
    console.error('Error saving product:', error);
    res.status(500).send('Error saving product');
  }
});

module.exports = router;
