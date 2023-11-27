function calculateBudget() {
    var income = parseFloat(document.getElementById('income').value) || 0;
    var expenses = parseFloat(document.getElementById('expenses').value) || 0;
    var remainingBudget = income - expenses;

    var resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '<h3>Budget Summary</h3>';
    resultContainer.innerHTML += '<p>Income: ₹' + income.toFixed(2) + '</p>';
    resultContainer.innerHTML += '<p>Expenses: ₹' + expenses.toFixed(2) + '</p>';
    resultContainer.innerHTML += '<p>Remaining Budget: ₹' + remainingBudget.toFixed(2) + '</p>';
}