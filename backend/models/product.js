var mongoose = require( 'mongoose' );


var productSchema = new mongoose.Schema({
  productNumber: {
    type: String,
  },
  productName: {
    type: String,
  },
  vehicleMake: {
    type: String,
  },
  brand: {
    type: String,
  },
  productCategory: {
    type: String,
  },
  oemNo: {
    type: String,
  },
  productGroup: {
    type: String,
  },
  unit: {
    type: String,
  },
  countryOfOrigin: {
    type: String,
  },
  remarks: {
    type: String,
  },
  sellingPrice: {
    type: String,
  },
  partsLocation: {
    type: String,
  },
});
module.exports = mongoose.model("Product", productSchema)

