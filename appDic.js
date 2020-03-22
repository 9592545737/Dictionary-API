// Init Dictionary
const dictionary = new Dictionary;
// Search Input
const searchWord = document.getElementById('wordInput');
// Event Listerner
searchWord.addEventListener('keyup', (e) => {
    // Get Input Text
    const word = e.target.value;

    if(word !== ''){
        // Make http call
        dictionary.getWord(word) 
        .then(data => {
            console.log(data);
        })
    }
});