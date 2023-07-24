document.addEventListener("DOMContentLoaded", function () {
  const projectItems = document.querySelectorAll("#projects li");

  projectItems.forEach((item) => {
    item.addEventListener("click", function () {
      const projectDescription = item.querySelector("p");

      if (projectDescription.style.display === "block") {
        projectDescription.style.display = "none";
      } else {
        projectDescription.style.display = "block";
      }
    });
  });
});
