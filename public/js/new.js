// new post handler
const newFormHandler = async function (event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="post-body"]').value;

    console.log(title);
    console.log(content);

    await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            content,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    document.location.replace('/dashboard');
};

//event listener for new post
document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);