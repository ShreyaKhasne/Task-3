<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student Marks Calculator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
  </style>
</head>
<body>
  <h1>Student Marks Calculator</h1>
  <form id="student-form">
    <label for="name">Student Name:</label>
    <input type="text" id="name" name="name"><br><br>
    <label for="math-marks">Math Marks:</label>
    <input type="number" id="math-marks" name="math-marks"><br><br>
    <label for="science-marks">Science Marks:</label>
    <input type="number" id="science-marks" name="science-marks"><br><br>
    <label for="english-marks">English Marks:</label>
    <input type="number" id="english-marks" name="english-marks"><br><br>
    <button id="calculate-btn">Calculate Marks</button>
  </form>
  <div id="result"></div>

  <script>
    let students = [];

    document.getElementById('calculate-btn').addEventListener('click', (e) => {
      e.preventDefault();
      let name = document.getElementById('name').value;
      let mathMarks = parseInt(document.getElementById('math-marks').value);
      let scienceMarks = parseInt(document.getElementById('science-marks').value);
      let englishMarks = parseInt(document.getElementById('english-marks').value);

      let student = {
        name: name,
        marks: {
          math: mathMarks,
          science: scienceMarks,
          english: englishMarks
        }
      };

      students.push(student);
      calculateStudentMarks(students);
    });

    function calculateStudentMarks(students) {
      let studentsWithTotalMarks = students.map(student => {
        let totalMarks = Object.values(student.marks).reduce((acc, mark) => acc + mark, 0);
        return { ...student, totalMarks };
      });

      let studentsWithAverageMarks = studentsWithTotalMarks.map(student => {
        let averageMarks = student.totalMarks / Object.keys(student.marks).length;
        return { ...student, averageMarks };
      });

      let resultHtml = '';
      studentsWithAverageMarks.forEach(student => {
        resultHtml += `<p>Student Name: ${student.name}</p>`;
        resultHtml += `<p>Total Marks: ${student.totalMarks}</p>`;
        resultHtml += `<p>Average Marks: ${student.averageMarks}</p>`;
        resultHtml += `<hr>`;
      });

      document.getElementById('result').innerHTML = resultHtml;
    }
  </script>
</body>
</html>
