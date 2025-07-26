const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Change the position of no button
noBtn.addEventListener("mouseover", () => {
  // Get the dimensions of the parent container and the button itself
  const parentWidth = questionContainer.offsetWidth;
  const parentHeight = questionContainer.offsetHeight;
  const buttonWidth = noBtn.offsetWidth;
  const buttonHeight = noBtn.offsetHeight;

  // Calculate new random positions, ensuring the button stays within the parent
  // We subtract the button's own dimensions so it doesn't go outside the parent's boundary
  const newX = Math.floor(Math.random() * (parentWidth - buttonWidth));
  const newY = Math.floor(Math.random() * (parentHeight - buttonHeight));

  noBtn.style.left = `${newX}px`; // Corrected template literal
  noBtn.style.top = `${newY}px`; // Corrected template literal
});

// Yes button functionality
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit"; // 'inherit' is good for showing an element that was 'display: none;'

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play(); // This will play the video/gif
  }, 3000); // 3 seconds
});