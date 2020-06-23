export function arabicToRoman(number) {
  let romanNumber = "";
  const romanOnes = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  romanNumber = romanOnes[parseInt(number)];
  return romanNumber;
}