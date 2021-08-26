const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboardpage');
      } else {
        alert('Failed to delete post');
      }
    }
  };

  async function updatePostHandler(event) {
    event.preventDefault();
    const post_title = document.querySelector('#title_field').value;
    const  post_contents= document.querySelector('#content_field').value;
    const id = document.querySelector('#deletePost-Btn').getAttribute('data-id');
    
    const response = await fetch(`/api/posts/update/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        post_title,
        post_contents,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/dashboardpage');
    } else {
      alert('Failed to update post');
    }
  }
  
  document
  .querySelector('#deletePost-Btn')
  .addEventListener('click', delButtonHandler);

  document
  .querySelector('#updatePost-Btn')
  .addEventListener('click', updatePostHandler);
