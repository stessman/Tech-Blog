let DateTime = luxon.DateTime.local();
async function newPostHandler(event) {
    event.preventDefault();
    const post_title = document.querySelector('#title_field').value;
    const  post_contents= document.querySelector('#content_field').value;
    const date_created = DateTime.toLocaleString(DateTime.DATE_SHORT);

    // Send request to create new Post
    const response = await fetch(`/api/posts/create`, {
      method: 'POST',
      body: JSON.stringify({
        post_title,
        post_contents,
        date_created,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create post');
    }
  }
  
document.querySelector('.createpost-form').addEventListener('submit', newPostHandler);