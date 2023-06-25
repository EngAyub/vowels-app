const inputText = document.getElementById("input-text");
const countButton = document.getElementById("count-btn");
const vowelCount = document.getElementById("vowel-count");

function countVowels() {
  const vowelss  = inputText.value.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < vowelss.length; i++) {
    if (vowels.includes(vowelss [i])) {
      count++;
    }
  }

  vowelCount.textContent = count;
}
countButton.addEventListener("click", countVowels);