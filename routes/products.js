const express = require('express');
const router = express.Router();
const faker = require('faker');
router.get('/', (req, res)=>{

  const products = [];
  for(let i=0; i<100;i++){
    products.push({
      name:faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl(),

    });

  }
  res.json(products);

})

module.exports = router;
