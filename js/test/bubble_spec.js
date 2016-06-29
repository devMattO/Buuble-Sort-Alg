describe('Bubble Sort Alg', function(){

  it('should be a function', function(){
    expect(bubbleSort).to.be.a('function');
  });

  it('should take an input Array and return sorted array', function(){
    expect(bubbleSort([7,2,8,88,49,29,5,4,9,6,3,1])).to.equal([1,2,3,4,5,6,7,8,9,29,49,88]);
  });









});