console.log('Hello, world!')

const arrayLength = 100
const array = Array.from({ length: arrayLength })

const sectionsRatios = new Map()

let activeSection = null

const line = document.querySelector<HTMLSpanElement>('header > nav > .line')

const lineStops: Record<string, { left: string, width: string }> = {}

function setLineStops() {
  document.querySelectorAll<HTMLAnchorElement>('.links a').forEach((link) => {
    const sectionID = link.dataset.sectionId
    if (sectionID) {
      lineStops[sectionID] = {
        left: `${link.offsetLeft.toString()}px`,
        width: `${link.offsetWidth.toString()}px`,
      }
    }
  })
  // console.log('🚀 ~ lineStops:', lineStops)
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
    if (line && lineStops[activeSection[0]]) {
      line.style.left = lineStops[activeSection[0]].left
      line.style.width = lineStops[activeSection[0]].width
    }
  },
  {
    root: null,
    rootMargin: '0.91% 0px 0px 99%',

    threshold: [...array.keys()].map(x => x / 100),
  },
)

window.addEventListener('resize', setLineStops)

document.querySelectorAll('section > .section-title, .hero-container, .thank-you').forEach((section) => {
  observer.observe(section)
})
