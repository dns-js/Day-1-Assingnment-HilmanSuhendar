const cart = [
  { product: { name: "Notebook", price: 25000 }, qty: 2 },
  { product: { name: "Pen", price: 5000 }, qty: 6 },
  { product: { name: "Bag", price: 150000 }, qty: 1 },
];

// Step 1
function rectangleArea(width, height) {
    return width * height;
}
const labelArea = rectangleArea(10, 4);
console.log(`Step 1. labelArea: ${labelArea}`);


// Step 2
const rectangleAreaArrow = (width, height) => width * height;
console.log(`Step 2. labelAreaArrow: ${rectangleAreaArrow(10, 4)}`);

// Step 3
function calcSubTotal(cart) {
    return cart.map(({product: {name, price}, qty}) => {
        const total = price * qty;
        return {name:name, subtotal:total};
    });
}
console.log('Step 3. Destructuring Inside a Loop: ');
console.log(calcSubTotal(cart));


// Step 4
function addItem(cart, newItem) {
    return updatedCart = [...cart, newItem];
};
const newItem = {
        product: {name:"Sticker", price: 2000}, qty: 10
    };
const items = addItem(cart, newItem);
console.log('Step 4. Spread Operator:');
console.log(items);


// Step 5
function cartCalculator(cart){
let totalQty = 0;
let totalPrice = 0;
// 5.1. Validation
    for(const item of cart) {
        const {qty, product: {name, price}} = item;

        if(typeof qty !== 'number' || qty < 0) {
            throw new Error(`Invalid qty for ${name}: qty must be a number > 0`);
        }

        if(typeof price !== 'number' || price <= 0) {
            throw new Error(`Invalid price for ${name}: price must be a number >= 0`);
        }
// 5.3. Aggregation
        totalQty += qty;
        totalPrice += price * qty;
    }
// 5.2 Subtotal Calculation
const subTotal = calcSubTotal(cart);
// 5.4 Result
    return {
        labelArea,
        subTotal,
        totalQty,
        totalPrice
    }
}
console.log('Step 5. Harder Part: Total + Validation');
console.log(cartCalculator(updatedCart));
