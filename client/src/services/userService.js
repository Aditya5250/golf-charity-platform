import API from "./api";

export const getMe = () => {
    return API.get("/users/profile");
}