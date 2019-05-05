export class StringCalculator {

  public add(numbers:string) {
    if (numbers == "" || numbers == null)
      return 0;
    if (numbers.indexOf(",") !== -1) {
      let array = numbers.split(",")
      var total = 0
      for (let number of array) {
        total += parseInt(number)
      }
      return total
    }
    return parseInt(numbers);
  }
}