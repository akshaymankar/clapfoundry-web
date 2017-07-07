class SelectionController {
  init() {
    let button = document.getElementById('selectTeam')
    let text = document.getElementById('team')
    button.addEventListener('click', function(){
        window.location = text.value
    })
  }
}

document.addEventListener('DOMContentLoaded', function(){
  new SelectionController().init()
})
