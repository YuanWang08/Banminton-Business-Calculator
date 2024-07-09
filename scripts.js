function adjustValue(id, amount) {
  const input = document.getElementById(id);
  input.value = parseInt(input.value) + amount;
  calculate(); // 參數改變時立即重新計算
}

function calculate() {
  const courtPrice = parseInt(document.getElementById('courtPrice').value);
  const courtCount = parseInt(document.getElementById('courtCount').value);
  const courtHours = parseInt(document.getElementById('courtHours').value);
  const sessionPrice = parseInt(document.getElementById('sessionPrice').value);
  const participants = parseInt(document.getElementById('participants').value);
  const shuttlecockPrice = parseInt(document.getElementById('shuttlecockPrice').value);
  const shuttlecockCount = parseInt(document.getElementById('shuttlecockCount').value);

  const totalCourtFee = courtPrice * courtCount * courtHours;
  const totalShuttlecockFee = shuttlecockPrice * shuttlecockCount;
  const totalExpenses = totalCourtFee + totalShuttlecockFee;
  const totalRevenue = sessionPrice * participants;
  const profit = totalRevenue - totalExpenses;

  document.getElementById('totalCourtFee').innerText = totalCourtFee;
  document.getElementById('totalShuttlecockFee').innerText = totalShuttlecockFee;
  document.getElementById('totalExpenses').innerText = totalExpenses;
  document.getElementById('totalRevenue').innerText = totalRevenue;
  document.getElementById('profit').innerText = profit;
}

// 初始計算顯示結果
document.addEventListener('DOMContentLoaded', (event) => {
  calculate();
});
