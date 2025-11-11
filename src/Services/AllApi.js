import { BaseUrl } from "./BaseUrl";
import CommonApi from "./CommonApi";

export const getStudents = async () => {
  return await CommonApi("GET", `${BaseUrl}/students`, "");
};

export const uploadStudents = async (reqBody) => {
  return await CommonApi("POST", `${BaseUrl}/students`, reqBody);
};

export const deleteStudents = async (id) => {
  return await CommonApi("DELETE", `${BaseUrl}/students/${id}`, "{}");
};

export const editStudents = async (reqBody, id) => {
  return await CommonApi("PUT", `${BaseUrl}/students/${id}`, reqBody);
};
