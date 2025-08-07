type Student = {
    name: string;
    age: number;
    id: number;
};

let students: Student[] = [
    { name: 'Lisa', age: 15, id: 1 },
    { name: 'Emil', age: 16, id: 2 },
    { name: 'Grillbritt', age: 16, id: 3 }
];

const studentList = document.getElementById("student-list") as HTMLUListElement;
studentList.innerHTML = ""; // Rensa listan

students.forEach(student => {
    const li = document.createElement("li");
    const age = student.age;
    li.textContent = `${student.name} (${age} år)`;
    li.dataset.id = student.id.toString();  
    studentList.appendChild(li);

});
