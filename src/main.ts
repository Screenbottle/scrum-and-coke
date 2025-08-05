const addStudentButton = document.getElementById(
  "add-student"
) as HTMLButtonElement;
const studentNameInput = document.getElementById(
  "student-name"
) as HTMLInputElement;
const studentAgeInput = document.getElementById(
  "student-age"
) as HTMLInputElement;

type student = {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
};

let students: student[] = [
  {
    id: 1,
    name: "Lisa",
    age: 15,
    isActive: false,
  },
  {
    id: 2,
    name: "Emil",
    age: 16,
    isActive: true,
  },
  {
    id: 3,
    name: "Grillbritt",
    age: 16,
    isActive: true,
  },
];

addStudentButton.addEventListener("click", () => {
    const studentName = studentNameInput.value.trim();
    const studentAge = Number(studentAgeInput.value.trim());

    const newId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;

    const student: student = {
        id: newId,
        name: studentName,
        age: studentAge,
        isActive: true
    }

    students.push(student);
    studentNameInput.value = "";
    studentAgeInput.value = "";

    //TODO: Rerender the student list
});
