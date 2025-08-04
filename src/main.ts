const addStudentButton = document.getElementById("add-student") as HTMLButtonElement;

type student = {
  name: string;
  age: number;
  isActive: boolean;
};
 
let students: student[] = [
  {
    name: 'Lisa',
    age: 15,
    isActive: false,
  },
  {
    name: 'Emil',
    age: 16,
    isActive: true,
  },
  {
    name: 'Grillbritt',
    age: 16,
    isActive: true,
  },
];

addStudentButton.addEventListener("click", () => {

});