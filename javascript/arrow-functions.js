// Write an arrow function that returns 2.
const giveMeTwo = () => 2; // Replace `undefined` with your code

// Write an arrow function that takes in a movie and returns '<movie> is the best movie
// ever!' where <movie> is the argument passed into the function.
const bestMovie = (movie) => `${movie} is the best movie ever!`; // Replace `undefined` with your code

// Write an arrow function called 'compareNums' that takes in 2 parameters,
// which will be numbers.
// The function should return the bigger number.
// If the numbers are the same, just return the number.
const compareNums = (num1,num2) => {
  if (num1 < num2 || num1 === num2){
    return num2
  } else if (num2 < num1){
    return num1
  } 

}; // Replace `undefined` with your code

const foods = [
  {
    name: 'bread',
    carbs: 36,
    protein: 8,
    fat: 2,
  },
  {
    name: 'mayo mustard mix',
    carbs: 0,
    protein: 0,
    fat: 10,
  },
  {
    name: 'turkey',
    carbs: 0,
    protein: 25,
    fat: 1,
  },
  {
    name: 'cheese',
    carbs: 0,
    protein: 5,
    fat: 7,
  },
];

// Use the .forEach method to modify each food object in the foods array above to include calories.
// Calories can be calculated by multiplying carbs by 4, protein by 4, fat by 9,
// and then adding the results together.
function addCalories() {
  // Replace this with your code
  foods.forEach((food,index) => {
    foods[index].calories = (foods[index].carbs * 4) + (foods[index].protein * 4) + (foods[index].fat * 9)
    })
  return foods;
}

// For problems 2-4, you will be working with the products array below.
// Think of this array as a store's inventory.
const products = [
  {
    name: 'backpack',
    color: ['red', 'yellow'],
    price: 500,
  },
  {
    name: 'shirt',
    color: ['blue'],
    price: 400,
  },
  {
    name: 'shoes',
    color: ['red'],
    price: 1200,
  },
  {
    name: 'socks',
    color: ['yellow', 'blue'],
    price: 200,
  },
  {
    name: 'pants',
    color: ['blue', 'red'],
    price: 1000,
  },
];

// You've decided to have a sale on everything you have in stock. It's all going to be 25% off.
// Using the map method, make a copy of your products array with the prices reduced by 25%
// and return it.
function getSaleProducts() {
  // Replace this with your code
  
  let saleProducts = products.map((obj,index) => {
    // return products[index].price = 
    // products.push({2:2})
    obj.price = obj.price *= .75
    return obj
  })
  return saleProducts
}
// console.log(getSaleProducts())

// A customer has placed an order - they want one of every product that has blue on it.
// Using the filter method return the products that have blue in their color array
// to a new variable called 'blueProducts'.
// (Hint: look up the array method 'includes' on MDN)
function getBlueProducts() {
  // Replace this with your code
  let blueProducts = products.filter((ele,index) => {
    if (ele.color.includes('blue')){
      return ele
    }
  })
  return blueProducts
}
// console.log(getBlueProducts())

// Get the total price of all the products using the reduce method.
function getTotalPrice() {
  // Replace this with your code
  let totalPrice = products.reduce((accum,obj,index) =>{
    // console.log(accum)
    return accum + obj.price
  },0)
  return totalPrice
  console.log(totalPrice)
}
console.log(getTotalPrice())

export {
  addCalories,
  bestMovie,
  compareNums,
  foods,
  getBlueProducts,
  getSaleProducts,
  getTotalPrice,
  giveMeTwo,
  products,
};
