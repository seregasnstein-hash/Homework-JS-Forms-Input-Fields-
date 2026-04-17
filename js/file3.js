const books = document.querySelectorAll(".text");
console.log(books);

books.forEach((elem) => {
  elem.addEventListener("click", () => {
    books.forEach((item) => {
      item.classList.remove("active");
    });
    elem.classList.add("active");
  });
});
