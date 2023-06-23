window.addEventListener('load', function() {
    setTimeout(function() {
      var image = document.querySelector('.glitch-image');
      image.style.opacity = 1;
    }, 1000); 
  });


var visitorCount = parseInt(localStorage.getItem("visitorCount")) || 0;

// Increment the visitor count
visitorCount += 1;

// Save the updated count to localStorage
localStorage.setItem("visitorCount", visitorCount);

// Display the visitor count on the webpage
var countElement = document.getElementById("count");
countElement.textContent = 
 + visitorCount;

// Array of phrases
var phrases = [
    "Yesterday is history, Tomorrow is a mistery, just like this code",
    "Look up",
    "Unplug for a litle while",
    "Go touch some grass",
    "Smile",
    "That's it"
  ];
  
  // Function to select a random phrase
  function selectRandomPhrase() {
    var randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
  }
  
  // Function to update the text content of the element
  function updateRandomPhrase() {
    var randomPhrase = selectRandomPhrase();
    var randomPhraseElement = document.getElementById('random-phrase');
    randomPhraseElement.textContent = randomPhrase;
  }
  
  // Call the updateRandomPhrase function on page load/refresh
  window.addEventListener('load', updateRandomPhrase);
  

 
