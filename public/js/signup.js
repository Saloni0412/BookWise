const signUp = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('.signup-user').value.trim();
    const password = document.querySelector('.signup-pass').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/book');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document.getElementById('signup-btn').addEventListener('submit', signUp);