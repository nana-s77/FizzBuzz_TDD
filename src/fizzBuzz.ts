export const FizzBuzz: (input: number) => void = (input) => {
  const isLower0: boolean = input < 0;
  const isUpper100: boolean = input > 100;
  const isInteger: boolean = !Number.isInteger(input);
  if (isLower0 || isUpper100 || isInteger) {
    return "0以上100以下の整数を入力してください";
  }

  if (input % 15 === 0) {
    return "FizzBuzz";
  }

  if (input % 3 === 0) {
    return "Fizz";
  }

  if (input % 5 === 0) {
    return "Buzz";
  }

  return input;
};

