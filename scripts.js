const projectsWrapper = document.querySelector('.projects-wrapper');
const prevArrow = document.getElementById('prev');
const nextArrow = document.getElementById('next');
const projectWidth = 48; // The width percentage of each project item

let currentPosition = 0;
const numProjectsPerPage = 4;
const totalProjects = 8;

prevArrow.addEventListener('click', () => {
  if (currentPosition > 0) {
    currentPosition -= projectWidth * numProjectsPerPage;
    updateProjectsPosition();
  }
});

nextArrow.addEventListener('click', () => {
  if (currentPosition < (totalProjects - numProjectsPerPage) * projectWidth) {
    currentPosition += projectWidth * numProjectsPerPage;
    updateProjectsPosition();
  }
});

function updateProjectsPosition() {
  projectsWrapper.style.transform = `translateX(-${currentPosition}%)`;
}

document.addEventListener("DOMContentLoaded", function() {
  const homeLink = document.getElementById("home-link");

  homeLink.addEventListener("click", function() {
    window.location.href = "https://eunseo-yang.github.io";
  });
});
