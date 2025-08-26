function calculate() {
  const math = parseFloat(document.getElementById("math").value) || 0;
  const science = parseFloat(document.getElementById("science").value) || 0;
  const english = parseFloat(document.getElementById("english").value) || 0;

  const total = math + science + english;
  const average = (total / 3).toFixed(2);

  document.getElementById("total").innerText = `Total: ${total}`;
  document.getElementById("average").innerText = `Average: ${average}`;
}
