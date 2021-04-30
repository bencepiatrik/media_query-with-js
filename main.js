const mediaQueryMobile = window.matchMedia('(min-width: 320px)')
const mediaQueryTablet = window.matchMedia('(min-width: 481px)')
const mediaQueryLaptop = window.matchMedia('(min-width: 769px)')
const mediaQueryDesktop = window.matchMedia('(min-width: 1025px)')
const mediaQueryExtra = window.matchMedia('(min-width: 1201px)')

let textBox = document.querySelector('.textbox')
let mediaQuery = []

function mediaSize(e) {
  if (mediaQueryMobile.matches) {
    mediaQuery = []
    mediaQuery.push('mobile (above 320px)')
  }
  if (mediaQueryTablet.matches) {
    mediaQuery = []
    mediaQuery.push('tablet (above 480px)')
  }
  if (mediaQueryLaptop.matches) {
    mediaQuery = []
    mediaQuery.push('laptop (above 768px)')
  }
  if (mediaQueryDesktop.matches) {
    mediaQuery = []
    mediaQuery.push('desktop (above 1024px)')
  }
  if (mediaQueryExtra.matches) {
    mediaQuery = []
    mediaQuery.push('extra (above 1200px)')
  }
  textBox.innerHTML = mediaQuery[0]
}
mediaQueryMobile.addListener(mediaSize)
mediaQueryTablet.addListener(mediaSize)
mediaQueryLaptop.addListener(mediaSize)
mediaQueryDesktop.addListener(mediaSize)
mediaQueryExtra.addListener(mediaSize)

mediaSize()

