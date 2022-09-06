let touchstartX = 0
let touchendX = 0
    
function checkDirection() {
  if (touchendX < touchstartX) console.log('swiped left!')
  if (touchendX > touchstartX) console.log('swiped right!')
}

document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  checkDirection()
})