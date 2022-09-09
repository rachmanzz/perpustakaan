import axios, {AxiosRequestHeaders, AxiosRequestConfig, AxiosError} from 'axios'

type MethodWithBodyProps<T> = {
    method: 'post' | 'put' | 'patch',
    data?: T,
    headers?: AxiosRequestHeaders,
    params?: any,
    timeout?: number
}

type MethodWithParamProps = {
    method: 'get' | 'delete',
    headers?: AxiosRequestHeaders,
    params?: any,
    timeout?: number
}

type MethodTypeProps = 'get' | 'post' | 'put' | 'patch' | 'delete'

const useApi = (auth: boolean = false, baseUrl?: string) =>  async<T extends object>(path: string, options?: {[key: string]: any} | MethodTypeProps | MethodWithParamProps | MethodWithBodyProps<T>) => {
    let currentOption: AxiosRequestConfig= { method: 'get', headers: {"content-type": "application/json"} }
    
    if (options && typeof options !== 'string' && 'method' in options) {
        currentOption = {...options, headers: {"content-type": "application/json", ...options.headers}};
    } else if (typeof options === 'string') {
        currentOption.method = options;
    } else if (typeof options === 'object') {
        currentOption.method = 'post';
        currentOption.data = options
    }

    if (auth) {
        const token = localStorage.getItem('access-token');
        if (!token) {
            throw new Error('No token found in localStorage');
        }
        const authorization = `Bearer ${token}`;

        currentOption.headers = {Authorization: authorization, ...currentOption.headers}
    }

    let url = `${baseUrl || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/${path}`;

    return await axios({url, ...currentOption}) 
}
export default useApi;