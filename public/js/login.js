const login = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#login-user").value.trim();
  const password = document.querySelector("#login-pass").value.trim();

  if (username && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/book");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector("#login-form").addEventListener("submit", login);
