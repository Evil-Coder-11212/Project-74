const submitBtn = document.getElementById("submit-btn");
const resultEl = document.getElementById("result");
const array = [];
const pushElements = () => {
  const inputs1El = document.getElementById("input-1").value;
  const inputs2El = document.getElementById("input-2").value;
  const inputs3El = document.getElementById("input-3").value;
  const inputs4El = document.getElementById("input-4").value;
  array.push(inputs1El, inputs2El, inputs3El, inputs4El);
  array.sort();
  resultEl.textContent = `${array} `;
};

// Calling Function
submitBtn.addEventListener("click", () => {
  console.log(pushElements());
});
