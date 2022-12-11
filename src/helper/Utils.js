const TOKEN_KEY = "userInfo";

export const isLogin = () => {
    if (JSON.parse(localStorage.getItem(TOKEN_KEY))) {
        return true;
    } else {
        return false;
    }
};