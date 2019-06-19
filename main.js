const btn = document.querySelector('.talk'),
  content = document.querySelector('.content')


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.onstart = function() {
  console.log('voice is activated.')
}

recognition.onresult = function(event) {
  const current = event.resultIndex
  const transcript = event.results[current][0].transcript
  content.textContent = transcript
  readOutLoud(transcript)
}

btn.addEventListener('click', () => {
  recognition.start()
})

// recognition.onspeechend = function() {
//   alert('voice is deactivated')
// }

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance()
  speech.text = message
  speech.volume = 1
  speech.rate = 2
  speech.pitch = 1

  window.speechSynthesis.speak(speech)
}

try {

}catch(e) {

}
