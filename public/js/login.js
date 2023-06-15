const login = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#classname').value.trim();
    const password = document.querySelector('#classname').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/whereverlogincodeis', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/whatevertheloginpageis');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document.querySelector('class/idname').addEventListener('submit', login);
  