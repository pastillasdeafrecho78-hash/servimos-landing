const header = document.querySelector('.site-header')

let lastY = window.scrollY
window.addEventListener(
  'scroll',
  () => {
    const y = window.scrollY
    if (!header) return
    header.dataset.scrolled = y > 24 ? 'true' : 'false'
    header.dataset.direction = y > lastY ? 'down' : 'up'
    lastY = y
  },
  { passive: true }
)

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'))
    if (!target) return
    event.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
})

document.querySelectorAll('video').forEach((video) => {
  video.defaultPlaybackRate = 1.5
  video.playbackRate = 1.5
})
