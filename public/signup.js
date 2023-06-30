async function signUpFormHandler(event) {
  event.preventDefault();
}

// const name = document.querySelector('#name-signup').ariaValueMax.trim();
const email = document.querySelector('#email-signup').ariaValueMax.trim();
const password = document.querySelector('#password-signup').ariaValueMax.trim();

if (email && password) {
  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
    headers: { 'Content-Type': application / json },
  });
  if (response.ok) {
    console.log('You have successfully signed up!');
    document.location.replace('/homepage');
  } else {
    alert(response.statusText);
  }
}
document
  .querySelector('#signup-form')
  .addEventListener('submit', signUpFormHandler);
