

// const IBDPSubjects = () => {
//   return (
//     <div>page</div>
//   )
// }

// export default IBDPSubjects

// components/SubjectTable.tsx
import React from 'react';

interface Subject {
    SUBJECT_CODE: string;
    NAME_ON_TRANSCRIPT: string;
    SUBJECT_NAME_FULL: string;
    SL: string;
    HL: string;
    SUBJECT_GROUP?: string;
    COMMENTS?: string;
    YEAR?: string;
}
const subjects: Subject[] =[
    {
        "SUBJECT_CODE": "112826",
        "NAME_ON_TRANSCRIPT": "AFRIKAANS A: Literature",
        "SUBJECT_NAME_FULL": "AFRIKAANS A: Literature",
        "SL": "Yes",
        "HL": "Yes",
        "SUBJECT_GROUP": "Studies in languages and Literature"
    },
    {
        "SUBJECT_CODE": "112815",
        "NAME_ON_TRANSCRIPT": "ALBANIAN A: Literature",
        "SUBJECT_NAME_FULL": "ALBANIAN A: Literature",
        "SL": "Yes",
        "HL": "Yes",
        "SUBJECT_GROUP": "Studies in languages and Literature"
    },
    {
        "SUBJECT_CODE": "112766",
        "NAME_ON_TRANSCRIPT": "AMHARIC A: Literature",
        "SUBJECT_NAME_FULL": "AMHARIC A: Literature",
        "SL": "Yes",
        "HL": "Yes",
        "SUBJECT_GROUP": "Studies in languages and Literature"
    },
    {
        "SUBJECT_CODE": "112739",
        "NAME_ON_TRANSCRIPT": "ARABIC A: Lang and Literature",
        "SUBJECT_NAME_FULL": "ARABIC A Language and Literature",
        "SL": "Yes",
        "HL": "Yes",
        "SUBJECT_GROUP": "Studies in languages and Literature"
    },
    {
        "SUBJECT_CODE": "112721",
        "NAME_ON_TRANSCRIPT": "ARABIC A: Literature",
        "SUBJECT_NAME_FULL": "ARABIC A: Literature",
        "SL": "Yes",
        "HL": "Yes",
        "SUBJECT_GROUP": "Studies in languages and Literature"
    },
    {
        "SUBJECT_CODE": "100052",
        "NAME_ON_TRANSCRIPT": "ARABIC AB.",
        "SUBJECT_NAME_FULL": "ARABIC Ab Initio",
        "SL": "Yes",
        "HL": "",
        "SUBJECT_GROUP": "Language acquisition"
    },
    {
        "SUBJECT_CODE": "100053",
        "NAME_ON_TRANSCRIPT": "ARABIC B",
        "SUBJECT_NAME_FULL": "ARABIC B",
        "SL": "Yes",
        "HL": "Yes",
        "SUBJECT_GROUP": "Language acquisition"
    },
    {
        "SUBJECT_CODE": "112813",
        "NAME_ON_TRANSCRIPT": "ARMENIAN A: Literature",
        "SUBJECT_NAME_FULL": "ARMENIAN A: Literature",
        "SL": "Yes",
        "HL": "Yes",
        "SUBJECT_GROUP": "Studies in languages and Literature"
    },
    {
        "SUBJECT_CODE": "100058",
        "NAME_ON_TRANSCRIPT": "ART HISTORY",
        "SUBJECT_NAME_FULL": "ART HISTORY",
        "SL": "Yes",
        "HL": "",
        "SUBJECT_GROUP": "Individuals and societies"
    },
    {
        "SUBJECT_CODE": "100068",
        "NAME_ON_TRANSCRIPT": "ASTRONOMY",
        "SUBJECT_NAME_FULL": "ASTRONOMY",
        "SL": "Yes",
        "HL": "",
        "SUBJECT_GROUP": "Individuals and societies"
    },
    {
        "SUBJECT_CODE": "112903",
        "NAME_ON_TRANSCRIPT": "AZERBAIJANI A: Literature",
        "SUBJECT_NAME_FULL": "AZERBAIJANI A: Literature",
        "SL": "Yes",
        "HL": "Yes",
        "SUBJECT_GROUP": "Studies in languages and Literature"
    },
    {
        "SUBJECT_CODE": "112875",
        "NAME_ON_TRANSCRIPT": "B/RUSIAN A: Literature",
        "SUBJECT_NAME_FULL": "BELARUSIAN A: Literature",
        "SL": "Yes",
        "HL": "",
        "SUBJECT_GROUP": "Studies in languages and Literature"
    },
    {
        "SUBJECT_CODE": "112897",
        "NAME_ON_TRANSCRIPT": "BEMBA A: Literature",
        "SUBJECT_NAME_FULL": "BEMBA A: Literature",
        "SL": "Yes",
        "HL": "",
        "SUBJECT_GROUP": "Studies in languages and Literature"
    },
    {
        "SUBJECT_CODE": "112831",
        "NAME_ON_TRANSCRIPT": "BENGALI A: Literature",
        "SUBJECT_NAME_FULL": "BENGALI A: Literature",
        "SL": "Yes",
        "HL": "Yes",
        "SUBJECT_GROUP": "Studies in languages and Literature"
    },
    {
        "SUBJECT_CODE": "100088",
        "NAME_ON_TRANSCRIPT": "BIOLOGY",
        "SUBJECT_NAME_FULL": "BIOLOGY",
        "SL": "Yes",
        "HL": "Yes",
        "SUBJECT_GROUP": "Sciences"
    },
    {
        "SUBJECT_CODE": "112758",
        "NAME_ON_TRANSCRIPT": "BOSNIAN A: Literature",
        "SUBJECT_NAME_FULL": "BOSNIAN A: Literature",
        "SL": "Yes",
        "HL": "Yes",
        "SUBJECT_GROUP": "Studies in languages and Literature"
    },
    {
        "SUBJECT_CODE": "101711",
        "NAME_ON_TRANSCRIPT": "BRAZ SOC STUD",
        "SUBJECT_NAME_FULL": "BRAZILIAN SOCIAL STUDIES",
        "SL": "Yes",
        "HL": "",
        "SUBJECT_GROUP": "Individuals and societies"
    },
    {
        "SUBJECT_CODE": "112775",
        "NAME_ON_TRANSCRIPT": "BULGARIAN A: Literature",
        "SUBJECT_NAME_FULL": "BULGARIAN A: Literature",
        "SL": "Yes",
        "HL": "Yes",
        "SUBJECT_GROUP": "Studies in languages and Literature"
    },
    {
        "SUBJECT_CODE": "112814",
        "NAME_ON_TRANSCRIPT": "BURMESE A: Literature",
        "SUBJECT_NAME_FULL": "BURMESE A: Literature",
        "SL": "Yes",
        "HL": "Yes",
        "SUBJECT_GROUP": "Studies in languages and Literature"
    },
    {
        "SUBJECT_CODE": "147712",
        "NAME_ON_TRANSCRIPT": "BUSINESS MANAGEMENT",
        "SUBJECT_NAME_FULL": "Business Management",
        "SL": "Yes",
        "HL": "Yes",
        "SUBJECT_GROUP": "Individuals and societies"
    },
    {
        "SUBJECT_CODE": "112764",
        "NAME_ON_TRANSCRIPT": "CATALAN A: Literature",
        "SUBJECT_NAME_FULL": "CATALAN A: Literature",
        "SL": "Yes",
        "HL": "Yes",
        "SUBJECT_GROUP": "Studies in languages and Literature"
    },
    {
        "SUBJECT_CODE": "100113",
        "NAME_ON_TRANSCRIPT": "CHEMISTRY",
        "SUBJECT_NAME_FULL": "CHEMISTRY",
        "SL": "Yes",
        "HL": "Yes",
        "SUBJECT_GROUP": "Sciences"
    },
    {
        "SUBJECT_CODE": "112791",
        "NAME_ON_TRANSCRIPT": "CHINESE A: Lang and Literature",
        "SUBJECT_NAME_FULL": "CHINESE A Language and Literature",
        "SL": "Yes",
        "HL": "Yes",
        "SUBJECT_GROUP": "Studies in languages and Literature"
    },
    {
        "SUBJECT_CODE": "112783",
        "NAME_ON_TRANSCRIPT": "CHINESE A: Literature",
        "SUBJECT_NAME_FULL": "CHINESE A: Literature",
        "SL": "Yes",
        "HL": "Yes",
        "SUBJECT_GROUP": "Studies"
    },
    
        {
            "SUBJECT_CODE": "112910",
            "NAME_ON_TRANSCRIPT": "CHICHEWA A: Literature",
            "SUBJECT_NAME_FULL": "CHICHEWA A: Literature",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112740",
            "NAME_ON_TRANSCRIPT": "CHINESE A: Lang and Literature",
            "SUBJECT_NAME_FULL": "CHINESE A Language and Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112724",
            "NAME_ON_TRANSCRIPT": "CHINESE A: Literature",
            "SUBJECT_NAME_FULL": "CHINESE A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "117712",
            "NAME_ON_TRANSCRIPT": "CHINESE B-CANTONESE",
            "SUBJECT_NAME_FULL": "CHINESE B-CANTONESE",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "117711",
            "NAME_ON_TRANSCRIPT": "CHINESE B-MANDARIN",
            "SUBJECT_NAME_FULL": "CHINESE B-MANDARIN",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "100128",
            "NAME_ON_TRANSCRIPT": "CL.GK.ROM.ST.",
            "SUBJECT_NAME_FULL": "CLASSIC GREEK AND ROMAN STUDIES",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "100129",
            "NAME_ON_TRANSCRIPT": "CLASS GREEK",
            "SUBJECT_NAME_FULL": "CLASSIC GREEK",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "100132",
            "NAME_ON_TRANSCRIPT": "COMPUTER SC.",
            "SUBJECT_NAME_FULL": "COMPUTER SCIENCE",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Sciences"
        },
        {
            "SUBJECT_CODE": "112761",
            "NAME_ON_TRANSCRIPT": "CROATIAN A: Literature",
            "SUBJECT_NAME_FULL": "CROATIAN A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112725",
            "NAME_ON_TRANSCRIPT": "CZECH A: Literature",
            "SUBJECT_NAME_FULL": "CZECH A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "100140",
            "NAME_ON_TRANSCRIPT": "DANCE",
            "SUBJECT_NAME_FULL": "DANCE",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Arts"
        },
        {
            "SUBJECT_CODE": "112755",
            "NAME_ON_TRANSCRIPT": "DANISH A: Literature",
            "SUBJECT_NAME_FULL": "DANISH A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "162711",
            "NAME_ON_TRANSCRIPT": "DANISH AB.",
            "SUBJECT_NAME_FULL": "DANISH Ab Initio",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "100144",
            "NAME_ON_TRANSCRIPT": "DANISH B",
            "SUBJECT_NAME_FULL": "DANISH B",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "100146",
            "NAME_ON_TRANSCRIPT": "DESIGN TECH.",
            "SUBJECT_NAME_FULL": "DESIGN TECHOLOGY",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Sciences"
        },
        {
            "SUBJECT_CODE": "179711",
            "NAME_ON_TRANSCRIPT": "DIGITAL SOC",
            "SUBJECT_NAME_FULL": "DIGITAL SOCIETIES",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Individuals and societies"
        },
        {
            "SUBJECT_CODE": "112738",
            "NAME_ON_TRANSCRIPT": "DUTCH A: Lang and Literature",
            "SUBJECT_NAME_FULL": "DUTCH A Language and Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112720",
            "NAME_ON_TRANSCRIPT": "DUTCH A: Literature",
            "SUBJECT_NAME_FULL": "DUTCH A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "167711",
            "NAME_ON_TRANSCRIPT": "DUTCH AB.",
            "SUBJECT_NAME_FULL": "DUTCH Ab Initio",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "100157",
            "NAME_ON_TRANSCRIPT": "DUTCH B",
            "SUBJECT_NAME_FULL": "DUTCH B",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "112879",
            "NAME_ON_TRANSCRIPT": "DZONGKHA A: Literature",
            "SUBJECT_NAME_FULL": "DZONGKHA A: Literature",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "100164",
            "NAME_ON_TRANSCRIPT": "ECONOMICS",
            "SUBJECT_NAME_FULL": "ECONOMICS",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Individuals and societies"
        },
        {
            "SUBJECT_CODE": "112733",
            "NAME_ON_TRANSCRIPT": "ENGLISH A: Lang and Literature",
            "SUBJECT_NAME_FULL": "ENGLISH A Language and Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112711",
            "NAME_ON_TRANSCRIPT": "ENGLISH A: Literature",
            "SUBJECT_NAME_FULL": "ENGLISH A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "100704",
            "NAME_ON_TRANSCRIPT": "ENGLISH AB.",
            "SUBJECT_NAME_FULL": "ENGLISH Ab Initio",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Language acquisition"
        },
    
        {
            "SUBJECT_CODE": "100204",
            "NAME_ON_TRANSCRIPT": "FINNISH B",
            "SUBJECT_NAME_FULL": "FINNISH B",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "158711",
            "NAME_ON_TRANSCRIPT": "FOOD SCIENCE AND TECHNOLOGY",
            "SUBJECT_NAME_FULL": "FOOD SCIENCE AND TECHNOLOGY",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Sciences"
        },
        {
            "SUBJECT_CODE": "112734",
            "NAME_ON_TRANSCRIPT": "FRENCH A: Lang and Literature",
            "SUBJECT_NAME_FULL": "FRENCH A Language and Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112750",
            "NAME_ON_TRANSCRIPT": "FRENCH A: Literature",
            "SUBJECT_NAME_FULL": "FRENCH A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "100213",
            "NAME_ON_TRANSCRIPT": "FRENCH AB.",
            "SUBJECT_NAME_FULL": "FRENCH Ab Initio",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "100214",
            "NAME_ON_TRANSCRIPT": "FRENCH B",
            "SUBJECT_NAME_FULL": "FRENCH B",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "100222",
            "NAME_ON_TRANSCRIPT": "GEOGRAPHY",
            "SUBJECT_NAME_FULL": "GEOGRAPHY",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Sciences"
        },
        {
            "SUBJECT_CODE": "112877",
            "NAME_ON_TRANSCRIPT": "GEORGIAN A: Literature",
            "SUBJECT_NAME_FULL": "GEORGIAN A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112735",
            "NAME_ON_TRANSCRIPT": "GERMAN A: Lang and Literature",
            "SUBJECT_NAME_FULL": "GERMAN A Language and Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112751",
            "NAME_ON_TRANSCRIPT": "GERMAN A: Literature",
            "SUBJECT_NAME_FULL": "GERMAN A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "100230",
            "NAME_ON_TRANSCRIPT": "GERMAN AB",
            "SUBJECT_NAME_FULL": "GERMAN Ab Initio",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "100231",
            "NAME_ON_TRANSCRIPT": "GERMAN B",
            "SUBJECT_NAME_FULL": "GERMAN B",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "123711",
            "NAME_ON_TRANSCRIPT": "GLOBAL POLITICS",
            "SUBJECT_NAME_FULL": "GLOBAL POLITICS",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Individuals and societies"
        },
        {
            "SUBJECT_CODE": "175712",
            "NAME_ON_TRANSCRIPT": "GUARANI A: Literature",
            "SUBJECT_NAME_FULL": "GUARANI A: Literature",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112722",
            "NAME_ON_TRANSCRIPT": "HEBREW A: Literature",
            "SUBJECT_NAME_FULL": "HEBREW A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "100246",
            "NAME_ON_TRANSCRIPT": "HEBREW B",
            "SUBJECT_NAME_FULL": "HEBREW B",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "112747",
            "NAME_ON_TRANSCRIPT": "HINDI A: Literature",
            "SUBJECT_NAME_FULL": "HINDI A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "100252",
            "NAME_ON_TRANSCRIPT": "HINDI B",
            "SUBJECT_NAME_FULL": "HINDI B",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "100680",
            "NAME_ON_TRANSCRIPT": "HISTORY",
            "SUBJECT_NAME_FULL": "HISTORY",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Individuals and societies"
        },
        {
            "SUBJECT_CODE": "149713",
            "NAME_ON_TRANSCRIPT": "HISTORY AFRICA AND MIDDLE EAST",
            "SUBJECT_NAME_FULL": "HISTORY AFRICA AND MIDDLE EAST",
            "SL": "",
            "HL": "Yes",
            "SUBJECT_GROUP": "Individuals and societies"
        },
        {
            "SUBJECT_CODE": "149711",
            "NAME_ON_TRANSCRIPT": "HISTORY AMERICAS",
            "SUBJECT_NAME_FULL": "HISTORY AMERICAS",
            "SL": "",
            "HL": "Yes",
            "SUBJECT_GROUP": "Individuals and societies"
        },
        {
            "SUBJECT_CODE": "149714",
            "NAME_ON_TRANSCRIPT": "HISTORY ASIA AND OCEANIA",
            "SUBJECT_NAME_FULL": "HISTORY ASIA AND OCEANIA",
            "SL": "",
            "HL": "Yes",
            "SUBJECT_GROUP": "Individuals and societies"
        },
        {
            "SUBJECT_CODE": "149712",
            "NAME_ON_TRANSCRIPT": "HISTORY EUROPE",
            "SUBJECT_NAME_FULL": "HISTORY EUROPE",
            "SL": "",
            "HL": "Yes",
            "SUBJECT_GROUP": "Individuals and societies"
        },
        {
            "SUBJECT_CODE": "112748",
            "NAME_ON_TRANSCRIPT": "HUNGARIAN A: Literature",
            "SUBJECT_NAME_FULL": "HUNGARIAN A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112883",
            "NAME_ON_TRANSCRIPT": "ICELANDIC A: Literature",
            "SUBJECT_NAME_FULL": "ICELANDIC A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "125711",
            "NAME_ON_TRANSCRIPT": "INDONESIAN A: Lang and Literature",
            "SUBJECT_NAME_FULL": "INDONESIAN A: Lang and Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
    {
        "SUBJECT_CODE": "112749",
        "NAME_ON_TRANSCRIPT": "INDONESIAN A: Literature",
        "SUBJECT_NAME_FULL": "INDONESIAN A: Literature",
        "SL": "Yes",
        "HL": "Yes",
        "SUBJECT_GROUP": "Studies in languages and Literature"
    }, {
        "SUBJECT_CODE": "100283",
        "NAME_ON_TRANSCRIPT": "INDONESIAN AB",
        "SUBJECT_NAME_FULL": "INDONESIAN Ab Initio",
        "SL": "Yes",
        "HL": "",
        "SUBJECT_GROUP": "Language acquisition"
    }, {
        "SUBJECT_CODE": "100284",
        "NAME_ON_TRANSCRIPT": "INDONESIAN B",
        "SUBJECT_NAME_FULL": "INDONESIAN B",
        "SL": "Yes",
        "HL": "",
        "SUBJECT_GROUP": "Language acquisition"
    }, {
        "SUBJECT_CODE": "112838",
        "NAME_ON_TRANSCRIPT": "ITALIAN A: Lang and Literature",
        "SUBJECT_NAME_FULL": "ITALIAN A Language and Literature",
        "SL": "Yes",
        "HL": "Yes",
        "SUBJECT_GROUP": "Studies in languages and Literature"
    }, {
        "SUBJECT_CODE": "112753",
        "NAME_ON_TRANSCRIPT": "ITALIAN A: Literature",
        "SUBJECT_NAME_FULL": "ITALIAN A: Literature",
        "SL": "Yes",
        "HL": "Yes",
        "SUBJECT_GROUP": "Studies in languages and Literature"
    },
    
        {
            "SUBJECT_CODE": "100298",
            "NAME_ON_TRANSCRIPT": "ITALIAN AB.",
            "SUBJECT_NAME_FULL": "ITALIAN Ab Initio",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "100299",
            "NAME_ON_TRANSCRIPT": "ITALIAN B",
            "SUBJECT_NAME_FULL": "ITALIAN B",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "128711",
            "NAME_ON_TRANSCRIPT": "JAPANESE A: Lang and Literature",
            "SUBJECT_NAME_FULL": "JAPANESE A Language and Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112743",
            "NAME_ON_TRANSCRIPT": "JAPANESE A: Literature",
            "SUBJECT_NAME_FULL": "JAPANESE A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "100307",
            "NAME_ON_TRANSCRIPT": "JAPANESE AB.",
            "SUBJECT_NAME_FULL": "JAPANESE Ab Initio",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "100308",
            "NAME_ON_TRANSCRIPT": "JAPANESE B",
            "SUBJECT_NAME_FULL": "JAPANESE B",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "112804",
            "NAME_ON_TRANSCRIPT": "KAZAKH A: Literature",
            "SUBJECT_NAME_FULL": "KAZAKH A: Literature",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112896",
            "NAME_ON_TRANSCRIPT": "KHMER A: Literature",
            "SUBJECT_NAME_FULL": "KHMER A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "115711",
            "NAME_ON_TRANSCRIPT": "KINYARWANDA A: Literature",
            "SUBJECT_NAME_FULL": "KINYARWANDA A: Literature",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "178713",
            "NAME_ON_TRANSCRIPT": "KISWAHILI A: Literature",
            "SUBJECT_NAME_FULL": "KISWAHILI A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "178714",
            "NAME_ON_TRANSCRIPT": "KISWAHILI AB.",
            "SUBJECT_NAME_FULL": "KISWAHILI Ab Initio",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "178712",
            "NAME_ON_TRANSCRIPT": "KISWAHILI B",
            "SUBJECT_NAME_FULL": "KISWAHILI B",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "115715",
            "NAME_ON_TRANSCRIPT": "KOREAN A: Lang and Literature",
            "SUBJECT_NAME_FULL": "KOREAN A: Lang and Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112744",
            "NAME_ON_TRANSCRIPT": "KOREAN A: Literature",
            "SUBJECT_NAME_FULL": "KOREAN A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "100334",
            "NAME_ON_TRANSCRIPT": "KOREAN B",
            "SUBJECT_NAME_FULL": "KOREAN B",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "184711",
            "NAME_ON_TRANSCRIPT": "LANGUAGE AND CULTURE",
            "SUBJECT_NAME_FULL": "LANGUAGE AND CULTURE",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Studies in language and literature AND individuals and societies"
        },
    
        {
            "SUBJECT_CODE": "112881",
            "NAME_ON_TRANSCRIPT": "LAO A: Literature",
            "SUBJECT_NAME_FULL": "LAO A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "100340",
            "NAME_ON_TRANSCRIPT": "LATIN",
            "SUBJECT_NAME_FULL": "LATIN",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "112723",
            "NAME_ON_TRANSCRIPT": "LATVIAN A: Literature",
            "SUBJECT_NAME_FULL": "LATVIAN A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "182711",
            "NAME_ON_TRANSCRIPT": "LITERARY ART",
            "SUBJECT_NAME_FULL": "Literarary Art",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Arts"
        },
        {
            "SUBJECT_CODE": "112845",
            "NAME_ON_TRANSCRIPT": "LITERATURE AND PERFORMANCE",
            "SUBJECT_NAME_FULL": "Literature and Performance",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112765",
            "NAME_ON_TRANSCRIPT": "LITHUANIAN A: Literature",
            "SUBJECT_NAME_FULL": "LITHUANIAN A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112841",
            "NAME_ON_TRANSCRIPT": "LUGANDA A: Literature",
            "SUBJECT_NAME_FULL": "LUGANDA A: Literature",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112712",
            "NAME_ON_TRANSCRIPT": "MACEDONIAN A: Literature",
            "SUBJECT_NAME_FULL": "MACEDONIAN A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "155711",
            "NAME_ON_TRANSCRIPT": "MALAGASY A: Literature",
            "SUBJECT_NAME_FULL": "MALAGASY A: Literature",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112745",
            "NAME_ON_TRANSCRIPT": "MALAY A: Literature",
            "SUBJECT_NAME_FULL": "MALAY A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "100367",
            "NAME_ON_TRANSCRIPT": "MALAY B",
            "SUBJECT_NAME_FULL": "MALAY B",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "112867",
            "NAME_ON_TRANSCRIPT": "MALAYALAM A: Literature",
            "SUBJECT_NAME_FULL": "MALAYALAM A: Literature",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "100375",
            "NAME_ON_TRANSCRIPT": "MANDARIN AB.",
            "SUBJECT_NAME_FULL": "MANDARIN Ab Initio",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "100671",
            "NAME_ON_TRANSCRIPT": "MARINE SCIENCE",
            "SUBJECT_NAME_FULL": "MARINE SCIENCE",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Sciences"
        },
    
        {
            "SUBJECT_CODE": "166711",
            "NAME_ON_TRANSCRIPT": "MATHEMATICS ANALYSIS AND APPROACHES",
            "SUBJECT_NAME_FULL": "MATHEMATICS ANALYSIS AND APPROACHES",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Mathematics"
        },
        {
            "SUBJECT_CODE": "166712",
            "NAME_ON_TRANSCRIPT": "MATHEMATICS APPLICATIONS AND INTERPRETATIONS",
            "SUBJECT_NAME_FULL": "MATHEMATICS APPLICATIONS AND INTERPRETATIONS",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Mathematics"
        },
        {
            "SUBJECT_CODE": "112732",
            "NAME_ON_TRANSCRIPT": "MOD. GREEK A: Lang and Literature",
            "SUBJECT_NAME_FULL": "MODERN GREEK A Language and Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112727",
            "NAME_ON_TRANSCRIPT": "MOD. GREEK A: Literature",
            "SUBJECT_NAME_FULL": "MODERN GREEK A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "158712",
            "NAME_ON_TRANSCRIPT": "MODERN HISTORY OF KAZAKHSTAN",
            "SUBJECT_NAME_FULL": "MODERN HISTORY OF KAZAKHSTAN",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Individuals and societies"
        },
        {
            "SUBJECT_CODE": "112882",
            "NAME_ON_TRANSCRIPT": "MONGOLIAN A: Literature",
            "SUBJECT_NAME_FULL": "MONGOLIAN A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "100402",
            "NAME_ON_TRANSCRIPT": "MUSIC",
            "SUBJECT_NAME_FULL": "Music",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Arts"
        },
        {
            "SUBJECT_CODE": "150711",
            "NAME_ON_TRANSCRIPT": "NATURE OF SCIENCE",
            "SUBJECT_NAME_FULL": "Nature Of Science",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": ""
        },
        {
            "SUBJECT_CODE": "112819",
            "NAME_ON_TRANSCRIPT": "NDEBELE A: Literature",
            "SUBJECT_NAME_FULL": "INDEBELE A: Literature",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112763",
            "NAME_ON_TRANSCRIPT": "NEPALI A: Literature",
            "SUBJECT_NAME_FULL": "NEPALI A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112840",
            "NAME_ON_TRANSCRIPT": "NORWEGIAN A: Lang and Literature",
            "SUBJECT_NAME_FULL": "NORWEGIAN A Language and Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112756",
            "NAME_ON_TRANSCRIPT": "NORWEGIAN A: Literature",
            "SUBJECT_NAME_FULL": "NORWEGIAN A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "100424",
            "NAME_ON_TRANSCRIPT": "NORWEGIAN B",
            "SUBJECT_NAME_FULL": "NORWEGIAN B",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "112746",
            "NAME_ON_TRANSCRIPT": "PERSIAN A: Literature",
            "SUBJECT_NAME_FULL": "PERSIAN A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "100449",
            "NAME_ON_TRANSCRIPT": "PHILOSOPHY",
            "SUBJECT_NAME_FULL": "PHILOSOPHY",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Individuals and societies"
        },
        {
            "SUBJECT_CODE": "100452",
            "NAME_ON_TRANSCRIPT": "PHYSICS",
            "SUBJECT_NAME_FULL": "PHYSICS",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Sciences"
        },
        {
            "SUBJECT_CODE": "112717",
            "NAME_ON_TRANSCRIPT": "POLISH A: Literature",
            "SUBJECT_NAME_FULL": "POLISH A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112730",
            "NAME_ON_TRANSCRIPT": "PORTUGUESE A: Lang and Literature",
            "SUBJECT_NAME_FULL": "PORTUGUESE A Language and Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112718",
            "NAME_ON_TRANSCRIPT": "PORTUGUESE A: Literature",
            "SUBJECT_NAME_FULL": "PORTUGUESE A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "100472",
            "NAME_ON_TRANSCRIPT": "PORTUGUESE B",
            "SUBJECT_NAME_FULL": "PORTUGUESE B",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "100474",
            "NAME_ON_TRANSCRIPT": "PSYCHOLOGY",
            "SUBJECT_NAME_FULL": "PSYCHOLOGY",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Individuals and societies"
        },
        {
            "SUBJECT_CODE": "112801",
            "NAME_ON_TRANSCRIPT": "PUNJABI A: Literature",
            "SUBJECT_NAME_FULL": "PUNJABI A: Literature",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "100657",
            "NAME_ON_TRANSCRIPT": "REF PROJECT",
            "SUBJECT_NAME_FULL": "Reflective Project",
            "SL": "",
            "HL": "Yes",
            "SUBJECT_GROUP": ""
        },
        {
            "SUBJECT_CODE": "112886",
            "NAME_ON_TRANSCRIPT": "ROMANIAN A: Literature",
            "SUBJECT_NAME_FULL": "ROMANIAN A: Literature.",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
    
        {
            "SUBJECT_CODE": "112839",
            "NAME_ON_TRANSCRIPT": "RUSSIAN A: Lang and Literature",
            "SUBJECT_NAME_FULL": "RUSSIAN A Language and Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112754",
            "NAME_ON_TRANSCRIPT": "RUSSIAN A: Literature",
            "SUBJECT_NAME_FULL": "RUSSIAN A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "100492",
            "NAME_ON_TRANSCRIPT": "RUSSIAN AB.",
            "SUBJECT_NAME_FULL": "RUSSIAN Ab Initio",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "100493",
            "NAME_ON_TRANSCRIPT": "RUSSIAN B",
            "SUBJECT_NAME_FULL": "RUSSIAN B",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Language acquisition"
        },
    
        {
            "SUBJECT_CODE": "112759",
            "NAME_ON_TRANSCRIPT": "SERBIAN A: Literature",
            "SUBJECT_NAME_FULL": "SERBIAN A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112762",
            "NAME_ON_TRANSCRIPT": "SESOTHO A: Literature",
            "SUBJECT_NAME_FULL": "SESOTHO A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112832",
            "NAME_ON_TRANSCRIPT": "SHONA A: Literature",
            "SUBJECT_NAME_FULL": "SHONA A: Literature",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "177711",
            "NAME_ON_TRANSCRIPT": "SINHALA A: Literature",
            "SUBJECT_NAME_FULL": "SINHALA A: Literature.",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112880",
            "NAME_ON_TRANSCRIPT": "SISWATI A: Literature",
            "SUBJECT_NAME_FULL": "SISWATI A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112760",
            "NAME_ON_TRANSCRIPT": "SLOVAK A: Literature",
            "SUBJECT_NAME_FULL": "SLOVAK A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112741",
            "NAME_ON_TRANSCRIPT": "SLOVENE A: Literature",
            "SUBJECT_NAME_FULL": "SLOVENE A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "100532",
            "NAME_ON_TRANSCRIPT": "SOC.CUL.ANTH.",
            "SUBJECT_NAME_FULL": "SOCIAL AND CULTURAL ANTHOPOLOGY",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Individuals and societies"
        },
        {
            "SUBJECT_CODE": "112800",
            "NAME_ON_TRANSCRIPT": "SOMALI A: Literature",
            "SUBJECT_NAME_FULL": "SOMALI A: Literature",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112736",
            "NAME_ON_TRANSCRIPT": "SPANISH A: Lang and Literature",
            "SUBJECT_NAME_FULL": "SPANISH A Language and Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112752",
            "NAME_ON_TRANSCRIPT": "SPANISH A: Literature",
            "SUBJECT_NAME_FULL": "SPANISH A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "100542",
            "NAME_ON_TRANSCRIPT": "SPANISH AB.",
            "SUBJECT_NAME_FULL": "SPANISH Ab Initio",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "100543",
            "NAME_ON_TRANSCRIPT": "SPANISH B",
            "SUBJECT_NAME_FULL": "SPANISH B",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "100546",
            "NAME_ON_TRANSCRIPT": "SPORTS EX SCI",
            "SUBJECT_NAME_FULL": "SPORTS EXERCISE AND HEALTH SCIENCE",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Sciences"
        },
        {
            "SUBJECT_CODE": "112737",
            "NAME_ON_TRANSCRIPT": "SWEDISH A: Lang and Literature",
            "SUBJECT_NAME_FULL": "SWEDISH A Language and Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112757",
            "NAME_ON_TRANSCRIPT": "SWEDISH A: Literature",
            "SUBJECT_NAME_FULL": "SWEDISH A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "162712",
            "NAME_ON_TRANSCRIPT": "SWEDISH AB.",
            "SUBJECT_NAME_FULL": "SWEDISH Ab Initio",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "100559",
            "NAME_ON_TRANSCRIPT": "SWEDISH B",
            "SUBJECT_NAME_FULL": "SWEDISH B",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "112878",
            "NAME_ON_TRANSCRIPT": "TAJIK A: Literature",
            "SUBJECT_NAME_FULL": "TAJIK A: Literature",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Studies in languages and Literature."
        },
        {
            "SUBJECT_CODE": "112810",
            "NAME_ON_TRANSCRIPT": "TAMIL A: Literature",
            "SUBJECT_NAME_FULL": "TAMIL A: Literature",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "100563",
            "NAME_ON_TRANSCRIPT": "TAMIL B",
            "SUBJECT_NAME_FULL": "TAMIL B",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Language acquisition"
        },
        {
            "SUBJECT_CODE": "112901",
            "NAME_ON_TRANSCRIPT": "TELUGU A: Literature",
            "SUBJECT_NAME_FULL": "TELUGU A: Literature",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112731",
            "NAME_ON_TRANSCRIPT": "THAI A: Lang and Literature",
            "SUBJECT_NAME_FULL": "THAI A Language and Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112713",
            "NAME_ON_TRANSCRIPT": "THAI A: Literature",
            "SUBJECT_NAME_FULL": "THAI A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
    
        {
            "SUBJECT_CODE": "100575",
            "NAME_ON_TRANSCRIPT": "THEATRE",
            "SUBJECT_NAME_FULL": "Theatre",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Arts"
        },
        {
            "SUBJECT_CODE": "112835",
            "NAME_ON_TRANSCRIPT": "TIBETAN A: Literature",
            "SUBJECT_NAME_FULL": "TIBETAN A: Literature",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "107711",
            "NAME_ON_TRANSCRIPT": "TURKEY IN THE 20TH CENTURY",
            "SUBJECT_NAME_FULL": "TURKEY IN THE 20TH CENTURY",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Individuals and societies"
        },
        {
            "SUBJECT_CODE": "112714",
            "NAME_ON_TRANSCRIPT": "TURKISH A: Literature",
            "SUBJECT_NAME_FULL": "TURKISH A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112802",
            "NAME_ON_TRANSCRIPT": "UKRAINIAN A: Literature",
            "SUBJECT_NAME_FULL": "UKRAINIAN A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112885",
            "NAME_ON_TRANSCRIPT": "URDU A: Literature",
            "SUBJECT_NAME_FULL": "URDU A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "180711",
            "NAME_ON_TRANSCRIPT": "UYGHUR A: Literature",
            "SUBJECT_NAME_FULL": "UYGHUR A: Literature",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "174711",
            "NAME_ON_TRANSCRIPT": "VIETNAMESE A: Lang and Literature",
            "SUBJECT_NAME_FULL": "VIETNAMESE A: Lang and Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "112884",
            "NAME_ON_TRANSCRIPT": "VIETNAMESE A: Literature",
            "SUBJECT_NAME_FULL": "VIETNAMESE A: Literature",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "100608",
            "NAME_ON_TRANSCRIPT": "VISUAL ARTS",
            "SUBJECT_NAME_FULL": "Visual Arts",
            "SL": "Yes",
            "HL": "Yes",
            "SUBJECT_GROUP": "Arts"
        },
        {
            "SUBJECT_CODE": "112715",
            "NAME_ON_TRANSCRIPT": "WELSH A: Literature",
            "SUBJECT_NAME_FULL": "WELSH A: Literature",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Studies in languages and Literature"
        },
        {
            "SUBJECT_CODE": "108714",
            "NAME_ON_TRANSCRIPT": "WORLD ARTS AND CULTURES",
            "SUBJECT_NAME_FULL": "WORLD ARTS AND CULTURES",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Individuals and societies"
        },
        {
            "SUBJECT_CODE": "100619",
            "NAME_ON_TRANSCRIPT": "WORLD RELIG.",
            "SUBJECT_NAME_FULL": "WORLD RELIGIONS",
            "SL": "Yes",
            "HL": "",
            "SUBJECT_GROUP": "Individuals and societies"
        }
    
    
]

interface DiscontinuedSubject {
    SUBJECT_CODE: string;
    NAME_ON_TRANSCRIPT: string;
    SUBJECT_NAME_FULL: string;
    SL: string;
    HL: string;
    COMMENTS: string;
    YEAR: string;
}
const Discontinuedsubjects: DiscontinuedSubject[] = [
    {
        "SUBJECT_CODE": "108714",
        "NAME_ON_TRANSCRIPT": "WORLD ARTS AND CULTURES",
        "SUBJECT_NAME_FULL": "WORLD ARTS AND CULTURES",
        "SL": "Yes",
        "HL": "",
        "COMMENTS": "To be discontinued (last assessment in May 2026)",
        "YEAR": "2026"
    },
    {
        "SUBJECT_CODE": "100128",
        "NAME_ON_TRANSCRIPT": "CL.GK.ROM.ST.",
        "SUBJECT_NAME_FULL": "CLASSICAL GREEK AND ROMAN STUDIES",
        "SL": "Yes",
        "HL": "",
        "COMMENTS": "To be discontinued (last assessment in May 2025)",
        "YEAR": "2025"
    },
    {
        "SUBJECT_CODE": "158712",
        "NAME_ON_TRANSCRIPT": "MODERN HISTORY OF KAZAKHSTAN",
        "SUBJECT_NAME_FULL": "MODERN HISTORY OF KAZAKHSTAN",
        "SL": "Yes",
        "HL": "",
        "COMMENTS": "To be discontinued (last assessment in May 2025)",
        "YEAR": "2025"
    },
    {
        "SUBJECT_CODE": "100462",
        "NAME_ON_TRANSCRIPT": "POLITICAL TH.",
        "SUBJECT_NAME_FULL": "POLITICAL THOUGHT",
        "SL": "Yes",
        "HL": "",
        "COMMENTS": "Discontinued",
        "YEAR": "2023"
    },
    {
        "SUBJECT_CODE": "100300",
        "NAME_ON_TRANSCRIPT": "ITGS",
        "SUBJECT_NAME_FULL": "INFORMATION TECHNOLOGY IN GLOBAL SOCIETY",
        "SL": "Yes",
        "HL": "Yes",
        "COMMENTS": "This subject was replaced with a new subject: Digital Society",
        "YEAR": "2023"
    },
    {
        "SUBJECT_CODE": "100385",
        "NAME_ON_TRANSCRIPT": "MATH.STUDIES",
        "SUBJECT_NAME_FULL": "MATHEMATICAL STUDIES",
        "SL": "Yes",
        "HL": "",
        "COMMENTS": "This subject was replaced with two new Mathematics subjects",
        "YEAR": "2020"
    },
    {
        "SUBJECT_CODE": "100386",
        "NAME_ON_TRANSCRIPT": "MATHEMATICS",
        "SUBJECT_NAME_FULL": "MATHEMATICS",
        "SL": "Yes",
        "HL": "Yes",
        "COMMENTS": "This subject was replaced with two new Mathematics subjects",
        "YEAR": "2020"
    },
    {
        "SUBJECT_CODE": "100218",
        "NAME_ON_TRANSCRIPT": "FURTH. MATHS",
        "SUBJECT_NAME_FULL": "FURTHER MATHEMATICS",
        "SL": "Yes",
        "HL": "Yes",
        "COMMENTS": "Discontinued",
        "YEAR": "2020"
    },
    {
        "SUBJECT_CODE": "100117",
        "NAME_ON_TRANSCRIPT": "CHILE & PAC",
        "SUBJECT_NAME_FULL": "CHILE AND PACIFIC BASIN",
        "SL": "Yes",
        "HL": "",
        "COMMENTS": "Discontinued",
        "YEAR": "2019"
    },
    {
        "SUBJECT_CODE": "158711",
        "NAME_ON_TRANSCRIPT": "FOOD SCIENCE AND TECHNOLOGY",
        "SUBJECT_NAME_FULL": "SCIENCE, TECHNOLOGY AND SOCIETY",
        "SL": "Yes",
        "HL": "",
        "COMMENTS": "Discontinued",
        "YEAR": "2017"
    },
    
        {
            "SUBJECT_CODE": "100615",
            "NAME_ON_TRANSCRIPT": "WLD. POLITICS",
            "SUBJECT_NAME_FULL": "WORLD POLITICS",
            "SL": "Yes",
            "HL": "",
            "COMMENTS": "This subject was replaced with a new subject: Global Politics",
            "YEAR": "2016"
        },
        {
            "SUBJECT_CODE": "100442",
            "NAME_ON_TRANSCRIPT": "PEACE&CON.ST.",
            "SUBJECT_NAME_FULL": "PEACE AND CONFLICT STUDIES",
            "SL": "Yes",
            "HL": "",
            "COMMENTS": "This subject was replaced with a new subject: Global Politics",
            "YEAR": "2016"
        },
        {
            "SUBJECT_CODE": "100265",
            "NAME_ON_TRANSCRIPT": "HUMAN RIGHTS",
            "SUBJECT_NAME_FULL": "HUMAN RIGHTS",
            "SL": "Yes",
            "HL": "",
            "COMMENTS": "This subject was replaced with a new subject: Global Politics",
            "YEAR": "2016"
        },
        {
            "SUBJECT_CODE": "100102",
            "NAME_ON_TRANSCRIPT": "BUS.& MAN.",
            "SUBJECT_NAME_FULL": "BUSINESS AND MANAGEMENT",
            "SL": "Yes",
            "HL": "Yes",
            "COMMENTS": "This subject was updated and renamed to Business Management",
            "YEAR": "2015"
        },
        {
            "SUBJECT_CODE": "100125",
            "NAME_ON_TRANSCRIPT": "CHINESE STDS.",
            "SUBJECT_NAME_FULL": "CHINESE STUDIES",
            "SL": "Yes",
            "HL": "",
            "COMMENTS": "Discontinued",
            "YEAR": "2014"
        },
        {
            "SUBJECT_CODE": "100171",
            "NAME_ON_TRANSCRIPT": "ELECTRONICS",
            "SUBJECT_NAME_FULL": "ELECTRONICS",
            "SL": "Yes",
            "HL": "",
            "COMMENTS": "Discontinued",
            "YEAR": "2013"
        },
        {
            "SUBJECT_CODE": "",
            "NAME_ON_TRANSCRIPT": "LANGUAGE A2",
            "SUBJECT_NAME_FULL": "LANGUAGE A2 (EG. ENGLISH A2)",
            "SL": "Yes",
            "HL": "Yes",
            "COMMENTS": "This subject was updated and renamed to Language A: Language and Literature",
            "YEAR": "2012"
        },
        {
            "SUBJECT_CODE": "",
            "NAME_ON_TRANSCRIPT": "LANGUAGE A1",
            "SUBJECT_NAME_FULL": "LANGUAGE A1 (EG. ENGLISH A1)",
            "SL": "Yes",
            "HL": "Yes",
            "COMMENTS": "This subject was updated and renamed to Language A: Literature",
            "YEAR": "2012"
        },
        {
            "SUBJECT_CODE": "100568",
            "NAME_ON_TRANSCRIPT": "TEXT AND PERF",
            "SUBJECT_NAME_FULL": "TEXT AND PERFORMANCE",
            "SL": "Yes",
            "HL": "",
            "COMMENTS": "This subject was updated and renamed to a mainstream subject: Literature and Performance",
            "YEAR": "2012"
        }
    
]

const IBDPSubjects: React.FC =()=> {
    return (
        <>
            <h1 className="text-4xl font-bold mb-4 text-headingcol text-center" >IBDP Subjects</h1>
            <p className="text-2xl font-bold mt-4 text-headingcol text-center" >All Diploma Programme (DP) subjects</p>
            <div className="overflow-x-auto mt-6 max-w-6xl container mx-auto">
            <table className="  divide-y divide-gray-200 table-auto">
                <thead className="bg-blue-200">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">SUBJECT CODE</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">NAME ON TRANSCRIPT</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">SUBJECT NAME FULL</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">SL</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">HL</th>
                        {subjects.some(s => s.SUBJECT_GROUP) && <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">SUBJECT GROUP</th>}
                        {subjects.some(s => s.COMMENTS) && <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">COMMENTS</th>}
                        {subjects.some(s => s.YEAR) && <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">YEAR</th>}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {subjects.map((subject, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{subject.SUBJECT_CODE}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{subject.NAME_ON_TRANSCRIPT}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{subject.SUBJECT_NAME_FULL}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{subject.SL}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{subject.HL}</td>
                            {subjects.some(s => s.SUBJECT_GROUP) && <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{subject.SUBJECT_GROUP}</td>}
                            {subjects.some(s => s.COMMENTS) && <td className="px-6 py-4 text-sm text-gray-500">{subject.COMMENTS}</td>}
                            {subjects.some(s => s.YEAR) && <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{subject.YEAR}</td>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

            <div>
                <p className="text-2xl font-bold mt-4 text-headingcol text-center">DISCONTINUED SUBJECTS</p>
                <div className="overflow-x-auto mt-6">
                    <table className="max-w-6xl container mx-auto divide-y divide-gray-200 table-auto">
                        <thead className="bg-blue-200">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">SUBJECT CODE</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">NAME ON TRANSCRIPT</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">SUBJECT NAME FULL</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">SL</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">HL</th>

                                {Discontinuedsubjects.some(s => s.COMMENTS) && <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">COMMENTS</th>}
                                {Discontinuedsubjects.some(s => s.YEAR) && <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">YEAR</th>}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {Discontinuedsubjects.map((subject, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{subject.SUBJECT_CODE}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{subject.NAME_ON_TRANSCRIPT}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{subject.SUBJECT_NAME_FULL}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{subject.SL}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{subject.HL}</td>

                                    {subject.COMMENTS && <td className="px-6 py-4 text-sm text-gray-500">{subject.COMMENTS}</td>}
                                    {subject.YEAR && <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{subject.YEAR}</td>}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
};

export default IBDPSubjects;