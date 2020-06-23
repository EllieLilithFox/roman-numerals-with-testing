import { arabicToRoman } from "./../src/roman-numerals.js";

describe("arabicToRoman", () => {

  test("should take in a one arabic number and convert to the correct roman numeral", () => 
  {
    expect(arabicToRoman("2")).toEqual("II");
    expect(arabicToRoman("3")).toEqual("III");
    expect(arabicToRoman("9")).toEqual("IX");
  })
})