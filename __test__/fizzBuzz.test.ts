import { FizzBuzz } from "../src/fizzBuzz";

test("入力値0より小さい場合エラーメッセージを返す", () => {
  // Given 必要な前提条件を用意
  const invalidInput = -1;
  const errorMsg = "0以上100以下の整数を入力してください";

  // When
  const output = FizzBuzz(invalidInput);

  // Then
  expect(output).toBe(errorMsg);
});

test("入力値100より大きい場合エラーメッセージを返す", () => {
  // Given 必要な前提条件を用意
  const invalidInput = 101;
  const errorMsg = "0以上100以下の整数を入力してください";

  // When
  const output = FizzBuzz(invalidInput);

  // Then
  expect(output).toBe(errorMsg);
});

test("入力値が小数点を含む場合、エラーメッセージを返す", () => {
  // Given 必要な前提条件を用意
  const invalidInput = 1.1;
  const errorMsg = "0以上100以下の整数を入力してください";

  // When
  const output = FizzBuzz(invalidInput);

  // Then
  expect(output).toBe(errorMsg);
});

test("入力した値を返す", () => {
  // Given
  const input = 1;
  // When
  const output = FizzBuzz(input);

  // Then
  expect(output).toBe(input);
});

test("入力した値が3の倍数のときはfizzを返す", () => {
  // Given
  const input = 6;
  // When
  const output = FizzBuzz(input);

  // Then
  expect(output).toBe("Fizz");
});

test("入力した値が5の倍数のときはbuzzを返す", () => {
  // Given
  const input = 5;
  // When
  const output = FizzBuzz(input);

  // Then
  expect(output).toBe("Buzz");
});

test("入力した値が15の倍数のときはFizzBuzzを返す", () => {
  // Given
  const input = 45;
  // When
  const output = FizzBuzz(input);

  // Then
  expect(output).toBe("FizzBuzz");
});

