class Controller {
  init() {
    let repository = new Repository("http://clappy.cfapps.io")
    let timeDisplay = document.getElementById('timeDisplay')
    let view = new ClappyView(timeDisplay)
    let clappy = new Clappy(repository, window.location.pathname, view)
    document.getElementById('clapButton').addEventListener('click', clappy.clap.bind(clappy))
    clappy.poll()
  }
}

document.addEventListener('DOMContentLoaded', function(){
  new Controller().init()
})
