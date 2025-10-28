const form = document.getElementById('feedback-form');
const feedbackList = document.getElementById('feedback-list');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = form.querySelector('input[type="text"]').value || 'Anonymous';
  const message = form.querySelector('textarea').value;

  if(!message) return alert("Please enter a message.");

  const feedbackCard = document.createElement('div');
  feedbackCard.className = 'feedback-card';
  feedbackCard.innerHTML = `<strong>${name}:</strong> <p>${message}</p>`;

  feedbackList.prepend(feedbackCard); // add new feedback at top
  form.reset();
});
