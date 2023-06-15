const signupFormHandler = async (event) => {
    event.preventDefault();
  
    //change class/id name according to frontend later
    const name = document.querySelector('#').value.trim();
    //change class/id name according to frontend later
    const password = document.querySelector('#').value.trim();
  
    if (name && password) {
        //need to change route accordingly 
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/book');
      } else {
        alert("Failed to create an account");
      }
    }
  };
  
  //need to chane class/id name
  document
  .querySelector('.')
  .addEventListener('submit', signupFormHandler);