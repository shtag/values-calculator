export interface Dictionary {
  ru: LanguageDictionary;
  en: LanguageDictionary;
}

export interface LanguageDictionary {
  length: UnitTranslation;
  volume: UnitTranslation;
  area: UnitTranslation;
  weight: UnitTranslation;
  temperature: UnitTranslation;
}

export interface UnitTranslation {
  name: string;
  values: Record<string, string>;
}

export const quantityDictionary: Dictionary = {
  ru: {
    length: {
      name: 'длина',
      values: {
        meter: 'метр',
        milimeter: 'милиметр',
        kilometer: 'километр',
        inch: 'дюйм',
        foot: 'фут',
        yard: 'ярд',
        mile: 'миля',
      }
    },
    volume: {
      name: 'обьем',
      values: {
        liter: 'литр',
        'cubic meter': 'метр кубический',
        'cubic santimeter': 'сантиметр кубический',
        'cubic milimeter': 'милиметр кубический',
        barrel: 'баррель',
        pint: 'пинта',
        gallon: 'галлон',
      }
    },
    area: {
      name: 'площадь',
      values: {
        liter: 'литр',
        'square centimetre': 'сантиметр кубический',
        'square decimetre': 'дециметр кубический',
        'square metre': 'метр кубический',
        hectare: 'гектар',
        are: 'ар',
        'square foot': 'квадратный фут',
        'square yard': 'квадратный ярд',
        'square mile': 'квадратная миля',
      }
    },
    weight: {
      name: 'вес',
      values: {
        gram: 'грамм',
        kilogram: 'килограмм',
        tonne: 'тонна',
        quintal: 'центрнер',
        carat: 'карат',
        pound: 'фунт',
        ounce: 'унция'
      }
    },
    temperature: {
      name: 'температура',
      values: {
        K: 'кельвин (°К)',
        C: 'цельсий (°C)',
        F: 'фаренгейт (°F)'
      }
    }
  },
  en: {
    length: {
      name: 'length',
      values: {
        meter: 'meter',
        milimeter: 'milimeter',
        kilometer: 'kilometer',
        inch: 'inch',
        foot: 'foot',
        yard: 'yard',
        mile: 'mile',
      }
    },
    volume: {
      name: 'volume',
      values: {
        liter: 'liter',
        'cubic meter': 'cubic meter',
        'cubic santimeter': 'cubic santimeter',
        'cubic milimeter': 'cubic milimeter',
        barrel: 'barrel',
        pint: 'pint',
        gallon: 'gallon',
      }
    },
    area: {
      name: 'area',
      values: {
        liter: 'liter',
        'square centimetre': 'square centimetre',
        'square decimetre': 'square decimetre',
        'square metre': 'square metre',
        hectare: 'hectare',
        are: 'are',
        'square foot': 'square foot',
        'square yard': 'square yard',
        'square mile': 'square mile',
      },
    },
    weight: {
      name: 'weight',
      values: {
        gram: 'gram',
        kilogram: 'kilogram',
        tonne: 'tonne',
        quintal: 'quintal',
        carat: 'carat',
        pound: 'pound',
        ounce: 'ounce'
      }
    },
    temperature: {
      name: 'temperature',
      values: {
        K: 'kelvin (°К)',
        C: 'celsius (°C)',
        F: 'fahrenheit (°F)'
      }
    }
  }
}

export interface GeneralDictionary {
  en: GeneralDictionaryLanguage,
  ru: GeneralDictionaryLanguage,
  uk: GeneralDictionaryLanguage,
}

export interface GeneralDictionaryLanguage {
  title: string;
  select: string;
  settings: string;
  language: string;
  theme: string;
  dark: string;
  light: string;
}

export const generalDictionary: GeneralDictionary = {
  en: {
    title: 'Quantity calculator',
    select: 'Select',
    settings: 'Settings',
    language: 'Language',
    theme: 'Theme',
    dark: 'Dark',
    light: 'Light'
  },
  ru: {
    title: 'Калькулятор величин',
    select: 'Выбрать',
    settings: 'Настройки',
    language: 'Язык',
    theme: 'Тема',
    dark: 'Тёмная',
    light: 'Светлая'
  },
  uk: {
    title: 'Калькулятор величин',
    select: 'Вибрати',
    settings: 'Налаштування',
    language: 'Мова',
    theme: 'Тема',
    dark: 'Темна',
    light: 'Світла'
  }
}