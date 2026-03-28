import API from "./api";

export const getCharities=()=> API.get("/charities");
export const selectCharity= (data)=> API.post("/charities/select",data);