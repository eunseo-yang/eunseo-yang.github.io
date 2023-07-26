function showDetails(projectNumber) {
    const projectDetails = document.getElementById(`project-details-${projectNumber}`);
    const project = document.getElementById(`project-${projectNumber}`);
    
    if (projectDetails.style.display === 'none') {
        projectDetails.style.display = 'block';
        const rect = project.getBoundingClientRect();
        const projectLeft = rect.left;
        const projectRight = window.innerWidth - rect.right;
        
        if (projectLeft < projectRight) {
            project.style.width = '80%';
            project.style.left = '0';
            project.style.right = '';
        } else {
            project.style.width = '80%';
            project.style.right = '0';
            project.style.left = '';
        }
    } else {
        projectDetails.style.display = 'none';
        project.style.width = '';
        project.style.left = '';
        project.style.right = '';
    }
}

document.addEventListener("DOMContentLoaded", function() {
  const homeLink = document.getElementById("home-link");

  homeLink.addEventListener("click", function() {
    window.location.href = "https://eunseo-yang.github.io";
  });
});
