class Clappy {
  constructor(repository, teamName) {
    this.repository = repository
    this.teamName = teamName
  }

  clap() {
    this.repository.sendClap(this.teamName)
  }
}
