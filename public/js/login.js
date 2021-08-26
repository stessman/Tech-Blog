  // Send request to sign in a user.
  const loginHandler = async (event) => {
    event.preventDefault();
  
    console.log("hey");
    const user_name = document.querySelector('#user_name_field').value.trim();
    const password = document.querySelector('#password_field').value.trim();
  
    if (user_name && password) {
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
  document.querySelector('.login-form').addEventListener('submit', loginHandler);