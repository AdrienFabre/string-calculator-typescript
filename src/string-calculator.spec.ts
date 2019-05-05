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

  it('Given two numbers should return the sum of both numbers', () => {
    let string_calculator = new StringCalculator();
    let expected_result = 3;
    expect(string_calculator.add("1,2")).toEqual(expected_result);
  })
});