export default function getStudentIds(students) {
  if(students !== Array){
    return[];
  }
  
    return students.map((student) => student.id);
  };

