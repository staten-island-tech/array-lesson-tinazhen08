//Part 1: Practice forEach
const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "Diana", age: 23, grade: 95 },
];

const nameAndAge = students.forEach((student) =>
  console.log(student.name, student.grade)
);

//Part 2; Practice with filter
//1.
const topStudents = students.filter((student) => student.grade > 80);
console.log(topStudents);

//2.
const youngStudents = students.filter((student) => student.age <= 21);
console.log(youngStudents);

//Part 3: Combine forEach and filter
//1.
const above80 = students
    .filter((student) => student.grade > 80)
    .forEach((student) => console.log(student.name));

//2. 