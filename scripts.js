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
    "Chatbot": "hsl(160, 50%, 85%)",
    "Collaboration": "hsl(276, 50%, 85%)",
    "Grounded Theory Approach": "hsl(340, 50%, 85%)",
    "Context-aware computing": "hsl(40, 50%, 85%)",
    "Personalization": "hsl(60, 50%, 85%)",
    "LLM": "hsl(96, 50%, 85%)"
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


