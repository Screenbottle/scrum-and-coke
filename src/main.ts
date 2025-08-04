type student = {
  name: string;
};

let students: student[] = [
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
  let li = document.createElement('li') as HTMLLIElement;
  li.textContent = student.name;
  classList.appendChild(li);
});
