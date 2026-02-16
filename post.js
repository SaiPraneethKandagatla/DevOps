const express = require('express');
const app = express();

app.use(express.json());

let students = [
  { id: 1, name: "Ravi" },
  { id: 2, name: "Sita" }
];

// GET - View all students
app.get('/students', (req, res) => {
  res.json(students);
});

// GET - View single student
app.get('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(student);
});

// POST - Add new student
app.post('/students', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  const newStudent = {
    id: students.length + 1,
    name
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

// PUT - Update student
app.put('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  student.name = name;
  res.json({ message: "Student updated", student });
});

// DELETE - Remove student
app.delete('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);

  students = students.filter(s => s.id !== id);

  res.json({ message: "Student deleted" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
