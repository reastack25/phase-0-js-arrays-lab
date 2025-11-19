// Write your code here
const products =["Laptop","Phone","Headphones","Monitor"]

function logFirstProduct(){
  console.log(products["0"])
}
function addProduct(productName){
  products.push(productName);
}
addProduct("Tablet");

function updateProductName(index,newname){
  products[1] = newname;
}
updateProductName(products[1]="Smartphone");
console.log(products[1])
function removeLastProduct(){
  products.pop()
}
console.log(products)


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
