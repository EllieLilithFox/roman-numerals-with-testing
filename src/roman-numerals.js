export function arabicToRoman(number) {
  // number = "123"
  let romanNumber = "";
  // 11 => ["1", "2", "3"]
  let arabicDigits = number.split("")
  const romanOnes = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  const romanTens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const romanHundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const romanThousands = ["", "M", "MM", "MMM"];

  if (arabicDigits.length === 1) {
      return romanNumber + 
      romanOnes[parseInt(arabicDigits[0])];

    } else if (arabicDigits.length === 2) {
      return romanNumber + 
      romanTens[parseInt(arabicDigits[0])] + 
      romanOnes[parseInt(arabicDigits[1])];

    } else if (arabicDigits.length === 3) {
      return romanNumber + 
      romanHundreds[parseInt(arabicDigits[0])] + 
      romanTens[parseInt(arabicDigits[1])] + 
      romanOnes[parseInt(arabicDigits[2])];

    } else {
      return romanNumber + 
      romanThousands[parseInt(arabicDigits[0])] +
      romanHundreds[parseInt(arabicDigits[1])] + 
      romanTens[parseInt(arabicDigits[2])] + 
      romanOnes[parseInt(arabicDigits[3])];
    }
}