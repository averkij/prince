import {
    PARTS_AMOUNT,
} from "@/common/helper";

export const LANGUAGES = {
    'alt': {
        langCode: "alt",
        name: "Altai",
        icon: "⛰️"
    },
    'ba': {
        langCode: "ba",
        name: "Bashkir",
        icon: "🌹"
    },
    'cv': {
        langCode: "cv",
        name: "Chuvash",
        icon: "🌞"
    },
    'di': {
        langCode: "di",
        name: "Digorsky",
        icon: "🗻"
    },
    'myv': {
        langCode: "myv",
        name: "Erzya",
        icon: "🦊"
    },
    'fr': {
        langCode: "fr",
        name: "French",
        icon: "🥖"
    },
    'krc': {
        langCode: "krc",
        name: "Karachay-Balkar",
        icon: "🗻"
    },
    'kv': {
        langCode: "kv",
        name: "Komi",
        icon: "🐦"
    },
    'mrh': {
        langCode: "mrh",
        name: "Mari",
        icon: "🐻"
    },
    'mdf': {
        langCode: "mdf",
        name: "Moksha",
        icon: "🍀"
    },
    'mrj': {
        langCode: "mrj",
        name: "Hill Mari",
        icon: "⛰️"
    },
    'ru': {
        langCode: "ru",
        name: "Russian",
        icon: "⚽️"
    },
    'tt': {
        langCode: "tt",
        name: "Tatar",
        icon: "☕"
    },
    'sah': {
        langCode: "sah",
        name: "Yakut",
        icon: "💎"
    },
    // 'en': {
    //     langCode: "en",
    //     name: "English",
    //     icon: "🧸"
    // },
    // 'de': {
    //     langCode: "de",
    //     name: "German",
    //     icon: "🍺"
    // },
    // 'fr': {
    //     langCode: "fr",
    //     name: "French",
    //     icon: "🥖"
    // },
    // 'it': {
    //     langCode: "it",
    //     name: "Italian",
    //     icon: "🍕"
    // },
    // 'es': {
    //     langCode: "es",
    //     name: "Spanish",
    //     icon: "🍅"
    // },
    // 'pt': {
    //     langCode: "pt",
    //     name: "Portugal",
    //     icon: "🍊"
    // },
    // 'tr': {
    //     langCode: "tr",
    //     name: "Turkish",
    //     icon: "☕️"
    // },
    // 'cz': {
    //     langCode: "cz",
    //     name: "Czech",
    //     icon: "🍺"
    // },
    // 'pl': {
    //     langCode: "pl",
    //     name: "Polish",
    //     icon: "🍬"
    // },
    // 'bu': {
    //     langCode: "bu",
    //     name: "Belarusian",
    //     icon: "🌼"
    // },
    // 'uk': {
    //     langCode: "uk",
    //     name: "Ukrainian",
    //     icon: "🌻"
    // },
    // 'hu': {
    //     langCode: "hu",
    //     name: "Hungarian",
    //     icon: "🎄"
    // },
    // 'nl': {
    //     langCode: "nl",
    //     name: "Dutch",
    //     icon: "🌈"
    // },
    // 'sw': {
    //     langCode: "sw",
    //     name: "Sweden",
    //     icon: "⛄️"
    // },
    // 'zh': {
    //     langCode: "zh",
    //     name: "Chinese",
    //     icon: "🥢",
    //     noSpaceBetweenSentences: true
    // },
    // 'jp': {
    //     langCode: "jp",
    //     name: "Japanese",
    //     icon: "🍣",
    //     noSpaceBetweenSentences: true
    // },
};
export const DEFAULT_FROM = 'sah';
export const DEFAULT_TO = 'ru';

export const LanguageHelper = {
    initItems() {
        let res = {}
        Object.keys(LANGUAGES).forEach(x => {
            res[x] = [];
        })
        return res;
    },
    initContents() {
        let res = {}
        Object.keys(LANGUAGES).forEach(x => {
            res[x] = [...Array(PARTS_AMOUNT).keys()];
        })
        return res;
    },
    initSplitted() {
        let res = {
            'left': {},
            'right': {}
        }
        Object.keys(LANGUAGES).forEach(x => {
            res['left'][x] = {
                lines: [],
                meta: {}
            };
            res['right'][x] = {
                lines: [],
                meta: {}
            };
        })
        return res;
    },
    initMarks() {
        let res = {
            'left': {},
            'right': {}
        }
        Object.keys(LANGUAGES).forEach(x => {
            res['left'][x] = [];
            res['right'][x] = [];
        })
        return res;
    },
    initProcessing() {
        return {
            items: [],
            meta: {}
        }
    },
    initGeneralVars() {
        let res = {}
        Object.keys(LANGUAGES).forEach(x => {
            res[x] = null;
        })
        return res;
    },
    initGeneralVars2Sides() {
        let res = {
            'left': {},
            'right': {}
        }
        Object.keys(LANGUAGES).forEach(x => {
            res['left'][x] = null;
            res['right'][x] = null;
        })
        return res;
    },
    initGeneralBools() {
        let res = {}
        Object.keys(LANGUAGES).forEach(x => {
            res[x] = false;
        })
        return res;
    }
}