export default function getStudentIdsSum(listStudents) {
 const interValue = 0;
  const sum = listStudents.reduce ((acumulation, Ids) => {
    acumulation += Ids.id, interValue;
  })

  return sum;
}
