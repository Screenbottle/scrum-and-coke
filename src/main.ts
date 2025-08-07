const addStudentButton = document.getElementById('add-student') as HTMLButtonElement;
const studentNameInput = document.getElementById('student-name') as HTMLInputElement;
const studentAgeInput = document.getElementById('student-age') as HTMLInputElement;

type Student = {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
};

let students: Student[] = [
  {
    id: 1,
    name: 'Lisa',
    age: 15,
    isActive: false,
  },
  {
    id: 2,
    name: 'Emil',
    age: 16,
    isActive: true,
  },
  {
    id: 3,
    name: 'Grillbritt',
    age: 16,
    isActive: true,
  },
];

const studentList = document.getElementById('student-list') as HTMLUListElement;

function renderAllStudents(): void {
  studentList.innerHTML = ''; // Rensa listan
  students.forEach((student) => {
    const li = document.createElement('li');
    const age = student.age;
    li.textContent = `${student.name} (${age} år)`;
    li.dataset.id = student.id.toString();
    studentList.appendChild(li);
  });
}
addStudentButton.addEventListener('click', () => {
  const studentName = studentNameInput.value.trim();
  const studentAge = Number(studentAgeInput.value.trim());

  const newId = students.length > 0 ? Math.max(...students.map((s) => s.id)) + 1 : 1;

  const student: Student = {
    id: newId,
    name: studentName,
    age: studentAge,
    isActive: true,
  };

  students.push(student);
  studentNameInput.value = '';
  studentAgeInput.value = '';
  renderAllStudents();
});

renderAllStudents();
