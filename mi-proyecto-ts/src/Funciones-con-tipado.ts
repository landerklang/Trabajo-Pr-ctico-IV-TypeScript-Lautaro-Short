function updatestock(currentStock: number, quantityChange: number): number {
  return currentStock + quantityChange;
}

const currentStock = 40;
const quantityChange = 50;
console.log(updatestock(currentStock, quantityChange));
