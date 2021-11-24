const quoteText=document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button");
soundBtn=document.querySelector(".sound"),
copyBtn=document.querySelector(".copy"),
twitterBtn=document.querySelector(".twitter");


//random quto funsction
function randomQute(){
    quoteBtn.classList.add("loading")
    quoteBtn.innerText="Loading Quote..."
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
       
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText="New Quote"
        quoteBtn.classList.remove("loading")
    });
}

soundBtn.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance(quoteText.innerText);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", ()=>{
    let tweetUrl='https://twitter.com/?lang=en=quoteText.innerText';
    window.open(tweetUrl,"_blank");
});

quoteBtn.addEventListener("click",randomQute)