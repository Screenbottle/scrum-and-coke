/*

Data for testing

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
]; */


function isActive(studentName: string): boolean | undefined {
  const student = students.find((s) => s.name === studentName);
  return student ? student.isActive : undefined;
}

//console.log(isActive("Lisa"));
