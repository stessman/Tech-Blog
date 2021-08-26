async function logoutHandler(event) {
    event.preventDefault();

    // Send request to log user out
    const response = await fetch(`/api/users/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out');
    }
  }

document.querySelector('#logout_button').addEventListener('click', logoutHandler);