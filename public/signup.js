async function signUpFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  console.log(username, email, password);
  if (email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        email,
        username,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      console.log('You have successfully signed up!');
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}
document
  .querySelector('.signup-form')
  .addEventListener('submit', signUpFormHandler);
