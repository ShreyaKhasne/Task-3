<!DOCTYPE html>
font-size: 16px;
width: 80%;
border-radius: 8px;
border: 1px solid #ccc;
margin-bottom: 15px;
}
button {
padding: 10px 20px;
font-size: 16px;
background: #4CAF50;
color: white;
border: none;
border-radius: 8px;
cursor: pointer;
transition: 0.3s;
}
button:hover {
background: #45a049;
}
#result {
font-size: 18px;
font-weight: bold;
margin-top: 20px;
color: #e91e63;
text-align: left;
}
</style>
</head>
<body>


<div class="container">
<h1>📊 Student Marks Calculator 📊</h1>
<p>Enter marks for Math, Science, and English</p>


<input type="number" id="math" placeholder="Math Marks">
<input type="number" id="science" placeholder="Science Marks">
<input type="number" id="english" placeholder="English Marks">
<br>
<button onclick="calculateMarks()">Calculate Total & Average</button>


<div id="result"></div>
</div>


<script>
function calculateMarks() {
let math = Number(document.getElementById("math").value);
let science = Number(document.getElementById("science").value);
let english = Number(document.getElementById("english").value);


if (isNaN(math) || isNaN(science) || isNaN(english)) {
document.getElementById("result").innerText = "⚠️ Please enter valid marks!";
document.getElementById("result").style.color = "red";
return;
}


let total = math + science + english;
let average = (total / 3).toFixed(2);


document.getElementById("result").innerHTML =
`Total Marks: <b>${total}</b><br>Average Marks: <b>${average}</b>`;
document.getElementById("result").style.color = "green";
}
</script>


</body>
</html>
