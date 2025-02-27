import { invokeApi } from "../Utils/InvokeApi";
export const createLead = async (data) => {
  console.log(...data, "djskfhjksdfks");
  const reqObj = {
    path: "CreateLeads",
    method: "POST",
    headers: {
  
    },
    postData: data,
  };
  return invokeApi(reqObj);
};
export const commentAdd = async (data) => {
  
  const reqObj = {
    path: "comment/add",
    method: "POST",
    headers: {
  
    },
    postData: data,
  };
  return invokeApi(reqObj);
};