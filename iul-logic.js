
// iul-logic.js – Core logic for Indexed Universal Life module

document.addEventListener("DOMContentLoaded", () => {
  const calculateBtn = document.getElementById("calculate-iul");
  const resultContainer = document.getElementById("iul-result");

  if (!calculateBtn || !resultContainer) return;

  calculateBtn.addEventListener("click", () => {
    const age = parseInt(document.getElementById("age").value);
    const income = parseFloat(document.getElementById("income").value);
    const contribution = parseFloat(document.getElementById("contribution").value);

    if (isNaN(age) || isNaN(income) || isNaN(contribution)) {
      resultContainer.innerHTML = "<p style='color:red;'>Please enter valid inputs.</p>";
      return;
    }

    const yearsToGrow = 65 - age;
    const estimatedGrowthRate = 0.06;
    const futureValue = contribution * (((1 + estimatedGrowthRate) ** yearsToGrow - 1) / estimatedGrowthRate);

    resultContainer.innerHTML = \`
      <h4>Projection Results</h4>
      <p>Years until age 65: \${yearsToGrow}</p>
      <p>Estimated IUL Value: \$\${futureValue.toFixed(2)}</p>
    \`;
  });
});
