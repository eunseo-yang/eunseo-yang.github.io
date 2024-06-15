document.addEventListener("DOMContentLoaded", function() {
  const homeLink = document.getElementById("home-link");

  homeLink.addEventListener("click", function() {
    window.location.href = "index.html"; // 처음 페이지로 이동
  });
});

document.querySelectorAll('.publication').forEach(publication => {
    publication.addEventListener('click', function() {
        var destinationUrl = this.getAttribute('data-url'); 
        window.location.href = destinationUrl; 
    });
});

var keywordsColors = {
    "Chatbot": "#69c2b0",
    "Collaboration": "#a569c2",
    "Grounded Theory Approach": "#c26986",
    "Context-aware computing": "#c2a369",
    "Personalization": "#c2b769",
    "LLM": "#8fc269"
    "Reinforcement Learning" : "#a569c3",
    "Proactive System" : "#87ceeb"
};

function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
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


