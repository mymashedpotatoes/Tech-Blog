//signup form handler
const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },

        });
        if (response.ok) {
            console.log('signed in');
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

//event listener for signup form
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
