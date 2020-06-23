export function arabicToRoman(number) {
  // romanNumber = "X" + "I"
  let romanNumber = "";
  // 11 => ["1", "1"]
  let arabicDigits = number.split("")
  const romanOnes = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  const romanTens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];

  if (arabicDigits.length === 1) {
      return romanNumber + 
      romanOnes[parseInt(arabicDigits[0])];
    }
    else if (arabicDigits.length === 2) {
      return romanNumber + 
      romanTens[parseInt(arabicDigits[0])] + 
      romanOnes[parseInt(arabicDigits[1])];
    }
  // expected output === "XI"
  return romanNumber;
}