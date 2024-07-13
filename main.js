const calculateFirstFresnelRadius = (distance, frequency) => {
    return 8.656 * Math.sqrt(distance / frequency);
}

const distanceInput = document.getElementById("distanceInput");
const frequencyInput = document.getElementById("frequencyInput");
const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("closeModal");
const acceptModalButton = document.getElementById("acceptModal");
const result = document.getElementById("result");

const handleFormSubmit = (event) => {
    event.preventDefault();
    modal.classList.add('show');
    modal.style.display = 'block';
    let operationResult = calculateFirstFresnelRadius(distanceInput.value, frequencyInput.value);
    if(isNaN(operationResult)){
        operationResult = 0;
    }
    result.textContent = "El radio de la primera zona de Fresnel es de " + operationResult.toFixed(2) + " metros.";
}

const handleCloseModal = () => {
    modal.classList.remove('show');
    modal.style.display = "none";
}

closeModalButton.addEventListener('click', () => handleCloseModal());
acceptModalButton.addEventListener('click', () => handleCloseModal());
