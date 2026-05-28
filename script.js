document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'))
    if (!target) return
    event.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
})

const pushConversionEvent = (name, meta = {}) => {
  const payload = {
    event: name,
    timestamp: Date.now(),
    page: window.location.pathname,
    ...meta
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(payload)
  window.servimosEvents = window.servimosEvents || []
  window.servimosEvents.push(payload)
}

document.querySelectorAll('[data-cta]').forEach((cta) => {
  cta.addEventListener('click', () => {
    pushConversionEvent('cta_click', { cta: cta.dataset.cta })
  })
})

const heroVideo = document.querySelector('#servimos-video')
if (heroVideo) {
  let reported = false
  heroVideo.addEventListener('play', () => {
    if (reported) return
    reported = true
    pushConversionEvent('video_play', { video: 'servimos-video' })
  })
}
