const btn = document.querySelector('.talk'),
  content = document.querySelector('.content')


const SpeechReconition = window.SpeechReconition || window.webkitSpeechRecognition
const recognition = new SpeechReconition()

recognition.onstart = function() {
  console.log('voice is activated.')
}

recognition.onresult = function(event) {
  const current = event.resultIndex
  const transcript = event.results[current][0].transcript
  content.textContent = transcript
}

btn.addEventListener('click', () => {
  recognition.start()
})

recognition.onspeechend = function() {
  alert('voice is deactivated')
}

try {

}catch(e) {

}