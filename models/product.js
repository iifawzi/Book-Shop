const fs = require('fs');
const path = require ('path');
const p = path.join(path.dirname(process.mainModule.filename),'data','products.json');

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
    constructor(title,imageUrl,description,price){
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

        save(){
           this.id = Math.floor(Math.random()*10000).toString();
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
        static findById(id,cb){
            getProducsFromFile(products=>{
                const product = products.find(p=> p.id === id);
                cb(product);
            });
        }
}