export class StringCalculator {

  public add(numbers:string) {
    if(numbers == "" || numbers == null)
      return 0;
    return parseInt(numbers);
  }
}