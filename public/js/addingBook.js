// import image url function
const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#new-book-name").value.trim();
  const author = document.querySelector("#new-book-author").value.trim();
  const genre = document.querySelector("#new-book-genre").value.trim();

  if (name && author) {
    const response = await fetch(`/api/book`, {
      method: "POST",
      body: JSON.stringify({ name, author, genre }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    //need to change class or id according to handlebars
    if (response.ok) {
      document.location.replace("/book");
    } else {
      alert("Failed to create post");
    }
  }
};

// const delButtonHandler = async (event) => {
//   //need to change class or id according to handlebars
//   if (event.target.hasAttribute("")) {
//     const id = event.target.getAttribute("");

//     const response = await fetch(`/api/book/${id}`, {
//       method: "DELETE",
//     });

//    //need to change class or id according to handlebars
//     if (response.ok) {
//       document.location.replace("");
//     } else {
//       alert("Failed to delete project");
//     }
//   }
// };

//need to change class or id according to handlebars
document
  .querySelector("#new-book-form")
  .addEventListener("submit", newFormHandler);

// document
//   .querySelector('')
//   .addEventListener('click', delButtonHandler);
