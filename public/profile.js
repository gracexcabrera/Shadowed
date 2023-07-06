async function createProfile() {
  const response = await fetch('/api/users/createprofile', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('.create-profile-form')
  .addEventListener('click', createProfile);
