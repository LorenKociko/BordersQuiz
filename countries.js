// shuffle array https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}

// Returns a flag emoji from a 2-letter country code
function country2emoji2(country_code) {
    const OFFSET = 127397;
    const codeArray = Array.from(country_code.toUpperCase());
    return String.fromCodePoint(...codeArray.map((c) => c.charCodeAt() + OFFSET));
}



const countryObjects = [{
        "code": "AF",
        "code3": "AFG",
        "name": "Afghanistan",
        "number": "004",
        "borders": [
            "IRN",
            "PAK",
            "TKM",
            "UZB",
            "TJK",
            "CHN"
        ]
    },
    {
        "code": "AL",
        "code3": "ALB",
        "name": "Albania",
        "number": "008",
        "borders": [
            "MNE",
            "GRC",
            "MKD",
            "UNK"
        ]
    },
    {
        "code": "DZ",
        "code3": "DZA",
        "name": "Algeria",
        "number": "012",
        "borders": [
            "TUN",
            "LBY",
            "NER",
            "ESH",
            "MRT",
            "MLI",
            "MAR"
        ]
    },
    {
        "code": "AS",
        "code3": "ASM",
        "name": "American Samoa",
        "number": "016"
    },
    {
        "code": "AD",
        "code3": "AND",
        "name": "Andorra",
        "number": "020",
        "borders": [
            "FRA",
            "ESP"
        ]
    },
    {
        "code": "AO",
        "code3": "AGO",
        "name": "Angola",
        "number": "024",
        "borders": [
            "COG",
            "COD",
            "ZMB",
            "NAM"
        ]
    },
    {
        "code": "AI",
        "code3": "AIA",
        "name": "Anguilla",
        "number": "660"
    },
    {
        "code": "AQ",
        "code3": "ATA",
        "name": "Antarctica",
        "number": "010"
    },
    {
        "code": "AG",
        "code3": "ATG",
        "name": "Antigua and Barbuda",
        "number": "028"
    },
    {
        "code": "AR",
        "code3": "ARG",
        "name": "Argentina",
        "number": "032",
        "borders": [
            "BOL",
            "BRA",
            "CHL",
            "PRY",
            "URY"
        ]
    },
    {
        "code": "AM",
        "code3": "ARM",
        "name": "Armenia",
        "number": "051",
        "borders": [
            "AZE",
            "GEO",
            "IRN",
            "TUR"
        ]
    },
    {
        "code": "AW",
        "code3": "ABW",
        "name": "Aruba",
        "number": "533"
    },
    {
        "code": "AU",
        "code3": "AUS",
        "name": "Australia",
        "number": "036"
    },
    {
        "code": "AT",
        "code3": "AUT",
        "name": "Austria",
        "number": "040",
        "borders": [
            "CZE",
            "DEU",
            "HUN",
            "ITA",
            "LIE",
            "SVK",
            "SVN",
            "CHE"
        ]
    },
    {
        "code": "AZ",
        "code3": "AZE",
        "name": "Azerbaijan",
        "number": "031",
        "borders": [
            "ARM",
            "GEO",
            "IRN",
            "RUS",
            "TUR"
        ]
    },
    {
        "code": "BS",
        "code3": "BHS",
        "name": "Bahamas (the)",
        "number": "044"
    },
    {
        "code": "BH",
        "code3": "BHR",
        "name": "Bahrain",
        "number": "048"
    },
    {
        "code": "BD",
        "code3": "BGD",
        "name": "Bangladesh",
        "number": "050",
        "borders": [
            "MMR",
            "IND"
        ]
    },
    {
        "code": "BB",
        "code3": "BRB",
        "name": "Barbados",
        "number": "052"
    },
    {
        "code": "BY",
        "code3": "BLR",
        "name": "Belarus",
        "number": "112",
        "borders": [
            "LVA",
            "LTU",
            "POL",
            "RUS",
            "UKR"
        ]
    },
    {
        "code": "BE",
        "code3": "BEL",
        "name": "Belgium",
        "number": "056",
        "borders": [
            "FRA",
            "DEU",
            "LUX",
            "NLD"
        ]
    },
    {
        "code": "BZ",
        "code3": "BLZ",
        "name": "Belize",
        "number": "084",
        "borders": [
            "GTM",
            "MEX"
        ]
    },
    {
        "code": "BJ",
        "code3": "BEN",
        "name": "Benin",
        "number": "204",
        "borders": [
            "BFA",
            "NER",
            "NGA",
            "TGO"
        ]
    },
    {
        "code": "BM",
        "code3": "BMU",
        "name": "Bermuda",
        "number": "060"
    },
    {
        "code": "BT",
        "code3": "BTN",
        "name": "Bhutan",
        "number": "064",
        "borders": [
            "CHN",
            "IND"
        ]
    },
    {
        "code": "BO",
        "code3": "BOL",
        "name": "Bolivia (Plurinational State of)",
        "number": "068",
        "borders": [
            "ARG",
            "BRA",
            "CHL",
            "PRY",
            "PER"
        ]
    },
    {
        "code": "BQ",
        "code3": "BES",
        "name": "Bonaire, Sint Eustatius and Saba",
        "number": "535"
    },
    {
        "code": "BA",
        "code3": "BIH",
        "name": "Bosnia and Herzegovina",
        "number": "070",
        "borders": [
            "HRV",
            "MNE",
            "SRB"
        ]
    },
    {
        "code": "BW",
        "code3": "BWA",
        "name": "Botswana",
        "number": "072",
        "borders": [
            "NAM",
            "ZAF",
            "ZMB",
            "ZWE"
        ]
    },
    {
        "code": "BV",
        "code3": "BVT",
        "name": "Bouvet Island",
        "number": "074"
    },
    {
        "code": "BR",
        "code3": "BRA",
        "name": "Brazil",
        "number": "076",
        "borders": [
            "ARG",
            "BOL",
            "COL",
            "FRA",
            "GUF",
            "GUY",
            "PRY",
            "PER",
            "SUR",
            "URY",
            "VEN"
        ]
    },
    {
        "code": "IO",
        "code3": "IOT",
        "name": "British Indian Ocean Territory (the)",
        "number": "086"
    },
    {
        "code": "BN",
        "code3": "BRN",
        "name": "Brunei Darussalam",
        "number": "096",
        "borders": [
            "MYS"
        ]
    },
    {
        "code": "BG",
        "code3": "BGR",
        "name": "Bulgaria",
        "number": "100",
        "borders": [
            "GRC",
            "MKD",
            "ROU",
            "SRB",
            "TUR"
        ]
    },
    {
        "code": "BF",
        "code3": "BFA",
        "name": "Burkina Faso",
        "number": "854",
        "borders": [
            "BEN",
            "CIV",
            "GHA",
            "MLI",
            "NER",
            "TGO"
        ]
    },
    {
        "code": "BI",
        "code3": "BDI",
        "name": "Burundi",
        "number": "108",
        "borders": [
            "COD",
            "RWA",
            "TZA"
        ]
    },
    {
        "code": "CV",
        "code3": "CPV",
        "name": "Cabo Verde",
        "number": "132"
    },
    {
        "code": "KH",
        "code3": "KHM",
        "name": "Cambodia",
        "number": "116",
        "borders": [
            "LAO",
            "THA",
            "VNM"
        ]
    },
    {
        "code": "CM",
        "code3": "CMR",
        "name": "Cameroon",
        "number": "120",
        "borders": [
            "CAF",
            "TCD",
            "COG",
            "GNQ",
            "GAB",
            "NGA"
        ]
    },
    {
        "code": "CA",
        "code3": "CAN",
        "name": "Canada",
        "number": "124",
        "borders": [
            "USA"
        ]
    },
    {
        "code": "KY",
        "code3": "CYM",
        "name": "Cayman Islands (the)",
        "number": "136"
    },
    {
        "code": "CF",
        "code3": "CAF",
        "name": "Central African Republic (the)",
        "number": "140",
        "borders": [
            "CMR",
            "TCD",
            "COD",
            "COG",
            "SSD",
            "SDN"
        ]
    },
    {
        "code": "TD",
        "code3": "TCD",
        "name": "Chad",
        "number": "148",
        "borders": [
            "CMR",
            "CAF",
            "LBY",
            "NER",
            "NGA",
            "SDN"
        ]
    },
    {
        "code": "CL",
        "code3": "CHL",
        "name": "Chile",
        "number": "152",
        "borders": [
            "ARG",
            "BOL",
            "PER"
        ]
    },
    {
        "code": "CN",
        "code3": "CHN",
        "name": "China",
        "number": "156",
        "borders": [
            "AFG",
            "BTN",
            "MMR",
            "HKG",
            "IND",
            "KAZ",
            "PRK",
            "KGZ",
            "LAO",
            "MAC",
            "MNG",
            "PAK",
            "RUS",
            "TJK",
            "VNM",
            "NPL"
        ]
    },
    {
        "code": "CX",
        "code3": "CXR",
        "name": "Christmas Island",
        "number": "162"
    },
    {
        "code": "CC",
        "code3": "CCK",
        "name": "Cocos (Keeling) Islands (the)",
        "number": "166"
    },
    {
        "code": "CO",
        "code3": "COL",
        "name": "Colombia",
        "number": "170",
        "borders": [
            "BRA",
            "ECU",
            "PAN",
            "PER",
            "VEN"
        ]
    },
    {
        "code": "KM",
        "code3": "COM",
        "name": "Comoros (the)",
        "number": "174"
    },
    {
        "code": "CD",
        "code3": "COD",
        "name": "Congo (the Democratic Republic of the)",
        "number": "180",
        "borders": [
            "AGO",
            "BDI",
            "CAF",
            "COG",
            "RWA",
            "SSD",
            "TZA",
            "UGA",
            "ZMB"
        ]
    },
    {
        "code": "CG",
        "code3": "COG",
        "name": "Congo (the)",
        "number": "178",
        "borders": [
            "AGO",
            "CMR",
            "CAF",
            "COD",
            "GAB"
        ]
    },
    {
        "code": "CK",
        "code3": "COK",
        "name": "Cook Islands (the)",
        "number": "184"
    },
    {
        "code": "CR",
        "code3": "CRI",
        "name": "Costa Rica",
        "number": "188",
        "borders": [
            "NIC",
            "PAN"
        ]
    },
    {
        "code": "HR",
        "code3": "HRV",
        "name": "Croatia",
        "number": "191",
        "borders": [
            "BIH",
            "HUN",
            "MNE",
            "SRB",
            "SVN"
        ]
    },
    {
        "code": "CU",
        "code3": "CUB",
        "name": "Cuba",
        "number": "192"
    },
    {
        "code": "CW",
        "code3": "CUW",
        "name": "Curaçao",
        "number": "531"
    },
    {
        "code": "CY",
        "code3": "CYP",
        "name": "Cyprus",
        "number": "196",
        "borders": [
            "GBR"
        ]
    },
    {
        "code": "CZ",
        "code3": "CZE",
        "name": "Czechia",
        "number": "203"
    },
    {
        "code": "CI",
        "code3": "CIV",
        "name": "Côte d'Ivoire",
        "number": "384",
        "borders": [
            "BFA",
            "GHA",
            "GIN",
            "LBR",
            "MLI"
        ]
    },
    {
        "code": "DK",
        "code3": "DNK",
        "name": "Denmark",
        "number": "208",
        "borders": [
            "DEU"
        ]
    },
    {
        "code": "DJ",
        "code3": "DJI",
        "name": "Djibouti",
        "number": "262",
        "borders": [
            "ERI",
            "ETH",
            "SOM"
        ]
    },
    {
        "code": "DM",
        "code3": "DMA",
        "name": "Dominica",
        "number": "212"
    },
    {
        "code": "DO",
        "code3": "DOM",
        "name": "Dominican Republic (the)",
        "number": "214",
        "borders": [
            "HTI"
        ]
    },
    {
        "code": "EC",
        "code3": "ECU",
        "name": "Ecuador",
        "number": "218",
        "borders": [
            "COL",
            "PER"
        ]
    },
    {
        "code": "EG",
        "code3": "EGY",
        "name": "Egypt",
        "number": "818",
        "borders": [
            "ISR",
            "LBY",
            "SDN"
        ]
    },
    {
        "code": "SV",
        "code3": "SLV",
        "name": "El Salvador",
        "number": "222",
        "borders": [
            "GTM",
            "HND"
        ]
    },
    {
        "code": "GQ",
        "code3": "GNQ",
        "name": "Equatorial Guinea",
        "number": "226",
        "borders": [
            "CMR",
            "GAB"
        ]
    },
    {
        "code": "ER",
        "code3": "ERI",
        "name": "Eritrea",
        "number": "232",
        "borders": [
            "DJI",
            "ETH",
            "SDN"
        ]
    },
    {
        "code": "EE",
        "code3": "EST",
        "name": "Estonia",
        "number": "233",
        "borders": [
            "LVA",
            "RUS"
        ]
    },
    {
        "code": "SZ",
        "code3": "SWZ",
        "name": "Eswatini",
        "number": "748",
        "borders": [
            "MOZ",
            "ZAF"
        ]
    },
    {
        "code": "ET",
        "code3": "ETH",
        "name": "Ethiopia",
        "number": "231",
        "borders": [
            "DJI",
            "ERI",
            "KEN",
            "SOM",
            "SSD",
            "SDN"
        ]
    },
    {
        "code": "FK",
        "code3": "FLK",
        "name": "Falkland Islands (the) [Malvinas]",
        "number": "238"
    },
    {
        "code": "FO",
        "code3": "FRO",
        "name": "Faroe Islands (the)",
        "number": "234"
    },
    {
        "code": "FJ",
        "code3": "FJI",
        "name": "Fiji",
        "number": "242"
    },
    {
        "code": "FI",
        "code3": "FIN",
        "name": "Finland",
        "number": "246",
        "borders": [
            "NOR",
            "SWE",
            "RUS"
        ]
    },
    {
        "code": "FR",
        "code3": "FRA",
        "name": "France",
        "number": "250",
        "borders": [
            "AND",
            "BEL",
            "DEU",
            "ITA",
            "LUX",
            "MCO",
            "ESP",
            "CHE"
        ]
    },
    {
        "code": "GF",
        "code3": "GUF",
        "name": "French Guiana",
        "number": "254",
        "borders": [
            "BRA",
            "SUR"
        ]
    },
    {
        "code": "PF",
        "code3": "PYF",
        "name": "French Polynesia",
        "number": "258"
    },
    {
        "code": "TF",
        "code3": "ATF",
        "name": "French Southern Territories (the)",
        "number": "260"
    },
    {
        "code": "GA",
        "code3": "GAB",
        "name": "Gabon",
        "number": "266",
        "borders": [
            "CMR",
            "COG",
            "GNQ"
        ]
    },
    {
        "code": "GM",
        "code3": "GMB",
        "name": "Gambia (the)",
        "number": "270",
        "borders": [
            "SEN"
        ]
    },
    {
        "code": "GE",
        "code3": "GEO",
        "name": "Georgia",
        "number": "268",
        "borders": [
            "ARM",
            "AZE",
            "RUS",
            "TUR"
        ]
    },
    {
        "code": "DE",
        "code3": "DEU",
        "name": "Germany",
        "number": "276",
        "borders": [
            "AUT",
            "BEL",
            "CZE",
            "DNK",
            "FRA",
            "LUX",
            "NLD",
            "POL",
            "CHE"
        ]
    },
    {
        "code": "GH",
        "code3": "GHA",
        "name": "Ghana",
        "number": "288",
        "borders": [
            "BFA",
            "CIV",
            "TGO"
        ]
    },
    {
        "code": "GI",
        "code3": "GIB",
        "name": "Gibraltar",
        "number": "292",
        "borders": [
            "ESP"
        ]
    },
    {
        "code": "GR",
        "code3": "GRC",
        "name": "Greece",
        "number": "300",
        "borders": [
            "ALB",
            "BGR",
            "TUR",
            "MKD"
        ]
    },
    {
        "code": "GL",
        "code3": "GRL",
        "name": "Greenland",
        "number": "304"
    },
    {
        "code": "GD",
        "code3": "GRD",
        "name": "Grenada",
        "number": "308"
    },
    {
        "code": "GP",
        "code3": "GLP",
        "name": "Guadeloupe",
        "number": "312"
    },
    {
        "code": "GU",
        "code3": "GUM",
        "name": "Guam",
        "number": "316"
    },
    {
        "code": "GT",
        "code3": "GTM",
        "name": "Guatemala",
        "number": "320",
        "borders": [
            "BLZ",
            "SLV",
            "HND",
            "MEX"
        ]
    },
    {
        "code": "GG",
        "code3": "GGY",
        "name": "Guernsey",
        "number": "831"
    },
    {
        "code": "GN",
        "code3": "GIN",
        "name": "Guinea",
        "number": "324",
        "borders": [
            "CIV",
            "GNB",
            "LBR",
            "MLI",
            "SEN",
            "SLE"
        ]
    },
    {
        "code": "GW",
        "code3": "GNB",
        "name": "Guinea-Bissau",
        "number": "624",
        "borders": [
            "GIN",
            "SEN"
        ]
    },
    {
        "code": "GY",
        "code3": "GUY",
        "name": "Guyana",
        "number": "328",
        "borders": [
            "BRA",
            "SUR",
            "VEN"
        ]
    },
    {
        "code": "HT",
        "code3": "HTI",
        "name": "Haiti",
        "number": "332",
        "borders": [
            "DOM"
        ]
    },
    {
        "code": "HM",
        "code3": "HMD",
        "name": "Heard Island and McDonald Islands",
        "number": "334"
    },
    {
        "code": "VA",
        "code3": "VAT",
        "name": "Holy See (the)",
        "number": "336",
        "borders": [
            "ITA"
        ]
    },
    {
        "code": "HN",
        "code3": "HND",
        "name": "Honduras",
        "number": "340",
        "borders": [
            "GTM",
            "SLV",
            "NIC"
        ]
    },
    {
        "code": "HK",
        "code3": "HKG",
        "name": "Hong Kong",
        "number": "344",
        "borders": [
            "CHN"
        ]
    },
    {
        "code": "HU",
        "code3": "HUN",
        "name": "Hungary",
        "number": "348",
        "borders": [
            "AUT",
            "HRV",
            "ROU",
            "SRB",
            "SVK",
            "SVN",
            "UKR"
        ]
    },
    {
        "code": "IS",
        "code3": "ISL",
        "name": "Iceland",
        "number": "352"
    },
    {
        "code": "IN",
        "code3": "IND",
        "name": "India",
        "number": "356",
        "borders": [
            "AFG",
            "BGD",
            "BTN",
            "MMR",
            "CHN",
            "NPL",
            "PAK",
            "LKA"
        ]
    },
    {
        "code": "ID",
        "code3": "IDN",
        "name": "Indonesia",
        "number": "360",
        "borders": [
            "TLS",
            "MYS",
            "PNG"
        ]
    },
    {
        "code": "IR",
        "code3": "IRN",
        "name": "Iran (Islamic Republic of)",
        "number": "364",
        "borders": [
            "AFG",
            "ARM",
            "AZE",
            "IRQ",
            "PAK",
            "TUR",
            "TKM"
        ]
    },
    {
        "code": "IQ",
        "code3": "IRQ",
        "name": "Iraq",
        "number": "368",
        "borders": [
            "IRN",
            "JOR",
            "KWT",
            "SAU",
            "SYR",
            "TUR"
        ]
    },
    {
        "code": "IE",
        "code3": "IRL",
        "name": "Ireland",
        "number": "372",
        "borders": [
            "GBR"
        ]
    },
    {
        "code": "IM",
        "code3": "IMN",
        "name": "Isle of Man",
        "number": "833"
    },
    {
        "code": "IL",
        "code3": "ISR",
        "name": "Israel",
        "number": "376",
        "borders": [
            "EGY",
            "JOR",
            "LBN",
            "SYR"
        ]
    },
    {
        "code": "IT",
        "code3": "ITA",
        "name": "Italy",
        "number": "380",
        "borders": [
            "AUT",
            "FRA",
            "SMR",
            "SVN",
            "CHE",
            "VAT"
        ]
    },
    {
        "code": "JM",
        "code3": "JAM",
        "name": "Jamaica",
        "number": "388"
    },
    {
        "code": "JP",
        "code3": "JPN",
        "name": "Japan",
        "number": "392"
    },
    {
        "code": "JE",
        "code3": "JEY",
        "name": "Jersey",
        "number": "832"
    },
    {
        "code": "JO",
        "code3": "JOR",
        "name": "Jordan",
        "number": "400",
        "borders": [
            "IRQ",
            "ISR",
            "SAU",
            "SYR"
        ]
    },
    {
        "code": "KZ",
        "code3": "KAZ",
        "name": "Kazakhstan",
        "number": "398",
        "borders": [
            "CHN",
            "KGZ",
            "RUS",
            "TKM",
            "UZB"
        ]
    },
    {
        "code": "KE",
        "code3": "KEN",
        "name": "Kenya",
        "number": "404",
        "borders": [
            "ETH",
            "SOM",
            "SSD",
            "TZA",
            "UGA"
        ]
    },
    {
        "code": "KI",
        "code3": "KIR",
        "name": "Kiribati",
        "number": "296"
    },
    {
        "code": "KP",
        "code3": "PRK",
        "name": "Korea (the Democratic People's Republic of)",
        "number": "408",
        "borders": [
            "CHN",
            "KOR",
            "RUS"
        ]
    },
    {
        "code": "KR",
        "code3": "KOR",
        "name": "Korea (the Republic of)",
        "number": "410",
        "borders": [
            "PRK"
        ]
    },
    {
        "code": "XK",
        "code3": "UNK",
        "name": "Kosovo",
        "number": "383",
        "borders": [
            "ALB",
            "MKD",
            "MNE",
            "SRB"
        ]
    },
    {
        "code": "KW",
        "code3": "KWT",
        "name": "Kuwait",
        "number": "414",
        "borders": [
            "IRQ",
            "SAU"
        ]
    },
    {
        "code": "KG",
        "code3": "KGZ",
        "name": "Kyrgyzstan",
        "number": "417",
        "borders": [
            "CHN",
            "KAZ",
            "TJK",
            "UZB"
        ]
    },
    {
        "code": "LA",
        "code3": "LAO",
        "name": "Lao People's Democratic Republic (the)",
        "number": "418",
        "borders": [
            "MMR",
            "KHM",
            "CHN",
            "THA",
            "VNM"
        ]
    },
    {
        "code": "LV",
        "code3": "LVA",
        "name": "Latvia",
        "number": "428",
        "borders": [
            "BLR",
            "EST",
            "LTU",
            "RUS"
        ]
    },
    {
        "code": "LB",
        "code3": "LBN",
        "name": "Lebanon",
        "number": "422",
        "borders": [
            "ISR",
            "SYR"
        ]
    },
    {
        "code": "LS",
        "code3": "LSO",
        "name": "Lesotho",
        "number": "426",
        "borders": [
            "ZAF"
        ]
    },
    {
        "code": "LR",
        "code3": "LBR",
        "name": "Liberia",
        "number": "430",
        "borders": [
            "GIN",
            "CIV",
            "SLE"
        ]
    },
    {
        "code": "LY",
        "code3": "LBY",
        "name": "Libya",
        "number": "434",
        "borders": [
            "DZA",
            "TCD",
            "EGY",
            "NER",
            "SDN",
            "TUN"
        ]
    },
    {
        "code": "LI",
        "code3": "LIE",
        "name": "Liechtenstein",
        "number": "438",
        "borders": [
            "AUT",
            "CHE"
        ]
    },
    {
        "code": "LT",
        "code3": "LTU",
        "name": "Lithuania",
        "number": "440",
        "borders": [
            "BLR",
            "LVA",
            "POL",
            "RUS"
        ]
    },
    {
        "code": "LU",
        "code3": "LUX",
        "name": "Luxembourg",
        "number": "442",
        "borders": [
            "BEL",
            "FRA",
            "DEU"
        ]
    },
    {
        "code": "MO",
        "code3": "MAC",
        "name": "Macao",
        "number": "446",
        "borders": [
            "CHN"
        ]
    },
    {
        "code": "MG",
        "code3": "MDG",
        "name": "Madagascar",
        "number": "450"
    },
    {
        "code": "MW",
        "code3": "MWI",
        "name": "Malawi",
        "number": "454",
        "borders": [
            "MOZ",
            "TZA",
            "ZMB"
        ]
    },
    {
        "code": "MY",
        "code3": "MYS",
        "name": "Malaysia",
        "number": "458",
        "borders": [
            "BRN",
            "IDN",
            "THA"
        ]
    },
    {
        "code": "MV",
        "code3": "MDV",
        "name": "Maldives",
        "number": "462"
    },
    {
        "code": "ML",
        "code3": "MLI",
        "name": "Mali",
        "number": "466",
        "borders": [
            "DZA",
            "BFA",
            "GIN",
            "CIV",
            "MRT",
            "NER",
            "SEN"
        ]
    },
    {
        "code": "MT",
        "code3": "MLT",
        "name": "Malta",
        "number": "470"
    },
    {
        "code": "MH",
        "code3": "MHL",
        "name": "Marshall Islands (the)",
        "number": "584"
    },
    {
        "code": "MQ",
        "code3": "MTQ",
        "name": "Martinique",
        "number": "474"
    },
    {
        "code": "MR",
        "code3": "MRT",
        "name": "Mauritania",
        "number": "478",
        "borders": [
            "DZA",
            "MLI",
            "SEN",
            "ESH"
        ]
    },
    {
        "code": "MU",
        "code3": "MUS",
        "name": "Mauritius",
        "number": "480"
    },
    {
        "code": "YT",
        "code3": "MYT",
        "name": "Mayotte",
        "number": "175"
    },
    {
        "code": "MX",
        "code3": "MEX",
        "name": "Mexico",
        "number": "484",
        "borders": [
            "BLZ",
            "GTM",
            "USA"
        ]
    },
    {
        "code": "FM",
        "code3": "FSM",
        "name": "Micronesia (Federated States of)",
        "number": "583"
    },
    {
        "code": "MD",
        "code3": "MDA",
        "name": "Moldova (the Republic of)",
        "number": "498",
        "borders": [
            "ROU",
            "UKR"
        ]
    },
    {
        "code": "MC",
        "code3": "MCO",
        "name": "Monaco",
        "number": "492",
        "borders": [
            "FRA"
        ]
    },
    {
        "code": "MN",
        "code3": "MNG",
        "name": "Mongolia",
        "number": "496",
        "borders": [
            "CHN",
            "RUS"
        ]
    },
    {
        "code": "ME",
        "code3": "MNE",
        "name": "Montenegro",
        "number": "499",
        "borders": [
            "ALB",
            "BIH",
            "HRV",
            "UNK",
            "SRB"
        ]
    },
    {
        "code": "MS",
        "code3": "MSR",
        "name": "Montserrat",
        "number": "500"
    },
    {
        "code": "MA",
        "code3": "MAR",
        "name": "Morocco",
        "number": "504",
        "borders": [
            "DZA",
            "ESH",
            "ESP"
        ]
    },
    {
        "code": "MZ",
        "code3": "MOZ",
        "name": "Mozambique",
        "number": "508",
        "borders": [
            "MWI",
            "ZAF",
            "SWZ",
            "TZA",
            "ZMB",
            "ZWE"
        ]
    },
    {
        "code": "MM",
        "code3": "MMR",
        "name": "Myanmar",
        "number": "104",
        "borders": [
            "BGD",
            "CHN",
            "IND",
            "LAO",
            "THA"
        ]
    },
    {
        "code": "NA",
        "code3": "NAM",
        "name": "Namibia",
        "number": "516",
        "borders": [
            "AGO",
            "BWA",
            "ZAF",
            "ZMB"
        ]
    },
    {
        "code": "NR",
        "code3": "NRU",
        "name": "Nauru",
        "number": "520"
    },
    {
        "code": "NP",
        "code3": "NPL",
        "name": "Nepal",
        "number": "524",
        "borders": [
            "CHN",
            "IND"
        ]
    },
    {
        "code": "NL",
        "code3": "NLD",
        "name": "Netherlands (the)",
        "number": "528",
        "borders": [
            "BEL",
            "DEU"
        ]
    },
    {
        "code": "NC",
        "code3": "NCL",
        "name": "New Caledonia",
        "number": "540"
    },
    {
        "code": "NZ",
        "code3": "NZL",
        "name": "New Zealand",
        "number": "554"
    },
    {
        "code": "NI",
        "code3": "NIC",
        "name": "Nicaragua",
        "number": "558",
        "borders": [
            "CRI",
            "HND"
        ]
    },
    {
        "code": "NE",
        "code3": "NER",
        "name": "Niger (the)",
        "number": "562",
        "borders": [
            "DZA",
            "BEN",
            "BFA",
            "TCD",
            "LBY",
            "MLI",
            "NGA"
        ]
    },
    {
        "code": "NG",
        "code3": "NGA",
        "name": "Nigeria",
        "number": "566",
        "borders": [
            "BEN",
            "CMR",
            "TCD",
            "NER"
        ]
    },
    {
        "code": "NU",
        "code3": "NIU",
        "name": "Niue",
        "number": "570"
    },
    {
        "code": "NF",
        "code3": "NFK",
        "name": "Norfolk Island",
        "number": "574"
    },
    {
        "code": "MP",
        "code3": "MNP",
        "name": "Northern Mariana Islands (the)",
        "number": "580"
    },
    {
        "code": "NO",
        "code3": "NOR",
        "name": "Norway",
        "number": "578",
        "borders": [
            "FIN",
            "SWE",
            "RUS"
        ]
    },
    {
        "code": "OM",
        "code3": "OMN",
        "name": "Oman",
        "number": "512",
        "borders": [
            "SAU",
            "ARE",
            "YEM"
        ]
    },
    {
        "code": "PK",
        "code3": "PAK",
        "name": "Pakistan",
        "number": "586",
        "borders": [
            "AFG",
            "CHN",
            "IND",
            "IRN"
        ]
    },
    {
        "code": "PW",
        "code3": "PLW",
        "name": "Palau",
        "number": "585"
    },
    {
        "code": "PS",
        "code3": "PSE",
        "name": "Palestine, State of",
        "number": "275",
        "borders": [
            "ISR",
            "EGY",
            "JOR"
        ]
    },
    {
        "code": "PA",
        "code3": "PAN",
        "name": "Panama",
        "number": "591",
        "borders": [
            "COL",
            "CRI"
        ]
    },
    {
        "code": "PG",
        "code3": "PNG",
        "name": "Papua New Guinea",
        "number": "598",
        "borders": [
            "IDN"
        ]
    },
    {
        "code": "PY",
        "code3": "PRY",
        "name": "Paraguay",
        "number": "600",
        "borders": [
            "ARG",
            "BOL",
            "BRA"
        ]
    },
    {
        "code": "PE",
        "code3": "PER",
        "name": "Peru",
        "number": "604",
        "borders": [
            "BOL",
            "BRA",
            "CHL",
            "COL",
            "ECU"
        ]
    },
    {
        "code": "PH",
        "code3": "PHL",
        "name": "Philippines (the)",
        "number": "608"
    },
    {
        "code": "PN",
        "code3": "PCN",
        "name": "Pitcairn",
        "number": "612"
    },
    {
        "code": "PL",
        "code3": "POL",
        "name": "Poland",
        "number": "616",
        "borders": [
            "BLR",
            "CZE",
            "DEU",
            "LTU",
            "RUS",
            "SVK",
            "UKR"
        ]
    },
    {
        "code": "PT",
        "code3": "PRT",
        "name": "Portugal",
        "number": "620",
        "borders": [
            "ESP"
        ]
    },
    {
        "code": "PR",
        "code3": "PRI",
        "name": "Puerto Rico",
        "number": "630"
    },
    {
        "code": "QA",
        "code3": "QAT",
        "name": "Qatar",
        "number": "634",
        "borders": [
            "SAU"
        ]
    },
    {
        "code": "MK",
        "code3": "MKD",
        "name": "Republic of North Macedonia",
        "number": "807",
        "borders": [
            "ALB",
            "BGR",
            "GRC",
            "UNK",
            "SRB"
        ]
    },
    {
        "code": "RO",
        "code3": "ROU",
        "name": "Romania",
        "number": "642",
        "borders": [
            "BGR",
            "HUN",
            "MDA",
            "SRB",
            "UKR"
        ]
    },
    {
        "code": "RU",
        "code3": "RUS",
        "name": "Russian Federation (the)",
        "number": "643",
        "borders": [
            "AZE",
            "BLR",
            "CHN",
            "EST",
            "FIN",
            "GEO",
            "KAZ",
            "PRK",
            "LVA",
            "LTU",
            "MNG",
            "NOR",
            "POL",
            "UKR"
        ]
    },
    {
        "code": "RW",
        "code3": "RWA",
        "name": "Rwanda",
        "number": "646",
        "borders": [
            "BDI",
            "COD",
            "TZA",
            "UGA"
        ]
    },
    {
        "code": "RE",
        "code3": "REU",
        "name": "Réunion",
        "number": "638"
    },
    {
        "code": "BL",
        "code3": "BLM",
        "name": "Saint Barthélemy",
        "number": "652"
    },
    {
        "code": "SH",
        "code3": "SHN",
        "name": "Saint Helena, Ascension and Tristan da Cunha",
        "number": "654"
    },
    {
        "code": "KN",
        "code3": "KNA",
        "name": "Saint Kitts and Nevis",
        "number": "659"
    },
    {
        "code": "LC",
        "code3": "LCA",
        "name": "Saint Lucia",
        "number": "662"
    },
    {
        "code": "MF",
        "code3": "MAF",
        "name": "Saint Martin (French part)",
        "number": "663",
        "borders": [
            "SXM",
            "NLD"
        ]
    },
    {
        "code": "PM",
        "code3": "SPM",
        "name": "Saint Pierre and Miquelon",
        "number": "666"
    },
    {
        "code": "VC",
        "code3": "VCT",
        "name": "Saint Vincent and the Grenadines",
        "number": "670"
    },
    {
        "code": "WS",
        "code3": "WSM",
        "name": "Samoa",
        "number": "882"
    },
    {
        "code": "SM",
        "code3": "SMR",
        "name": "San Marino",
        "number": "674",
        "borders": [
            "ITA"
        ]
    },
    {
        "code": "ST",
        "code3": "STP",
        "name": "Sao Tome and Principe",
        "number": "678"
    },
    {
        "code": "SA",
        "code3": "SAU",
        "name": "Saudi Arabia",
        "number": "682",
        "borders": [
            "IRQ",
            "JOR",
            "KWT",
            "OMN",
            "QAT",
            "ARE",
            "YEM"
        ]
    },
    {
        "code": "SN",
        "code3": "SEN",
        "name": "Senegal",
        "number": "686",
        "borders": [
            "GMB",
            "GIN",
            "GNB",
            "MLI",
            "MRT"
        ]
    },
    {
        "code": "RS",
        "code3": "SRB",
        "name": "Serbia",
        "number": "688",
        "borders": [
            "BIH",
            "BGR",
            "HRV",
            "HUN",
            "UNK",
            "MKD",
            "MNE",
            "ROU"
        ]
    },
    {
        "code": "SC",
        "code3": "SYC",
        "name": "Seychelles",
        "number": "690"
    },
    {
        "code": "SL",
        "code3": "SLE",
        "name": "Sierra Leone",
        "number": "694",
        "borders": [
            "GIN",
            "LBR"
        ]
    },
    {
        "code": "SG",
        "code3": "SGP",
        "name": "Singapore",
        "number": "702"
    },
    {
        "code": "SX",
        "code3": "SXM",
        "name": "Sint Maarten (Dutch part)",
        "number": "534",
        "borders": [
            "MAF"
        ]
    },
    {
        "code": "SK",
        "code3": "SVK",
        "name": "Slovakia",
        "number": "703",
        "borders": [
            "AUT",
            "CZE",
            "HUN",
            "POL",
            "UKR"
        ]
    },
    {
        "code": "SI",
        "code3": "SVN",
        "name": "Slovenia",
        "number": "705",
        "borders": [
            "AUT",
            "HRV",
            "ITA",
            "HUN"
        ]
    },
    {
        "code": "SB",
        "code3": "SLB",
        "name": "Solomon Islands",
        "number": "090"
    },
    {
        "code": "SO",
        "code3": "SOM",
        "name": "Somalia",
        "number": "706",
        "borders": [
            "DJI",
            "ETH",
            "KEN"
        ]
    },
    {
        "code": "ZA",
        "code3": "ZAF",
        "name": "South Africa",
        "number": "710",
        "borders": [
            "BWA",
            "LSO",
            "MOZ",
            "NAM",
            "SWZ",
            "ZWE"
        ]
    },
    {
        "code": "GS",
        "code3": "SGS",
        "name": "South Georgia and the South Sandwich Islands",
        "number": "239"
    },
    {
        "code": "SS",
        "code3": "SSD",
        "name": "South Sudan",
        "number": "728",
        "borders": [
            "CAF",
            "COD",
            "ETH",
            "KEN",
            "SDN",
            "UGA"
        ]
    },
    {
        "code": "ES",
        "code3": "ESP",
        "name": "Spain",
        "number": "724",
        "borders": [
            "AND",
            "FRA",
            "GIB",
            "PRT",
            "MAR"
        ]
    },
    {
        "code": "LK",
        "code3": "LKA",
        "name": "Sri Lanka",
        "number": "144",
        "borders": [
            "IND"
        ]
    },
    {
        "code": "SD",
        "code3": "SDN",
        "name": "Sudan (the)",
        "number": "729",
        "borders": [
            "CAF",
            "TCD",
            "EGY",
            "ERI",
            "ETH",
            "LBY",
            "SSD"
        ]
    },
    {
        "code": "SR",
        "code3": "SUR",
        "name": "Suriname",
        "number": "740",
        "borders": [
            "BRA",
            "FRA",
            "GUF",
            "GUY"
        ]
    },
    {
        "code": "SJ",
        "code3": "SJM",
        "name": "Svalbard and Jan Mayen",
        "number": "744"
    },
    {
        "code": "SE",
        "code3": "SWE",
        "name": "Sweden",
        "number": "752",
        "borders": [
            "FIN",
            "NOR"
        ]
    },
    {
        "code": "CH",
        "code3": "CHE",
        "name": "Switzerland",
        "number": "756",
        "borders": [
            "AUT",
            "FRA",
            "ITA",
            "LIE",
            "DEU"
        ]
    },
    {
        "code": "SY",
        "code3": "SYR",
        "name": "Syrian Arab Republic",
        "number": "760",
        "borders": [
            "IRQ",
            "ISR",
            "JOR",
            "LBN",
            "TUR"
        ]
    },
    {
        "code": "TW",
        "code3": "TWN",
        "name": "Taiwan",
        "number": "158"
    },
    {
        "code": "TJ",
        "code3": "TJK",
        "name": "Tajikistan",
        "number": "762",
        "borders": [
            "AFG",
            "CHN",
            "KGZ",
            "UZB"
        ]
    },
    {
        "code": "TZ",
        "code3": "TZA",
        "name": "Tanzania, United Republic of",
        "number": "834",
        "borders": [
            "BDI",
            "COD",
            "KEN",
            "MWI",
            "MOZ",
            "RWA",
            "UGA",
            "ZMB"
        ]
    },
    {
        "code": "TH",
        "code3": "THA",
        "name": "Thailand",
        "number": "764",
        "borders": [
            "MMR",
            "KHM",
            "LAO",
            "MYS"
        ]
    },
    {
        "code": "TL",
        "code3": "TLS",
        "name": "Timor-Leste",
        "number": "626",
        "borders": [
            "IDN"
        ]
    },
    {
        "code": "TG",
        "code3": "TGO",
        "name": "Togo",
        "number": "768",
        "borders": [
            "BEN",
            "BFA",
            "GHA"
        ]
    },
    {
        "code": "TK",
        "code3": "TKL",
        "name": "Tokelau",
        "number": "772"
    },
    {
        "code": "TO",
        "code3": "TON",
        "name": "Tonga",
        "number": "776"
    },
    {
        "code": "TT",
        "code3": "TTO",
        "name": "Trinidad and Tobago",
        "number": "780"
    },
    {
        "code": "TN",
        "code3": "TUN",
        "name": "Tunisia",
        "number": "788",
        "borders": [
            "DZA",
            "LBY"
        ]
    },
    {
        "code": "TR",
        "code3": "TUR",
        "name": "Turkey",
        "number": "792",
        "borders": [
            "ARM",
            "AZE",
            "BGR",
            "GEO",
            "GRC",
            "IRN",
            "IRQ",
            "SYR"
        ]
    },
    {
        "code": "TM",
        "code3": "TKM",
        "name": "Turkmenistan",
        "number": "795",
        "borders": [
            "AFG",
            "IRN",
            "KAZ",
            "UZB"
        ]
    },
    {
        "code": "TC",
        "code3": "TCA",
        "name": "Turks and Caicos Islands (the)",
        "number": "796"
    },
    {
        "code": "TV",
        "code3": "TUV",
        "name": "Tuvalu",
        "number": "798"
    },
    {
        "code": "UG",
        "code3": "UGA",
        "name": "Uganda",
        "number": "800",
        "borders": [
            "COD",
            "KEN",
            "RWA",
            "SSD",
            "TZA"
        ]
    },
    {
        "code": "UA",
        "code3": "UKR",
        "name": "Ukraine",
        "number": "804",
        "borders": [
            "BLR",
            "HUN",
            "MDA",
            "POL",
            "ROU",
            "RUS",
            "SVK"
        ]
    },
    {
        "code": "AE",
        "code3": "ARE",
        "name": "United Arab Emirates (the)",
        "number": "784",
        "borders": [
            "OMN",
            "SAU"
        ]
    },
    {
        "code": "GB",
        "code3": "GBR",
        "name": "United Kingdom of Great Britain and Northern Ireland (the)",
        "number": "826",
        "borders": [
            "IRL"
        ]
    },
    {
        "code": "UM",
        "code3": "UMI",
        "name": "United States Minor Outlying Islands (the)",
        "number": "581"
    },
    {
        "code": "US",
        "code3": "USA",
        "name": "United States of America (the)",
        "number": "840",
        "borders": [
            "CAN",
            "MEX"
        ]
    },
    {
        "code": "UY",
        "code3": "URY",
        "name": "Uruguay",
        "number": "858",
        "borders": [
            "ARG",
            "BRA"
        ]
    },
    {
        "code": "UZ",
        "code3": "UZB",
        "name": "Uzbekistan",
        "number": "860",
        "borders": [
            "AFG",
            "KAZ",
            "KGZ",
            "TJK",
            "TKM"
        ]
    },
    {
        "code": "VU",
        "code3": "VUT",
        "name": "Vanuatu",
        "number": "548"
    },
    {
        "code": "VE",
        "code3": "VEN",
        "name": "Venezuela (Bolivarian Republic of)",
        "number": "862",
        "borders": [
            "BRA",
            "COL",
            "GUY"
        ]
    },
    {
        "code": "VN",
        "code3": "VNM",
        "name": "Viet Nam",
        "number": "704",
        "borders": [
            "KHM",
            "CHN",
            "LAO"
        ]
    },
    {
        "code": "VG",
        "code3": "VGB",
        "name": "Virgin Islands (British)",
        "number": "092"
    },
    {
        "code": "VI",
        "code3": "VIR",
        "name": "Virgin Islands (U.S.)",
        "number": "850"
    },
    {
        "code": "WF",
        "code3": "WLF",
        "name": "Wallis and Futuna",
        "number": "876"
    },
    {
        "code": "EH",
        "code3": "ESH",
        "name": "Western Sahara",
        "number": "732",
        "borders": [
            "DZA",
            "MRT",
            "MAR"
        ]
    },
    {
        "code": "YE",
        "code3": "YEM",
        "name": "Yemen",
        "number": "887",
        "borders": [
            "OMN",
            "SAU"
        ]
    },
    {
        "code": "ZM",
        "code3": "ZMB",
        "name": "Zambia",
        "number": "894",
        "borders": [
            "AGO",
            "BWA",
            "COD",
            "MWI",
            "MOZ",
            "NAM",
            "TZA",
            "ZWE"
        ]
    },
    {
        "code": "ZW",
        "code3": "ZWE",
        "name": "Zimbabwe",
        "number": "716",
        "borders": [
            "BWA",
            "MOZ",
            "ZAF",
            "ZMB"
        ]
    },
    {
        "code": "AX",
        "code3": "ALA",
        "name": "Åland Islands",
        "number": "248"
    }
];

const allCountries = new Array();
for (let i = 0; i < countryObjects.length; i++) {
    allCountries[countryObjects[i]['code3']] = {
        'code2': countryObjects[i]['code'],
        'name': countryObjects[i]['name']
    };
}