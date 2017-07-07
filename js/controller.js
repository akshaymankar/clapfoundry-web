class Controller {
  init() {
    let repository = new Repository("http://clappy.cfapps.io")
    let clappy = new Clappy(repository, window.location.pathname)
    document.getElementById('clapButton').addEventListener('click', clappy.clap.bind(clappy))
    let timeDisplay = document.getElementById('timeDisplay')
    let view = new ClappyView(timeDisplay)
    view.start(4.382)
  }
}

document.addEventListener('DOMContentLoaded', function(){
  new Controller().init()
})
