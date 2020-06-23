import { arabicToRoman } from "./../src/roman-numerals.js";

describe("arabicToRoman", () => {

  test("should take in a one arabic number and convert to the correct roman numeral", () => 
  {
    expect(arabicToRoman("2")).toEqual("II");
    expect(arabicToRoman("3")).toEqual("III");
    expect(arabicToRoman("9")).toEqual("IX");
  });

  test("should take in an arabic number with two digits and convert it to the correct roman numeral", () => 
  {
    expect(arabicToRoman("12")).toEqual("XII");
    expect(arabicToRoman("30")).toEqual("XXX");
    expect(arabicToRoman("63")).toEqual("LXIII");
  });

  test("should take in an arabic number with three digits and convert it to the correct roman numeral", () => 
  {
    expect(arabicToRoman("123")).toEqual("CXXIII");
    expect(arabicToRoman("989")).toEqual("CMLXXXIX");
    expect(arabicToRoman("422")).toEqual("CDXXII");
  });
})