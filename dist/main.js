let students = [
    { name: 'Lisa', age: 15 },
    { name: 'Emil', age: 16 },
    { name: 'Grillbritt', age: 16 }
];
const studentList = document.getElementById("student-list");
studentList.innerHTML = ""; // Rensa listan
students.forEach(student => {
    const li = document.createElement("li");
    const age = student.age;
    li.textContent = `${student.name} (${age} år)`;
    studentList.appendChild(li);
});
export {};
//# sourceMappingURL=main.js.map