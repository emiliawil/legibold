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
  const words = element.textContent.split(/\s+/);

  // Create span-wrapped words
  const spanWrappedWords = words.map(word => {
    const boldCharCount = getBoldCharCount(word.length);

    if (boldCharCount <= 0) return document.createTextNode(word); // No characters to bold

    const boldPart = document.createElement('span');
    boldPart.style.fontWeight = 'bold';
    boldPart.textContent = word.slice(0, boldCharCount);

    const restOfWord = document.createTextNode(word.slice(boldCharCount));

    // Create a document fragment to hold both parts
    const fragment = document.createDocumentFragment();
    fragment.appendChild(boldPart);
    fragment.appendChild(restOfWord);

    return fragment;
  });

  // Clear the content of the element
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }

  // Append the span-wrapped words to the element
  spanWrappedWords.forEach(word => {
    element.appendChild(word);
    element.appendChild(document.createTextNode(' ')); // Add space between words
  });
}

