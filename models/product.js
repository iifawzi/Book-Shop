const products = [];
module.exports = class Product {
    constructor(title,){
        this.title = title;
    }

        save(){
            products.push(this); // this refers to the object that gonna be created
        }

        static fetchAll(){
            return products;
        } // static made this function accessable without initialise a new object. look for product controller line 18 
}