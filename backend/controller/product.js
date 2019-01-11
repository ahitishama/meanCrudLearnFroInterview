var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//Get Usser Model
require('../models/product')
var product = mongoose.model('Product');


//get product
router.get('/getproduct', function (req, res) {
  product.find(function (err, product){
  if(err){
    console.log(err);
  }
  else {
    res.json(product);
  }
});
});
// post login
router.post('/addproduct',function(req,res){


  // var productNumber= req.body.productNumber;
  // var productName= req.body.productName;
  // var vehicleMake= req.body.vehicleMake;
  // var brand= req.body.brand;
  // var productCategory= req.body.productCategory;
  // var oemNo= req.body.oemNo;
  // var productGroup= req.body.productGroup;
  // var unit= req.body.unit;
  // var countryOfOrigin= req.body.countryOfOrigin;
  // var remarks= req.body.remarks;
  // var sellingPrice= req.body.sellingPrice;
  // var partsLocation= req.body.napartsLocationme;


  let addProduct = new product(req.body);
  addProduct.save()
    .then(game => {
    res.status(200).json({'adUnit': 'AdUnit in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });




});


//Exports
module.exports = router;
// {"productNumber":"cxcx","productName":"xcvcxv","vehicleMake":"Toyota","brand":"Toyota","productCategory":"Toyota","oemNo":"cxvxcv","productGroup":"Mercedes","unit":"cxvxc","countryOfOrigin":"Mercedes","remarks":"xcvxc","sellingPrice":"ccvc","partsLocation":"cxvcxvc"}
