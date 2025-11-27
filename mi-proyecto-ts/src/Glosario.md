Tipado estatico: los tipo primitivos nos permiten añadir al inicio de la declaracion de la varible el tipo de valor que nosotros permitiremos la forma en la se lo realiza es asi
-let nombre:string="lautaro"

Tipo Union: los tipo union nos permite añadir en una varible mas de tipo para que este sea mas flexiable a la hora de acceptar datos, se lo realiza de esta forma
-let ejemplo: string | number

interfaz: la interfaz nos permiter indicar los atributo que deberan de contener el objeto asi como el tambien el tipo de datos deberan de permitir para cada uno se lo realiza de esta forma

-interface manzada {
cantidad: numbre;
precio: number;
}

tipado en funciones: Consiste en indicar qué tipos de datos recibe la función y qué tipo de dato va a devolver

-function resta(valor1:number,valor2:number):number

Tipos literales: nos permiten limitando el valor que contendra las varible ya que estaremos indicando que valores nosotros deceamos,ejemplo:
-type color="azul"|"rojo"|"amarillo"

Enum:nos permite almacenar constante que estaran relacionada bajo un mismo nombre
-enum Containment Class {
Safe= "Safe",
Euclid = "Euclid",
Keter = "Keter",
}
