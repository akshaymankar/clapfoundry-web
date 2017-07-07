class Controller {
  init() {
    let repository = new Repository("http://clappy.cfapps.io")
    let clappy = new Clappy(repository, window.location.pathname)
    document.getElementById('clapButton').addEventListener('click', clappy.clap.bind(clappy))
  }
}

document.addEventListener('DOMContentLoaded', function(){
  new Controller().init()
})
