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

var keywordsColors = {
    "Chatbot": "#69c2b0",
    "Collaboration": "#a569c2",
    "Grounded Theory Approach": "#c26986",
    "Context-aware computing": "#c2a369",
    "Personalization": "#c2b769",
    "LLM": "#8fc269"
};

function generateRandomColor() {
    var hue = Math.floor(Math.random() * 360);
    var saturation = 50; 
    var lightness = 85;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function assignColorsToKeywords() {
    var keywordElements = document.querySelectorAll('.keyword');
    keywordElements.forEach(function (kw) {
        var text = kw.textContent.trim();
        if (keywordsColors[text]) {
            kw.style.backgroundColor = keywordsColors[text];
        } else {
            var randomColor = generateRandomColor();
            kw.style.backgroundColor = randomColor;
            keywordsColors[text] = randomColor;
        }
    });
}

window.onload = assignColorsToKeywords;


