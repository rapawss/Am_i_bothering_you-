const music = document.getElementById('music')
const play = document.getElementById('play')
const back = document.getElementById('back')
const next = document.getElementById('next')
const bar = document.getElementById('bar')
const confess = document.querySelector('.confess')
const instruction = document.querySelector('.instruction')
const current = document.getElementById('current')
const duration = document.getElementById('duration')

let playing = false
let opened = false

function format(t) {
  const m = Math.floor(t / 60)
  const s = Math.floor(t % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

play.onclick = () => {
  if (!playing) {
    music.play()
    play.textContent = 'pause'
    playing = true
    instruction.style.display = 'none'

    if (!opened) {
      confess.classList.remove('hidden')
      opened = true
    }
  } else {
    music.pause()
    play.textContent = 'play'
    playing = false
  }
}

back.onclick = () => music.currentTime -= 10
next.onclick = () => music.currentTime += 10

music.onloadedmetadata = () => {
  bar.max = music.duration
  duration.textContent = format(music.duration)
}

music.ontimeupdate = () => {
  bar.value = music.currentTime
  current.textContent = format(music.currentTime)
}

bar.oninput = () => {
  music.currentTime = bar.value
}