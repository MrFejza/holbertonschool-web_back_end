export default function updateStudentGradeByCity(students, city, newGrade) {
  const filterStudent = students.filter((student) => student.location === city );
  const addGrade = filterStudent.map((student) => {
    const grade = newGrade.find((grade) => grade.studentId === student.id);
    if (grade) {
      student.grade =grade.grade;
    } else {
      student.grade = `N/A`;
    }
    return student;
  });
  return addGrade;
}
