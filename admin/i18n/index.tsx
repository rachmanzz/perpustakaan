type WordCaseType = 'upper' | 'lower' | 'sentence' | 'unique_sentence' | 'title'
const useLanguage = (locale: string) => (key: string, params?: WordCaseType | {[index: string]: string}, format?: WordCaseType) : string => {
    const lang = require(`./langs/${locale}.json`);
    let sentence = lang[key] || '';
    if (params && typeof params === 'object') {
        Object.keys(params).forEach(key => {
            sentence = sentence.replace(`{${key}}`, params[key]);
        });
    }
    if (params && typeof params === 'string' || format) {
        const nextFormat = typeof params === 'string' ? params : format;
        if (nextFormat === 'upper') {
            sentence = sentence.toUpperCase();
        }
        if (nextFormat === 'lower') {
            sentence = sentence.toLowerCase();
        }
        if (nextFormat === 'sentence') {
            sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
        }
        if (nextFormat === 'unique_sentence') {
            sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
        }
        if (nextFormat === 'title') {
            sentence = sentence.split(' ').map((item: string) => item.charAt(0).toUpperCase() + item.slice(1)).join(' ');
        }
    }
    return sentence;

}

export default useLanguage;