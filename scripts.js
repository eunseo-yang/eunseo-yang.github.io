function showDetails(projectNumber) {
    var projectDetails = document.getElementById('project-details-' + projectNumber);
    if (projectDetails.style.display === 'none') {
        projectDetails.style.display = 'block';
    } else {
        projectDetails.style.display = 'none';
    }
}

document.addEventListener("DOMContentLoaded", function() {
  const homeLink = document.getElementById("home-link");

  homeLink.addEventListener("click", function() {
    window.location.href = "https://eunseo-yang.github.io";
  });
});
