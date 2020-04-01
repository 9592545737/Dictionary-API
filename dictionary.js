class Dictionary{
    constructor(){
        this.apiKey = 'bb26e775-8325-4182-b158-cbd82dd56e45';
    }

    async getWord(word){
    const wordResponse = await fetch(`https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${this.apiKey}`);        

    const wordData = await wordResponse.json();

    return wordData;
        
    }
}
// https://www.dictionaryapi.com/api/v3/references/learners/json/apple?key=your-api-key