import { hash } from 'ohash'
export const useWebApiFetch = function (request, opts) {
    const config = useRuntimeConfig()

    return useFetch(request, {
        baseURL: config.public.baseURL,
        onRequest({ request, optionsv }) {
            //Set the request headers
        },
        onRequestError(context) {

        },
        onResponse({ request, response, options }) {

        },
        onResponseError({ request, response, options }) {
            // Global error message
        },
        credentials: 'include',
        key: hash(['webapi-fetch', request, opts?.body, opts?.params, opts?.method, opts?.query]),
        ...opts
    });
}