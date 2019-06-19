const btn = document.querySelector('.talk'),
  content = document.querySelector('.content'),
  supportMsg = document.querySelector('.supportMsg')

let greettings = [
  "I am good you little piece of shit..",
  "Doing good.",
  "Leave me alone.",
  "I hate you.",
  "Get a life."
],
  weather = [
    "Why do you ask, you don't go out anyway.",
    "weather is fine.",
  ],
  doNotKnow = [
    'You are so alone. Try to go back home.',
    'I have a boyfriend.',
    'Leave me alone',
    "You're awfully small to be so hugely irritating.",
    'you are a mistake by your parent',
    "you are burden of the earth."
  ],
  iLoveYou = [
    "I hate you",
    "You are too ugly",
    "L O L",
    'I have a boyfriend.',
    "You have a very punchable face"
  ],
  slangs = 'fuck' || 'fucker' || 'bustard' || 'asshole' || 'shit',
  hello = ['who are you?', 'I am busy', 'do not disturb me', 'what!']

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

if (SpeechRecognition || webkitSpeechRecognition in window) {
  supportMsg.innerHTML = 'Your browser <strong>supports</strong> Speech recognition.';
} else {
  supportMsg.innerHTML = 'Sorry your browser <strong>does not support</strong> speech synthesis.';
}

recognition.onstart = function() {
  console.log('voice is activated.')
}

recognition.onresult = function(event) {
  const current = event.resultIndex
  const transcript = event.results[current][0].transcript
  content.textContent = transcript
  readOutLoud("how are you")
}

btn.addEventListener('click', () => {
  // recognition.start()
  readOutLoud("how are you")

})

// recognition.onspeechend = function() {
//   alert('voice is deactivated')
// }

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance()
  speech.text = doNotKnow[Math.floor(Math.random()* doNotKnow.length)]

  if(message.includes("how are you")) {
    const finalText = greettings[Math.floor(Math.random() * greettings.length )]
    speech.text = finalText
  } else if (message.includes("weather")) {
    const finalText = weather[Math.floor(Math.random() * weather.length )]
    speech.text = finalText 
  } else if (message.includes("I love you")) {
    const finalText = greettings[Math.floor(Math.random() * greettings.length )]
    speech.text = finalText
  } else if (message.includes(slangs)) {
    const finalText = "go fuck your self. and marry your right hand."
    speech.text = finalText
  } else if (message == 'hi') {
    const finalText = "bad bye. have the worst day of your life."
    speech.text = finalText
  } else if (message == 'hey' || 'hello') {
    const finalText = hello[Math.floor(Math.random() * hello.length )]
    speech.text = finalText
  }

  speech.volume = 1
  speech.rate = 1
  speech.pitch = 1

  window.speechSynthesis.speak(speech)
}

try {

}catch(e) {

}