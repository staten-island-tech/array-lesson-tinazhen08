//Assignment 1: Practicing forEach and filter with Student Data
//Array of students
const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "Diana", age: 23, grade: 95 },
];

//Part 1: Practice forEach
const nameAndAge = students.forEach((student) =>
  console.log('Name:',student.name,'\nGrade:',student.grade, '\n')
);

//Part 2; Practice with filter
//1.
const topStudents = students.filter(student => student.grade > 80);
console.log('Top Students:',topStudents, "\n");

//2.
const youngStudents = students.filter(student => student.age <= 21);
console.log('Young Students',youngStudents, '\n');

//Part 3: Combine forEach and filter
//1.
const above80 = students
  .filter(student => student.grade > 80)
  .forEach((student) => console.log(student.name));
console.log(above80, '\n');

//2.
const lessThanOrEqualTo21 = students
  .filter(student => student.age <= 21)
  .forEach((student) => console.log(student.name));
console.log(lessThanOrEqualTo21, '\n');

//Assignment 2: Practicing forEach and filter with Product Data
//Array of products
const products = [
  { name: "Laptop", price: 1200, category: "Electronics", rating: 4.5 },
  { name: "Phone", price: 800, category: "Electronics", rating: 4.7 },
  { name: "Headphones", price: 150, category: "Accessories", rating: 4.3 },
  { name: "Monitor", price: 300, category: "Electronics", rating: 4.6 },
  { name: "Keyboard", price: 100, category: "Accessories", rating: 4.1 },
  { name: "Chair", price: 250, category: "Furniture", rating: 4.0 },
  { name: "Desk", price: 450, category: "Furniture", rating: 4.8 },
];

//Part 1: Practice with forEach
//1.
const nameAndPrice = products.forEach((product) =>
  console.log('Name:',product.name,'\nPrice:', product.price, '\n')
);

//2.
const increasedPrice = products.forEach((product) =>
  console.log('Name:',product.name,'\n Increased Price:',Math.round(product.price * 1.1))
);

//3.
const categories = [];
products.forEach((product) => {
  if (!categories.includes(product.category)) {
    categories.push(product.category);
  }
});
console.log('\n',"Unique Categories:", categories, '\n');



//Part 2: Practice with filter
//1. 
const electronics = products.filter(product => product.category === 'Electronics');
console.log('Electronics:', electronics, '\n');

//2. 
const expensiveProducts = products.filter(product => product.price > 300);
console.log('>$300 Products:', expensiveProducts, '\n');

//3.
const highRating = products.filter(product => product.rating >= 4.5);
console.log('High ratings', highRating, '\n');



//Part 3: Combine forEach and filter
//1. 
console.log('High Rating Product Names:')
const highRatingNames = products
  .filter(product => product.rating >= 4.5)
  .forEach((product) => console.log(product.name));

//2. 
console.log('\n Affordable Electronics:')
const affordableElectronics = products
  .filter(product => product.category === 'Electronics')
  .filter(product => product.price < 1000)
  .forEach((product) => console.log(product));
