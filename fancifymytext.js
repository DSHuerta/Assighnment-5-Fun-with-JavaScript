"use strict";

// Set text within text area to 24pt
function makeBigger() {
  document.getElementById("text-area").style.fontSize = "24pt"; // Mentions 4em (Scales based of base pt font) but specifically sais to use 24pt
}

// Toggles the styles to the text area text when Called
function applyFanciness() {
  const textArea = document.getElementById("text-area");
  const fancyButton = document.getElementById("fancy-shmancy");

  if (fancyButton.checked) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

// Uppercases the text within text area when called
function moo() {
  const textArea = document.getElementById("text-area");
  const sentences = textArea.value.toUpperCase().split(".");

  // A sentence ends with a period (.)
  // Process each part that had a period after it
  for (let i = 0; i < sentences.length - 1; i++) {
    const words = sentences[i].split(" ");

    // console.log(words);

    // Add -Moo to the last non empty word in this sentence however doesnt say to uppercase -Moo 
    // as it wasnt in the text-area by default so im ommiting it from being uppercased when adding it.
    for (let j = words.length - 1; j >= 0; j--) {
      if (words[j].trim() !== "") {
        words[j] += "-Moo";
        break;
      }
    }

    sentences[i] = words.join(" ");
  }

  textArea.value = sentences.join(".");
}
