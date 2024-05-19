let openCodepen = ()=>{
    window.open('https://codepen.io')
}
let openGithub = ()=>{
    window.open('https://github.com/princekumarcoder12')
}
let openYoutube = ()=>{
    window.open('https://youtube.com')
}
let openInstagram = ()=>{
    window.open('https://instagram.com')
}
let openFacebook = ()=>{
    window.open('https://facebook.com')
}
let openMonkeytype = ()=>{
  window.open('https://monkeytype.com')
}

let openfontawesome = ()=>{
  window.open('https://fontawesome.com/search')
}

let openchatgpt = ()=>{
  window.open('https://chat.openai.com')
}

let openai = ()=>{
  window.open('https://openai.com')
}

let input = document.querySelector('input');

window.onload = ()=>{
  input.focus()
}

let SearchOnGoogle = ()=>{
    window.open(`https://www.google.com/search?q=${input.value}`)
}

input.onkeyup = (e)=>{
    if(e.key=="Enter"){
        SearchOnGoogle()
    }
}

if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
  
    recognition.onstart = function() {
      console.log('Speech recognition started...');
    };
  
    recognition.onresult = function(event) {
      var transcript = event.results[0][0].transcript;
      input.value = transcript;
      setTimeout(() => {
        window.open(`https://www.google.com/search?q=${input.value}`)
      }, 500);
    };
  
    recognition.onerror = function(event) {
      console.log('Speech recognition error:', event.error);
    };
  
  } else {
    alert('Speech recognition not supported in this browser.');
  }
let MicOpen = ()=>{
    recognition.start()
}
