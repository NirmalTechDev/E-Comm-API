var express = require('express')
var router = express.Router();

var product = require('../controller/productcontroller');

//============product================
router.post('/',product.Add_Product);
router.get('/view_product',product.View_Product);
router.get('/view_product/:id',product.View_Product);
 
module.exports = router;