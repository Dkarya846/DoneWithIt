import { create } from "apisauce";
import authStorage from "../auth/storage";
import cache from "../utility/cache";

const apiClient = create({
    baseURL: "http://192.168.1.122:9000/api",
});

apiClient.addAsyncRequestTransform(async (request) => {
    const token = await authStorage.getToken();
    if (!token) return;

    request.headers["x-auth-token"] = token;
    return request;
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
    const response = await get(url, params, axiosConfig);
    if (response.ok) {
        cache.store(url, response.data);
        return response;
    }
    const data = await cache.get(url);
    return data ? { ok: true, data: data.value } : response;
};

export default apiClient;
