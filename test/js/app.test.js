describe('app.js', function () {
  
  it('should pass canary test', function () {
    expect(true).to.eq(true);
  });

  describe('sayHello()', function () {

    it('should return Hello from John', function () {
      const result = sayHello('John');
      expect(result).to.eq('Hello from John');
    });

    it('should retun Hello from Mike', function () {
      const result = sayHello('Mike');
      expect(result).to.eq('Hello from Mike');
    });
  })
})