const newFormHandler = async (event) => {
  event.preventDefault();

  //need to change class or id according to handlebars
  const bookTitle = document.querySelector("#").value.trim();
  const author = document.querySelector("#").value.trim();

  if (bookTitle && author) {
    const response = await fetch(`/api/book`, {
      method: "POST",
      body: JSON.stringify({ bookTitle, author }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    //need to change class or id according to handlebars
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to create post");
    }
  }
};

const delButtonHandler = async (event) => {
  //need to change class or id according to handlebars
  if (event.target.hasAttribute("")) {
    const id = event.target.getAttribute("");

    const response = await fetch(`/api/book/${id}`, {
      method: "DELETE",
    });

   //need to change class or id according to handlebars
    if (response.ok) {
      document.location.replace("");
    } else {
      alert("Failed to delete project");
    }
  }
};

//need to change class or id according to handlebars
document
  .querySelector('')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('')
  .addEventListener('click', delButtonHandler);