export default function getStudentsByLocation(listOfStudents, city) {
  const list = listOfStudents.filter((students) => students.location === city);

  return list;
}
