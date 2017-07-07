describe('Clappy', function() {
  it('should tell repository to clap', function(){
    let repository = new Repository()
    let clappy = new Clappy(repository, 'team')
    spyOn(repository, 'sendClap')
    clappy.clap()
    expect(repository.sendClap).toHaveBeenCalledWith('team')
  })

});
