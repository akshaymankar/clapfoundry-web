class Repository {
  constructor(url) {
    this.url = url
  }

  sendClap(teamName) {
    fetch(this.url+"/"+teamName, {method: 'POST'})
  }
}
