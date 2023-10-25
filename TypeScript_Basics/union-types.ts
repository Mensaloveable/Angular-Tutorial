let something: string | number;
something = "Loveable";
something = 6000;

function addNumbers(number1: number, number2: number): number | undefined {
  if (number1 === null || number2 === null) {
    return undefined;
  } else {
    return number1 + number2;
  }
}
