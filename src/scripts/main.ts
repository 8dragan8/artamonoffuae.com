console.log('Hello, world!')

const arrayLength = 100
const array = Array.from({ length: arrayLength })

const sectionsRatios = new Map()

let activeSection: [string, string] | null = null

const line = <HTMLSpanElement>document.querySelector('header > nav > .line')
const header = <HTMLSpanElement>document.querySelector('header')
const navBar = <HTMLSpanElement>document.querySelector('header > nav')
const menuToggle = <HTMLInputElement>document.querySelector('#menu-toggle')

const lineStops: Record<string, { left: number, right: number, top: number, bottom: number }> = {}

document.querySelectorAll<HTMLButtonElement>('.links button, .hero-button').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const sectionID = link.dataset.sectionId
    if (sectionID) {
      document.getElementById(sectionID)?.scrollIntoView()
      menuToggle.checked = false
    }
  })
})

function setLineStops() {
  document.querySelectorAll<HTMLAnchorElement>('.links button').forEach((link) => {
    const sectionID = link.dataset.sectionId
    if (sectionID) {
      lineStops[sectionID] = {
        left: link.offsetLeft,
        right: link.offsetLeft + link.offsetWidth,
        top: link.offsetTop,
        bottom: link.offsetTop + link.offsetHeight,
      }
    }
  })

  document.body.style.setProperty('--navbar-height', `${header.offsetHeight}px`)
  updateLinePosition()
  // console.log('🚀 ~ lineStops:', lineStops)
}

function updateLinePosition() {
  if (activeSection === null)
    return
  if (line && lineStops[activeSection[0]]) {
    line.style.left = `${lineStops[activeSection[0]].left}px`
    line.style.right = `calc(100% - ${lineStops[activeSection[0]].right}px)`
    // line.style.bottom = `${lineStops[activeSection[0]].bottom}px`
    line.style.top = `${lineStops[activeSection[0]].bottom - 4}px`
  }
}

setLineStops()

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const sectionId = entry.target.parentElement?.id
      const ratio = entry.intersectionRatio.toFixed(2)

      sectionsRatios.set(sectionId, ratio)

      // console.log(sectionId, ratio, sectionsRatios)
    })
    activeSection = [...sectionsRatios.entries()].reduce((a, e) => e[1] > a[1] ? e : a)
    // console.log('🚀 ~ activeSection:', activeSection)
    updateLinePosition()
  },
  {
    root: null,
    rootMargin: '0.91% 0px 0px 99%',

    threshold: [...array.keys()].map(x => x / 100),
  },
)

// window.addEventListener('resize', setLineStops)
if (navBar)
  new ResizeObserver(setLineStops).observe(navBar)

document.querySelectorAll('section > .section-title, .hero-container, .thank-you').forEach((section) => {
  observer.observe(section)
})
