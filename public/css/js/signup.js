const signUp = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('classname').value.trim();
    const password = document.querySelector('classname').value.trim();
  
    if (name && password) {
      const response = await fetch('/api/location', {
        method: 'POST',
        body: JSON.stringify({ name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('mainpage');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document.querySelector('whateverthisidisnamed').addEventListener('submit', signUp);