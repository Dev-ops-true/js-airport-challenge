describe("Fizz", () => {

  let fizzbuzz

  beforeEach( () => {
    fizzbuzz = new FizzBuzz();
  })
  describe("multiples of 3", () => {
    it("should Fizz for 3", () => {
      expect(fizzbuzz.play(3)).toEqual("Fizz")
    })
  })

  describe("multiples of 5", () => {
    it("should Buzz for 5", () => {
      expect(fizzbuzz.play(5)).toEqual("Buzz")
    })
  })

  describe("multiples of 3 and 5", () => {
    it("should FizzBuzz for numbers divisible by 3 and 5", () => {
      expect(fizzbuzz.play(15)).toEqual("FizzBuzz")
    })
  })
}) ;
