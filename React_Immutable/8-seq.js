import { Seq } from 'immutable';

function capFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function printBestStudents(object) {
  const seq = Seq(object)
    .filter((student) => student.score >= 70)
    .map((student) => ({
      ...student,
      firstName: capFirstLetter(student.firstName),
      lastName: capFirstLetter(student.lastName),
    }));

  console.log(seq.toJS());
}
