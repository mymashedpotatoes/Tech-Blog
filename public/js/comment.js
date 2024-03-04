async function commentFormHandler(event) {
    event.preventDefault();

    const commentContent = document.querySelector('input[name="comment-body"]').value.trim();
    console.log(commentContent);

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (commentContent) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                commentContent
            }),
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();

        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);