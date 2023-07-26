function showDetails(projectNumber) {
    const projectDetails = document.getElementById(`project-details-${projectNumber}`);
    const project = document.getElementById(`project-${projectNumber}`);
    
    if (projectDetails.style.display === 'none') {
        projectDetails.style.display = 'block';
        project.style.width = '80%';
        if (project.classList.contains('left')) {
            project.style.marginRight = 'auto';
            project.style.marginLeft = '0';
        }
    } else {
        projectDetails.style.display = 'none';
        project.style.width = 'initial';
    }
}

document.addEventListener("DOMContentLoaded", function() {
  const homeLink = document.getElementById("home-link");

  homeLink.addEventListener("click", function() {
    window.location.href = "https://eunseo-yang.github.io";
  });
});
