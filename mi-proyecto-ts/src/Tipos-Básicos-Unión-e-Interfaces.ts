//Tipos fundamentales

let productName: string = "coca cola";
let productPrice: number = 20.15;

console.log(
  `OFERTA ${productName} A ${productPrice}pesos durante las proximas 3 horas `
);

// Tipo Union

let productID: string | number = "Producto123";
console.log(`${productID}`);
productID = 12312440532;
console.log(`${productID}`);

//Interfaz Básica

interface product {
  name: string;
  price: number;
}

const MyProducto: product = {
  name: "rayman arena",
  price: 5000,
};

console.log(MyProducto);
