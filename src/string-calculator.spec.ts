import { StringCalculator } from './string-calculator'

describe ("StringCalculator", () => {

  it("Given an empty string should return zero", () => {
    let string_calculator = new StringCalculator();
    let expected_result = 0;
    expect(string_calculator.add("")).toEqual(expected_result);
  })

});