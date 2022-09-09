import { AES as cryptoAes, enc as cryptoEnc } from 'crypto-js';

const secret = process.env.NEXT_PUBLIC_SECRET || "H9BqTlbRnQ";
const encrypt = (v: string): string => {
    return cryptoAes.encrypt(v, secret).toString();
}
const decrypt = (v: string) => {
    const bytes = cryptoAes.decrypt(v, secret);
    return bytes.toString(cryptoEnc.Utf8);
}


export const storageSetItem = (key: string, rawVal: string) => {
    const txt = encrypt(rawVal);
    localStorage.setItem(key, txt);
}

export const storageGetItem = (key: string): string|null => {
    const encryptVal = localStorage.getItem(key);
    if (encryptVal) return decrypt(encryptVal);
    return null;
}


export const saveToken = (rawVal: string) => storageSetItem('access-token', rawVal);
export const getToken = () => storageGetItem('access-token');
export const removeToken = () => localStorage.removeItem('access-token');