let total = 0;

function addCart(price) {
    return total += price;
}

total = addCart(500);        //Se agrega al carrito producto N°1
total = addCart(1200);       //se agrega al carrito producto N°2

console.log(`$ ${total}`);          //Muestra el importe total (sin impuestos) de los productos

function calculateTax(total) {
    return total * 1.21;   //IVA del 21%
}

const totalCart = calculateTax(total);

console.log(`$ ${totalCart}`);     ///Muestra el importe total (con impuestos) de los productos
