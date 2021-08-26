async function newUserHandler(event) {
    event.preventDefault();
    const user_name = document.querySelector('#user_name_field').value;
    const  password= document.querySelector('#password_field').value;

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
  
document.querySelector('.signup-form').addEventListener('submit', newUserHandler);