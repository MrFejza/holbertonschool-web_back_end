export default function getStudentIdsSum(listStudents) {
  const initialValue = 0;
  const sum = listStudents.reduce ((accumulator, Ids) => accumulator += Ids.id, initialValue);

  return sum;
}
