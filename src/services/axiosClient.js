import { createAxiosClient } from "./createAxiosClient";
import { useAuthStore } from "../stores/authStore";
import {authEndPoint} from "../api/api.endpoint"
import { environment } from "../environments/environment";

function getCurrentAccessToken() {
    return useAuthStore.getState().accessToken
}

function getCurrentRefreshToken() {
    return useAuthStore.getState().refreshToken
}


function setRefreshedTokens(tokens){
    const login = useAuthStore.getState().login
    login(tokens)
}

async function logout(){
    const logout = useAuthStore.getState().logout
    logout()
}

export const client = createAxiosClient({
    options: {
        baseURL: environment.urls.api,
       timeout: 300000,
        headers: {
            'Content-Type': 'application/json',
        }
    },
    getCurrentAccessToken,
    getCurrentRefreshToken,
   refreshTokenUrl: authEndPoint.refreshToken,
    logout,
    setRefreshedTokens
})