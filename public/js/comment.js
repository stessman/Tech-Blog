let DateTime = luxon.DateTime.local();
async function newCommentHandler(event) {
    event.preventDefault();
    const comment_contents = document.querySelector('#comment_field').value;
    const  post_id= document.querySelector('.mainPost').getAttribute('href').split("/post/").pop();
    const date_created = DateTime.toLocaleString(DateTime.DATE_SHORT);

    // Send request to create new user.
    console.log(post_id);
    const response = await fetch(`/api/comments/create`, {
      method: 'POST',
      body: JSON.stringify({
        comment_contents,
        date_created,
        post_id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace(`/post/${post_id}`);
    } else {
      alert('Failed to create user');
    }
  }
  
document.querySelector('.comment-form').addEventListener('submit', newCommentHandler);