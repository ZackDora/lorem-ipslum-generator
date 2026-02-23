const themes = {
    latin: ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore"],
    space: ["nebula", "quasar", "galaxy", "supernova", "orbit", "star", "black-hole", "cosmos", "asteroid", "vacuum", "gravity", "pulsar", "telescope"],
    pirate: ["ahoy", "matey", "scallywag", "plunder", "doubloons", "ship", "ocean", "parrot", "captain", "landlubber", "walk-the-plank", "jolly-roger"]
};

const output = document.getElementById('output');

//generate a sentence
function generateSentence(wordList, length) {
    let sentence = [];
    for (let i=0; i < length; i++) {
        sentence.push(wordList[Math.floor(Math.random() * wordList.length)]);
    }

    let sentenceSeperate = sentence.join(' ');
    return sentenceSeperate.charAt(0).toUpperCase() + sentenceSeperate.slice(1) + '. ';
}

document.getElementById('generate').addEventListener('click', () => {
    const paraCount = Number(document.getElementById('paras').value);
    const wordsPerPara = Number(document.getElementById('words').value);
    const format = document.getElementById('format').value;
    const theme = document.getElementById('word-theme').value;
    const startWithLorem = document.getElementById('start-lorem').checked;

    let resultArr = [];

 
    //This for loop creates ALL the paragraphs
    for (let i=0; i < paraCount; i++) {

        let paragraph = '';
        let wordCount = 0;
        
        //This while loop creates A paragraph
        while (wordCount < wordsPerPara) {
            let senLen = Math.floor((Math.random() * 10)) + 5;
            
            paragraph += generateSentence(themes[theme], senLen);

            wordCount += senLen;
        }

        paragraph = paragraph.trim()

        if (startWithLorem && i===0 && theme === 'latin') {
            paragraph = 'Lorem ipsum ' + paragraph;
        }

        if (format === 'html') {
            resultArr.push(`<p>${paragraph}</p>`);
        } else if (format === 'list') {
            resultArr.push(`<li>${paragraph}</li>`);
        } else {
            resultArr.push(paragraph);
        }      

    }

    if (format === 'list') {
        output.innerHTML = `<ul>${resultArr}\n</ul>`;
    } else if (format === 'html') {
        output.innerText = resultArr.join('\n\n'); // <p> tags already included
    } else {
        output.innerText = resultArr.join('\n\n'); // spacing for plain text
    }
    
})

document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    document.getElementById('theme-toggle').innerText = isDark ? "Light Mode" : "Dark Mode";

    /*
    if (isDark) {
    button.innerText = "Light Mode";
    } else {
        button.innerText = "Dark Mode";
    }

    */
});

document.getElementById('copy').addEventListener('click', () => {
    navigator.clipboard.writeText(output.innerText);
    const notification = document.getElementById('notification');
    
   notification.innerText  = "Copied";

    setTimeout(() => {
        notification.innerText = "";
    }, 3000);
    
});

document.getElementById('download').addEventListener('click', () => {
    //Take the text from my page, turn it into a downloadable text file object
    const blob = new Blob([output.innerText], { type: 'text/plain' });

    //Creates a temporary URL that points to that Blob (the blob file-like object is temporary in the memory right now).
    const url = URL.createObjectURL(blob);
    //create a new temporary <a> element IN THE MEMORY
    const a = document.createElement('a');

    //set the link to the blob's url
    a.href = url;
    //download the file when clicked
    a.download = "ipsum-text.txt";
    //programmatically clicked the file
    a.click();

    //clear the memory
    URL.revokeObjectURL(url);
});

