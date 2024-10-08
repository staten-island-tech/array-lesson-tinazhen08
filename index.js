//Assignment 1: Practicing forEach and filter with Student Data
//Part 1: Practice forEach
const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "Diana", age: 23, grade: 95 }
];

const nameAndAge = students.forEach((student) =>
  console.log(student.name, student.grade));

//Part 2; Practice with filter
//1.
const topStudents = students.filter((student) => student.grade > 80);
console.log(topStudents);

//2.
const youngStudents = students.filter((student) => student.age <= 21);
console.log(youngStudents);

//Part 3: Combine forEach and filter
//1.
const above80 = students.filter((student) => student.grade > 80).forEach((student) => console.log(student.name));
console.log(above80);

//2.
const lessThanOrEqualTo21 = students.filter((student) => student.age <= 21).forEach((student) => console.log(student.name));
console.log(youngerthan21);




//Assignment 2: Practicing forEach and filter with Product Data

const products = [
  { name: 'Laptop', price: 1200, category: 'Electronics', rating: 4.5 },
  { name: 'Phone', price: 800, category: 'Electronics', rating: 4.7 },
  { name: 'Headphones', price: 150, category: 'Accessories', rating: 4.3 },
  { name: 'Monitor', price: 300, category: 'Electronics', rating: 4.6 },
  { name: 'Keyboard', price: 100, category: 'Accessories', rating: 4.1 },
  { name: 'Chair', price: 250, category: 'Furniture', rating: 4.0 },
  { name: 'Desk', price: 450, category: 'Furniture', rating: 4.8 }
];
