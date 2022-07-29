
const useLanguage = (locale: string) => (key: string, params?: {[index: string]: string}) => {
    const lang = require(`./langs/${locale}.json`);
    let sentence = lang[key];
    if (params) {
        Object.keys(params).forEach(key => {
            sentence = sentence.replace(`{${key}}`, params[key]);
        });
        return sentence;
    }
    return sentence;

}

export default useLanguage;