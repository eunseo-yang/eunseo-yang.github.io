function showDetails(projectNumber) {
    var projectDetails = document.getElementById("project-details-" + projectNumber);
    if (projectDetails.style.display === "block") {
        projectDetails.style.display = "none";
    } else {
        projectDetails.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", function() {
  const homeLink = document.getElementById("home-link");

  homeLink.addEventListener("click", function() {
    window.location.href = "https://eunseo-yang.github.io";
  });
});
