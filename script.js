
const dictionary = {
    "hello": "bonjurro",
    "language": "linguata",
    "universe": "universita",
    // Add more words as needed from the vocabulary list
};

function translateWord() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const resultDiv = document.getElementById('result');

    if (dictionary[inputText]) {
        resultDiv.textContent = `Translation: ${dictionary[inputText]}`;
    } else if (Object.values(dictionary).includes(inputText)) {
        const englishWord = Object.keys(dictionary).find(key => dictionary[key] === inputText);
        resultDiv.textContent = `Translation: ${englishWord}`;
    } else {
        resultDiv.textContent = "No translation available";
    }
}
