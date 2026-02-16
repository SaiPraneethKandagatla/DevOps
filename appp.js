const express = require('express');
const app = express();

// ------------------ Middleware (Bonus) ------------------
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// ------------------ Sample Student Data ------------------
const students = [
    { id: 1, name: "Ravi Kumar", age: 20, course: "CSE" },
    { id: 2, name: "Anjali Sharma", age: 21, course: "ECE" },
    { id: 3, name: "Rahul Verma", age: 22, course: "IT" }
];

// ------------------ Routes ------------------

// Home Route
app.get('/', (req, res) => {
    res.json({ message: "Welcome to Student Information Management System" });
});

// Get All Students
app.get('/students', (req, res) => {
    res.json(students);
});

// Get Student by ID (Dynamic Route)
app.get('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);

    const student = students.find(s => s.id === studentId);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
});

// ------------------ Server ------------------
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
