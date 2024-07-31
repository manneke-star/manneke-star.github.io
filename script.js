const themeButton = document.getElementById('theme-button');
const body = document.body;

themeButton.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});

const form = document.getElementById('sign-petition');
const signatures = document.getElementById('signatures');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;

  const newSignature = document.createElement('p');
  newSignature.textContent = `🖊️ ${name} supports this.`;
  if (validateForm()) {
    return;
  }

  signatures.appendChild(newSignature);

  form.reset();
});
const validateForm = () => {
  let containsErrors = false;
  let petitionInputs =
    document.getElementById("sign-petition").elements;
  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      containsErrors = true;
      petitionInputs[i].classList.add('error');
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }

  return containsErrors;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');

  const options = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });
});