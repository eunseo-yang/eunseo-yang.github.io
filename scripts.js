function showDetails(projectNumber) {
    const projectDetails = document.getElementById(`project-details-${projectNumber}`);
    const project = document.getElementById(`project-${projectNumber}`);
    if (projectDetails.style.display === 'none') {
        projectDetails.style.display = 'block';
        if (project.classList.contains('left')) {
            projectDetails.style.left = 0;
            projectDetails.style.width = '80%';
            projectDetails.style.margin-right = 'auto';
        } else {
            projectDetails.style.right = 0;
            projectDetails.style.width = '80%';
            projectDetails.style.margin-left = 'auto';
        }
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
