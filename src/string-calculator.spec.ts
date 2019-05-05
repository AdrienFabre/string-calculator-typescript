import { StringCalculator } from './string-calculator'

describe ("StringCalculator", () => {

  it("Given an empty string should return zero", () => {
    let string_calculator = new StringCalculator();
    let expected_result = 0;
    expect(string_calculator.add("")).toEqual(expected_result);
  })

  it("Given a single number should return number", () => {
    let string_calculator = new StringCalculator();
    let expected_result = 1;
    expect(string_calculator.add("1")).toEqual(expected_result);
  })

  it('Given multiple numbers should return the sum of both numbers', () => {
    let string_calculator = new StringCalculator();
    let expected_result = 6;
    expect(string_calculator.add("1,2,3")).toEqual(expected_result);
  })

  it('Given new line as delimitter should return sum of all numbers', () => {
    let string_calculator = new StringCalculator();
    let expected_result = 6;
    expect(string_calculator.add("1\n2\n3")).toEqual(expected_result);
  })


});