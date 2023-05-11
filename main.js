const form = document.querySelector('form');
const input = document.querySelector('input');
const output = document.createElement('p');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    output.textContent = input.value;
    document.body.appendChild(output);
});

function displayQuestions() {
    const questionsContainer = document.getElementById("questions-container");
    const questionsList = questions.map((question) => `<li>${question}</li>`).join("");
    questionsContainer.innerHTML = `<ul>${questionsList}</ul>`;
  }
  
  displayQuestions();
  