import axios, { AxiosRequestConfig } from 'axios';

export const axiosInstance = <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
    const source = axios.CancelToken.source();
    const promise = axios({ ...config, ...options, cancelToken: source.token }).then(({ data }) => data);

    // @ts-expect-error axios promise has no cancel method
    promise.cancel = () => {
        source.cancel('Query was cancelled by Vue Query');
    };

    return promise;
};
