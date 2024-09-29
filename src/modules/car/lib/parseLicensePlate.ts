type LicensePlate = {
  code: string
  country?: string
  flag: string
  letters: string
  numbers: string
  regionCode: string
  regionName: string
}

const regionCodes: { [key: string]: string } = {
  "01": "Нур-Султан (Астана)",
  "02": "Алматы",
  "03": "Акмолинская область",
  "04": "Актюбинская область",
  "05": "Алматинская область",
  "06": "Атырауская область",
  "07": "Западно-Казахстанская область",
  "08": "Жамбылская область",
  "09": "Карагандинская область",
  "10": "Костанайская область",
  "11": "Кызылординская область",
  "12": "Мангистауская область",
  "13": "Туркестанская область",
  "14": "Павлодарская область",
  "15": "Северо-Казахстанская область",
  "16": "Восточно-Казахстанская область",
  "17": "Шымкент",
  "18": "Абайская область",
  "19": "Жетысуская область",
  "20": "Улытауская область",
}

const diplomaticCodes: { [key: string]: string } = {
  "001": "Соединённые Штаты Америки",
  "002": "Исламская Республика Иран",
  "003": "Китайская Народная Республика",
  "004": "Турецкая Республика",
  "005": "Федеративная Республика Германия",
  "006": "Исламская Республика Пакистан",
  "007": "Государство Израиль",
  "008": "Республика Индия",
  "009": "Канада",
  "010": "Корейская Народно-Демократическая Республика",
  "011": "Французская Республика",
  "012": "Монголия",
  "013": "Итальянская Республика",
  "014": "Республика Куба",
  "015": "Венгрия",
  "016": "Ливийская Республика",
  "017": "Румыния",
  "018": "Соединённое Королевство Великобритании и Северной Ирландии",
  "019": "Российская Федерация",
  "020": "Республика Армения",
  "021": "Япония",
  "022": "Международная Миссия Красного Креста",
  "023": "Республика Узбекистан",
  "024": "Государство Палестина",
  "025": "Республика Корея",
  "032": "Польша",
  "037": "ЮНИСЕФ",
  "040": "Делегация Европейского союза",
  "044": "Австралийский Союз",
  "046": "ЮНЕСКО",
}

export function parseLicensePlate(input: string): LicensePlate | null {
  // Define regex patterns for different license plate formats
  const patterns = [
    {
      regex: /(\d{3})([A-Z]{2,3})(\d{2})/,
      type: "regular",
    },
    {
      regex: /([A-Z])(\d{3})(\d{3})/,
      type: "foreign",
    },
    {
      regex: /([A-Z])(\d{4})(\d{2})/,
      type: "commerce",
    },
    {
      regex: /([A-Z]{2})(\d{2})([A-Z]{2})(\d{2})/,
      type: "motorcycle",
    },
    {
      regex: /([A-Z])(\d{3})(\d{3})/,
      type: "diplomatic",
    },
  ]

  // Iterate through patterns to find a match
  for (const pattern of patterns) {
    const match = input.match(pattern.regex)

    if (match) {
      let regionCode = ""

      switch (pattern.type) {
        case "regular": {
          regionCode = match[3]

          return {
            code: "KZ",
            flag: "KZ",
            letters: match[2],
            numbers: match[1],
            regionCode: regionCode,
            regionName: regionCodes[regionCode] || "Unknown Region",
          }
        }
        case "foreign": {
          regionCode = match[3]

          return {
            code: "KZ",
            flag: "KZ",
            letters: match[1],
            numbers: match[2],
            regionCode: regionCode,
            regionName: regionCodes[regionCode] || "Unknown Region",
          }
        }
        case "commerce": {
          regionCode = match[3]

          return {
            code: "KZ",
            flag: "KZ",
            letters: match[1],
            numbers: match[2],
            regionCode: regionCode,
            regionName: regionCodes[regionCode] || "Unknown Region",
          }
        }
        case "motorcycle": {
          regionCode = match[4]

          return {
            code: "KZ",
            flag: "KZ",
            letters: match[1],
            numbers: `${match[2]}${match[4]}`,
            regionCode: regionCode,
            regionName: regionCodes[regionCode] || "Unknown Region",
          }
        }
        case "diplomatic": {
          const countryCode = match[2]

          return {
            code: "KZ",
            country: diplomaticCodes[countryCode] || "Unknown Country",
            flag: "KZ",
            letters: match[1],
            numbers: match[2],
            regionCode: countryCode,
            regionName: "Diplomatic",
          }
        }
        default: {
          break
        }
      }
    }
  }

  return null
}
