export function shorted(number: number): string {
  let coef = 10
  if (number > 10) coef = 9;
  if (number > 100) coef = 7;
  if (number > 1000) coef = 5;
  if (number > 10000) coef = 4;
  if (number > 100000) coef = 3;
  const newNum = number.toFixed(coef)
  const result = parseFloat(newNum.replace(/0+$/, ""))
  // console.log(number, Math.round(number))
  return result.toString()
}