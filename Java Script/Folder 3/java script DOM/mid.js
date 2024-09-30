// "use strict"
let paragraph = document.getElementById("paragraph");
let paragraph_text = paragraph.innerHTML;

let words = paragraph_text.split(" ");

for(i = 0; i < words.length; i++){
    if(words[i].length >=8){
        
        words[i] = `<mark>${words[i]}</mark>`;
    }
    }
    paragraph.innerHTML = words.join (" ");

    let link = document.createElement("a");
    link.href ="https://chatgpt.com/";
    link.textContent = "source";
    document.body.appendChild(link);

    paragraph_text = paragraph.innerHTML;
    paragraph.innerHTML = paragraph_text.split(". ").join(".\n");

    let word = paragraph_text.split(' ');


    let wordCount = 0;
    for (let i = 0; i < word.length; i++) {
    if (word[i].trim().length > 0) {  
        wordCount++;
    }
}
    
    document.getElementById('wordCount').textContent = 'Word Count: ' + wordCount;

    
