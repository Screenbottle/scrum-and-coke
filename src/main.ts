type Student = {
  name: string;
  id: number;
};

const students: Student[] = [
  {
    name: 'Lisa',
    id: 1,
  },
  {
    name: 'Emil',
    id: 2,
  },
  {
    name: 'Grill-britt',
    id: 3,
  },
];

const classList = document.getElementById('student-list') as HTMLUListElement;

students.forEach((student) => {
  const li = document.createElement('li') as HTMLLIElement;
  li.textContent = student.name;
  li.dataset.id = student.id.toString();  
  classList.appendChild(li);
});
