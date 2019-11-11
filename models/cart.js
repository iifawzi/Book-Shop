const path = require('path');
const fs = require('fs');
const p = path.join(
    path.dirname(process.mainModule.filename),'data',cart.json);
module.exports = class cart {

    static addProduct(id,productPrice){
        // fetch the previous cart 
        // analyze the cart => find existing product
        // add new product / increase quanntity
    }

}