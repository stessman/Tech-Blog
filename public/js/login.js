async function newUserHandler(event) {
    event.preventDefault();
    const name = document.querySelector('#name-signup').value;
    const  password= document.querySelector('#password-signup').value;

    // Send request to create new user.
    const response = await fetch(`/api/users/signup`, {
      method: 'POST',
      body: JSON.stringify({
        user_name,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create user');
    }
  }

  // Send request to sign in a user.
  const loginHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ user_name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
  };
  
  document.querySelector('.signup-form').addEventListener('submit', newUserHandler);
  document.querySelector('.login-form').addEventListener('submit', loginHandler);