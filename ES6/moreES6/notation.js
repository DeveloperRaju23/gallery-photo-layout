const student = {
    name : 'raju',
    address : 'dhaka',
    class : 'ten',
    marks: {
        math : 78,
        chemistry : 65,
        physics: 87,
    },
}

const marks = student.marks;
const math = student.marks.math

const chemistry = student ['marks']['chemistry']
const subject = 'math';
const subjectMarks = student.marks[subject];
console.log(subjectMarks);

