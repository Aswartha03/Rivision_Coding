

const names = [
  "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy",
  "Kevin", "Laura", "Mallory", "Niaj", "Olivia", "Peggy", "Quinn", "Ruth", "Sybil", "Trent",
  "Uma", "Victor", "Wendy", "Xander", "Yvonne", "Zack", "Aaron", "Bella", "Caleb", "Diana",
  "Ethan", "Fiona", "Gavin", "Hannah", "Isaac", "Julia", "Kyle", "Liam", "Mia", "Noah",
  "Owen", "Paula", "Quincy", "Rachel", "Sam", "Tina", "Umar", "Vera", "Will", "Xenia",
  "Yara", "Zane", "Abby", "Ben", "Cara", "Dan", "Ella", "Finn", "Gina", "Hugo", "Isla",
  "Jake", "Kara", "Leo", "Mona", "Nora", "Omar", "Pia", "Ray", "Sara", "Tom", "Usha",
  "Vikram", "Walt", "Xavi", "Yash", "Zoe", "Amit", "Bhavya", "Chetan", "Divya", "Eshan",
  "Fatima", "Gaurav", "Harsh", "Isha", "Jay", "Kunal", "Lakshmi", "Manav", "Neha", "Om",
  "Priya", "Rahul", "Sneha", "Tara", "Udit", "Varun", "Waseem", "Zara"
];

const students = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: names[i % names.length],
  marks: Math.floor(Math.random() * 51) + 50 
}));


export default students
