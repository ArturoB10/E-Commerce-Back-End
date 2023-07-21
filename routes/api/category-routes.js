const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({include: Product}).then(data => {
    res.json(data)
  })
});

router.get('/:id', ({params}, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({where:{id: params.id}}).then(data=>{
    res.json(data)
  })
});

router.post('/', ({body}, res) => {
  // create a new category
  Category.create(body).then(data => {
    res.json(data)
  })
});

router.put('/:id', ({body,params}, res) => {
  console.log('test',body,params.id);
  // update a category by its `id` value
  Category.update(body,{where:{id: params.id}}).then(data=>{
    res.json(data)
  })
});

router.delete('/:id', ({params}, res) => {
  // delete a category by its `id` value
  Category.destroy({where: {id: params.id}}).then(data => {
    res.json(data)
  })
});

module.exports = router;
