const fs = require('fs');
const path = require ('path');


const products = [];
module.exports = class Product {
    constructor(title,){
        this.title = title;
    }

        save(){
const p = path.join(path.dirname(process.mainModule.filename),'data','products.json');

fs.readFile(p,(error,fileContent)=>{
    let products =[];
    if (!error){
        products = JSON.parse(fileContent); // parse Convert from json to array
    };
    products.push(this);
    fs.writeFile(p,JSON.stringify(products), (err)=>{
        console.log(err);
    }) // Stringify Convert from array to json
});

        }

        static fetchAll(cb){
            const p = path.join(
                path.dirname(process.mainModule.filename),'data','products.json');
            fs.readFile(p,(error,fileContent)=>{
                if (error){
                   cb([]);
                };
                cb(JSON.parse(fileContent));
            });
        } // static made this function accessable without initialise a new object. look for product controller line 18 
}