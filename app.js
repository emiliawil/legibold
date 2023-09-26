// Select text elements
const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');

// Function to get the number of characters to be bolded based on word length
function getBoldCharCount(length) {
  if (length <= 2) return 0;
  else if (length <= 3) return 1;
  else if (length <= 7) return 2;
  else if (length <= 10) return 3;
  else if (length <= 12) return 4;
  else return 5;
}

// Loop through text elements
for (let element of textElements) {
  // Split text into words
  const words = element.innerText.split(/\s+/);

  // Create span-wrapped words
  const spanWrappedWords = words.map(word => {
    const boldCharCount = getBoldCharCount(word.length);

    if (boldCharCount <= 0) return word; // No characters to bold

    const boldPart = word.slice(0, boldCharCount);
    const restOfWord = word.slice(boldCharCount);

    return `<span style="font-weight: bold;">${boldPart}</span>${restOfWord}`;
  });

  // Join words back and set innerHTML
  element.innerHTML = spanWrappedWords.join(' ');
}
