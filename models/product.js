const fs = require('fs');
const path = require ('path');
const p = path.join(
    path.dirname(process.mainModule.filename),'data','products.json');
const getProducsFromFile = cb =>{
    fs.readFile(p,(error,fileContent)=>{
        if (error){
           cb([]);
        }else {
            cb(JSON.parse(fileContent));
        }
    });
};

const products = [];
module.exports = class Product {
    constructor(title,){
        this.title = title;
    }

        save(){
           
getProducsFromFile(products =>{
    products.push(this);
    fs.writeFile(p,JSON.stringify(products),err=>{
        console.log(err);
    })
})
        }

        static fetchAll(cb){
            getProducsFromFile(cb);
        } // static made this function accessable without initialise a new object. look for product controller line 18 
}