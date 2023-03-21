class ProductManager{

    constructor(){
        this.products = []
    }

    addProduct(title, description, price, thumbnail, code, stock){
        
        let idProduct = (this.getProducts()).length;

        let product = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
            id: ++idProduct
        }

        if (!product.title,
            !product.description,
            !product.price,
            !product.thumbnail,
            !product.code,
            !product.stock
        ) {
            return console.log(`Complete all fields to add ${product.title}`);
        } else if (isNaN(price)) {
            return console.log("Use only number for price");
        } else if (isNaN(stock)) {
            return console.log(`Use only number for stock to add ${product.title}`);
        }

        let codeValidation = this.products.find((p) => p.code == product.code);
        if(codeValidation){
            return console.log(`This product's code already exist: ${code}`);
        } else {
            this.products.push(product);
            console.log(`Product ${product.title} added successfully`);
            return this.products;
        }


    }

    getProducts(){
        return this.products;
    }

    getProductById(id){
        let product = this.products.find(e => e.id == id)
        
        if (!product) {
            return "Not found";
        } else {
            return `Product founded: ${product.id} - ${product.title}`
        }
    }
}



// PROCESO DE TESTING
console.log("INICIA TESTIIIIIIIIIIiiiiiiiIIING");
// Se creará una instancia de la clase “ProductManager”.
const productManager = new ProductManager();

// Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío [].
console.log(productManager.getProducts());

//Se llamará al método “addProduct” para agregar un nuevo producto. El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE.
productManager.addProduct("Red Dead Redemption 2", "Adventure", 2499, "not available", "AV1", 23);

//Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
console.log(productManager.getProducts());

//Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
productManager.addProduct("Red Dead Redemption 2", "Adventure", 2499, "not available", "AV1", 23);

//Se agrega otro producto correctamente.
productManager.addProduct("God of War", "Action", 4199, "not available","AC1", 25);

//Se intenta agregar producto sin todos los campos para que de el error correspondiente.
productManager.addProduct("Elden Ring", 4199);

//Se agregan otro producto correctamente.
productManager.addProduct("Gotham Knights", "Action", 5099, "not available", "AC2", 12);

//Se intenta agregar producto con el dato de stock incorrecto para que de el error correspondiente.
productManager.addProduct("Left 4 Dead 2", "Shooter", 765, "not available", "S1", "AS");

//Se llama nuevamente a getProducts para ver los productos y sus id's correspondientes.
console.log(productManager.getProducts());

//Se evaluará que getProductById devuelva error si no encuentra el producto...
console.log(productManager.getProductById(7));

//... o el producto en caso de encontrarlo
console.log(productManager.getProductById(2));
console.log(productManager.getProductById(1));
console.log(productManager.getProductById(3));




