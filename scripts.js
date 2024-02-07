document.addEventListener("DOMContentLoaded", function() {
  const homeLink = document.getElementById("home-link");

  homeLink.addEventListener("click", function() {
    window.location.href = "https://eunseo-yang.github.io";
  });
});

document.querySelectorAll('.publication').forEach(publication => {
    publication.addEventListener('click', function() {
        window.location.href = this.getAttribute('data-url');
    });
});

