import create from "zustand";

export const useAuthStore = create((set, get) => ({
  accessToken: localStorage.getItem("accessToken") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
  isLoggedIn: () => !!get().accessToken,
  login: (tokens) => {
    get().setTokensToLocalStorage(tokens);    
  },
  logout: () => {
    get().removeTokensFromLocalStorage();
  },

  setTokensToLocalStorage:({ accessToken, refreshToken }) =>{
    console.log({ accessToken, refreshToken });
    set((state)=>({
      ...state,
      refreshToken:refreshToken,
      accessToken:accessToken
    }))
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  },
  
  removeTokensFromLocalStorage:()=> {
    set((state)=>({
      ...state,
      refreshToken:null,
      accessToken:null
    }))
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }
}));
