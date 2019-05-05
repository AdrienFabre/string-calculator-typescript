export class StringCalculator {

  public add(numbers:string) {

    if (parseInt(numbers) < 0)
      throw new Error("The number : '" + numbers + "' is a negative number");

    if (numbers == "" || numbers == null)
      return 0;

    if (numbers.slice(0, 2) == "//") {
        let delimitter = RegExp(numbers[2], 'g');
        numbers = numbers.replace(numbers.slice(0,3), "");
        numbers = numbers.replace(delimitter, ",")
    } 

    if (numbers.indexOf("\n") !== -1) {
      numbers = numbers.replace(/\n/g, ",");
    }

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