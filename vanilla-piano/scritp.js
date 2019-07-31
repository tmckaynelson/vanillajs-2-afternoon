window.addEventListener('keypress', (event) => {
    let tone = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    if (!tone) {return}
    let pianoKey = document.querySelector(`polygon[data-key="${event.keyCode}"]`)
    tone.currentTime = 0
    pianoKey.classList.add('pressed')
    tone.play()
    setTimeout(() => {pianoKey.classList.remove('pressed')}, 300)
})
