function showDetails(projectNumber) {
    const projectDetails = document.getElementById(`project-details-${projectNumber}`);
    const project = document.getElementById(`project-${projectNumber}`);
    if (projectDetails.style.display === 'none') {
        projectDetails.style.display = 'block';
        const boundingRect = project.getBoundingClientRect();
        const leftSpace = boundingRect.left;
        const rightSpace = window.innerWidth - boundingRect.right;
        
        if (leftSpace > rightSpace) {
            // 왼쪽에 더 많은 공간이 있는 경우
            projectDetails.style.left = 0;
            projectDetails.style.right = 'auto';
            projectDetails.style.width = 'calc(80% - 20px)';
        } else {
            // 오른쪽에 더 많은 공간이 있는 경우
            projectDetails.style.right = 0;
            projectDetails.style.left = 'auto';
            projectDetails.style.width = 'calc(80% - 20px)';
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
