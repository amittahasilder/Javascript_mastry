function calculateExpense(expenses) {
  let total = 0;
  for (let i = 0; i < expenses.length; i++) {
    total += expenses[i];
  }
  return total;
}

calculateExpense([200, 500, 300]); // 1000
