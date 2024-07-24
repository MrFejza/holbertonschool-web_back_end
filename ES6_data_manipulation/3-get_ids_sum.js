export default function getStudentIdsSum(listStudents) {
 interValue = 0;
  const sum = listStudents.reduce ((acumulation, Ids) => {
    acumulation += Ids.id, interValue;
  })

  return sum;
}
