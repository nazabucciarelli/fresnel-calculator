const calculateFirstFresnelRadius = (distance, frequency) => {
  return 8.656 * Math.sqrt(distance / frequency);
};

const distanceInput = document.getElementById("distanceInput");
const frequencyInput = document.getElementById("frequencyInput");
const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("closeModal");
const acceptModalButton = document.getElementById("acceptModal");
const result = document.getElementById("result");

function trunc(x, posiciones = 0) {
  var s = x.toString();
  var l = s.length;
  var decimalLength = s.indexOf(".") + 1;
  var numStr = s.substr(0, decimalLength + posiciones);
  return Number(numStr);
}

const handleFormSubmit = (event) => {
  event.preventDefault();
  modal.classList.add("show");
  modal.style.display = "block";
  let operationResult = calculateFirstFresnelRadius(
    distanceInput.value,
    frequencyInput.value
  );
  if (isNaN(operationResult)) {
    operationResult = 0;
  }
  result.textContent =
    "El radio de la primera zona de Fresnel es de " +
    trunc(operationResult, 2) +
    " metros.";
};

const handleCloseModal = () => {
  modal.classList.remove("show");
  modal.style.display = "none";
};

closeModalButton.addEventListener("click", () => handleCloseModal());
acceptModalButton.addEventListener("click", () => handleCloseModal());
