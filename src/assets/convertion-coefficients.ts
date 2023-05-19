import { Types } from "./dictianary";

type Coefficients = {
  [key in Types]?: {
    [key: string]: number;
  };
};


export const coefficients: Coefficients = {
  length: {
    meter: 1,
    milimeter: 1000,
    kilometer: 0.001, // Updated: 1 kilometer = 0.001 meters
    inch: 39.3701, // Updated: 1 inch ≈ 39.3701 meters
    foot: 3.28084, // Updated: 1 foot ≈ 3.28084 meters
    yard: 1.09361, // Updated: 1 yard ≈ 1.09361 meters
    mile: 0.000621371, // Updated: 1 mile ≈ 0.000621371 meters
  },
  volume: {
    liter: 1000, // Updated: 1 liter = 1000 cubic meters
    'cubic meter': 1,
    'cubic santimeter': 1000000, // Updated: 1 cubic centimeter = 1000000 cubic meters
    'cubic milimeter': 1000000000, // Updated: 1 cubic millimeter = 1000000000 cubic meters
    barrel: 6.28981, // Updated: 1 barrel ≈ 6.28981 cubic meters
    pint: 2113.38, // Updated: 1 pint ≈ 2113.38 cubic meters
    gallon: 264.172, // Updated: 1 gallon ≈ 264.172 cubic meters
  },
  area: {
    'square centimetre': 10000, // Updated: 1 square centimeter = 10000 square meters
    'square decimetre': 100, // Updated: 1 square decimeter = 100 square meters
    'square metre': 1,
    hectare: 0.0001, // Updated: 1 hectare = 0.0001 square meters
    are: 0.01, // Updated: 1 are = 0.01 square meters
    'square foot': 10.7639, // Updated: 1 square foot ≈ 10.7639 square meters
    'square yard': 1.19599, // Updated: 1 square yard ≈ 1.19599 square meters
    'square mile': 0.000000386102, // Updated: 1 square mile ≈ 0.000000386102 square meters
  },
  weight: {
    gram: 1000,
    kilogram: 1,
    tonne: 0.001, // Updated: 1 tonne = 0.001 kilograms
    quintal: 0.01, // Updated: 1 quintal = 0.01 kilograms
    carat: 5000, // Updated: 1 carat = 5000 grams
    pound: 2.20462, // Updated: 1 pound ≈ 2.20462 kilograms
    ounce: 35.274, // Updated: 1 ounce ≈ 35.274 grams
  },
  temperature: {
    K: 1,
    C: 1, // Temperature values in Celsius and Kelvin are the same
    F: 1.8, // Updated: Celsius to Fahrenheit conversion factor
  },
};

export const coefficientsToCI: Coefficients = {
  length: {
    meter: 1,
    milimeter: 0.001,
    kilometer: 1000,
    inch: 0.0254,
    foot: 0.3048, // Updated: 1 foot = 0.3048 meter
    yard: 0.9144, // Updated: 1 yard = 0.9144 meter
    mile: 1609.34, // Updated: 1 mile = 1609.34 meters
  },
  volume: {
    liter: 0.001, // Updated: 1 liter = 0.001 cubic meters
    'cubic meter': 1,
    'cubic santimeter': 0.000001, // Updated: 1 cubic centimeter = 0.000001 cubic meters
    'cubic milimeter': 0.000000001, // Updated: 1 cubic millimeter = 0.000000001 cubic meters
    barrel: 0.158987294928, // Updated: 1 barrel ≈ 0.158987294928 cubic meters
    pint: 0.000473176473, // Updated: 1 pint ≈ 0.000473176473 cubic meters
    gallon: 0.00378541, // Updated: 1 gallon ≈ 0.00378541 cubic meters
  },
  area: {
    'square centimetre': 0.0001, // Updated: 1 square centimeter = 0.0001 square meters
    'square decimetre': 0.01, // Updated: 1 square decimeter = 0.01 square meters
    'square metre': 1,
    hectare: 10000, // Updated: 1 hectare = 10000 square meters
    are: 100, // Updated: 1 are = 100 square meters
    'square foot': 0.092903, // Updated: 1 square foot ≈ 0.092903 square meters
    'square yard': 0.836127, // Updated: 1 square yard ≈ 0.836127 square meters
    'square mile': 2589988.110336, // Updated: 1 square mile ≈ 2589988.110336 square meters
  },
  weight: {
    gram: 0.001,
    kilogram: 1,
    tonne: 1000,
    quintal: 100, // Updated: 1 quintal = 100 kilograms
    carat: 0.0002, // Updated: 1 carat = 0.0002 grams
    pound: 0.453592, // Updated: 1 pound ≈ 0.453592 kilograms
    ounce: 0.0283495, // Updated: 1 ounce ≈ 0.0283495 kilograms
  },
  temperature: {
    K: 1,
    C: 1, // Temperature values in Celsius and Kelvin are the same
    F: 0.555556, // Updated: Fahrenheit to Celsius conversion factor (approximate)
  },
};