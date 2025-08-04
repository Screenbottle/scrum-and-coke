type Student = {
  name: string;
};

const students: Student[] = [
  {
    name: 'Lisa',
  },
  {
    name: 'Emil',
  },
  {
    name: 'Grill-britt',
  },
];

const classList = document.getElementById('student-list') as HTMLUListElement;

students.forEach((student) => {
  const li = document.createElement('li') as HTMLLIElement;
  li.textContent = student.name;
  classList.appendChild(li);
});
