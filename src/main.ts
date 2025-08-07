type student = {
    name: string;
    age: number;
};

let students: student[] = [
    { name: 'Lisa', age: 15 },
    { name: 'Emil', age: 16 },
    { name: 'Grillbritt', age: 16 }
];

const studentList = document.getElementById("student-list") as HTMLUListElement;
studentList.innerHTML = ""; // Rensa listan

students.forEach(student => {
    const li = document.createElement("li");
    const age = student.age;
    li.textContent = `${student.name} (${age} år)`;
    studentList.appendChild(li);
});
