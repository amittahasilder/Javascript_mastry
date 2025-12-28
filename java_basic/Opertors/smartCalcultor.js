function calculateGrade(marks) {
  if (marks >= 80) {
    return "A+";
  } else if (marks >= 70) {
    return "A";
  } else if (marks >= 60) {
    return "B";
  } else if (marks >= 50) {
    return "C";
  } else {
    return "Fail";
  }
}

let studentMarks = 72;
console.log("Grade:", calculateGrade(studentMarks));
