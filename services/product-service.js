const faker = require('faker');
const boom = require('@hapi/boom');

class ProductsService {
  constructor(){
    this.products = [];
    this.generate();
  }
  async generate(){
    for(let i=0; i<100;i++){
      this.products.push({
        id:faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean,
      });

    }
  }
  async create(data){
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }
  async find(){
    return this.products
  }
  async findOne(id){
    const product = this.products.find(item =>item.id ===id);
    if (!product){
      throw boom.notFound('product not found')
    }
    if(product.isBlock){
      throw boom.conflict('product is blocked');
    }
    return product
  }


  
  async update(id,changes){
    const index = this.products.findIndex(item => item.id ===id)
    if (index===-1){
      throw boom.notFound('product not Found');
    }
    const product = this.products[index]
    this.products[index]= {...product, ...changes};
    return this.products[index]
  }
  async delete(id){
    const index = this.products.findIndex(item => item.id ===id);
    if (index===-1){
      throw boom.notFound('product not Found');
    }
    this.products.splice(index,1);
    return {id};
  }
}

module.exports = ProductsService;
