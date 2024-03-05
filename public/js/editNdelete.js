const postId = document.querySelector('input[name="post-id"]').value;

//edit form handler
const editFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const content = document.querySelector('textarea[name="post-body"]').value;

  console.log(title);
  console.log(content);

  const response = await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  console.log(response);
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to update your post');
  }
  document.location.replace('/dashboard');
};

// delete form handler
async function deleteFormHandler(event) {
  event.preventDefault();
    
    const response = await fetch(`/api/post/${postId}`, {
      method: 'DELETE',
      body: JSON.stringify({
        post_id: postId
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
    
};

// event listener for delete form
document.querySelector('#delete-btn').addEventListener('click', deleteFormHandler);

//event listener for edit form
document.querySelector('#edit-post-form').addEventListener('submit', editFormHandler);