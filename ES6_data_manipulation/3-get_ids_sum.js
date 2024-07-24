export default function getStudentIdsSum(listStudents) {
  const sum = listStudents.reduce ((acumulation, Ids) => {
    return acumulation += Ids.id;
  }, 0);
  return sum;
}
