function calculate() {
  var mathMarks = document.querySelector("#math").value;
  var physicsMarks = document.querySelector("#physics").value;
  var electronicsMarks = document.querySelector("#electronics").value;
  var computerMarks = document.querySelector("#computer").value;
  var javaMarks = document.querySelector("#java").value;
  var pythonMarks = document.querySelector("#python").value;
  var totalMarksHTML = document.querySelector("#totalMarks");
  var gradeHTML = document.querySelector("#grade");
  var totalMarks =
    parseFloat(mathMarks) +
    parseFloat(physicsMarks) +
    parseFloat(electronicsMarks) +
    parseFloat(computerMarks) +
    parseFloat(javaMarks) +
    parseFloat(pythonMarks);

  var percentage = (totalMarks / 600) * 100;
  var grade = "";
  if (percentage >= 80) {
    grade = "A+";
  } else if (percentage >= 70) {
    grade = "B";
  } else if (percentage >= 60) {
    grade = "C";
  } else if (percentage >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }

  document.querySelector(
    "#totalMarks"
  ).innerHTML = `Total Marks: ${totalMarks}`;
  document.querySelector("#grade").innerHTML = `Your grade: ${grade}`;
  document.querySelector("#math").value = "";
  document.querySelector("#physics").value = "";
  document.querySelector("#electronics").value = "";
  document.querySelector("#computer").value = "";
  document.querySelector("#java").value = "";
  document.querySelector("#python").value = "";
}
