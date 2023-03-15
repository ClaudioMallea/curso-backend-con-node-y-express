const express = require('express');
const router = express.Router();
const ProductsService = require("./../services/product-service")

const service = new ProductsService();

router.get('/', async (req, res)=>{
  const products = await service.find();
  res.json(products);
});

router.get('/:id',async (req,res)=>{
  const {id} = req.params;
  const product = await service.findOne(id)
  console.log(product);
  res.json(product);

})

router.post('/', async (req, res)=>{
  const body = req.body;

  const newProduct = await service.create(body)


  res.status(201).json({
    message:'created',
    data:newProduct,
  })

});

router.patch('/:id', async (req,res)=>{
  const {id} = req.params;
  const body = req.body;
  const product = await service.update(id,body)
  res.json({
    message:'update',
    data:product,
    id,
  })

})
router.delete('/:id', async (req,res)=>{
  const {id} = req.params;
  const rta = await service.delete(id);
  res.json({
    message:'delete',
    rta,
  })

})


module.exports = router;
