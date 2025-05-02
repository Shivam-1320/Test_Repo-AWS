function showMessage(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  document.getElementById('output').textContent = `Hello, ${name}! Thank you for testing.`;
}
