const express = require('express');
const router = express.Router();
const {  regsiterValidation, loginValidation} = require("../controller/validation")

const ProductController = require('../controller/productController');

//Get a list of all products
router.get('/', ProductController.getAllProducts);

//Create a new product
router.post('/',ProductController.upload.single('upload'), ProductController.createNewProduct);
router.patch('/:id', ProductController.updateAProduct);



router.post('/register',regsiterValidation, ProductController.register);
router.post('/login',loginValidation, ProductController.login);

router.post('/customers', ProductController.createCustomer);
router.get('/customers', ProductController.getAllCustomer);
router.patch('/customers/:id', ProductController.updateACustomer);
router.delete('/customers/:id', ProductController.deleteCustomer);



router.get('/category', ProductController.getAllCategories);
router.post('/category', ProductController.createNewCategory);
router.patch('/category/:id', ProductController.updateACategory);
router.delete('/category/:id', ProductController.deleteACategory);

//Get a product by id
router.get('/:id', ProductController.findProductById);
//Update a product by id
router.patch('/:id', ProductController.updateAProduct);

//Delete a product by id
router.delete('/:id', ProductController.deleteAProduct);

module.exports = router;