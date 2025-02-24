import { invokeApi } from "../Utils/InvokeApi";

export const fetchBlogs = async (limit,page) => {
  const reqObj = {
    path: `/blog/list?limit=${limit}&page=${page}`,
    method: "GET",
    headers: {
    
    },

    postData: {},
  };
  return invokeApi(reqObj);
};
export const fetchBlogDetail = async (title) => {
  const reqObj = {
    path: `blog/view/${title}`,
    method: "GET",
    headers: {
    
    },

    postData: {},
  };
  return invokeApi(reqObj);
};
export const fetchSyllabus = async (id, page, rowsPerPages) => {
  const reqObj = {
    path: `/api/syllabus/by_course/${id}?page=${page}&per_page=${rowsPerPages}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },

    body: {},
  };
  return invokeApi(reqObj);
};
export const fetchUsers = async (page, rowsPerPages,searchTerm) => {
  const reqObj = {
    path: `/api/all_users?page=${page}&per_page=${rowsPerPages}&search=${searchTerm}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },

    body: {},
  };
  return invokeApi(reqObj);
};
export const fetchPayments = async (page, rowsPerPages,searchTerm) => {
  const reqObj = {
    path: `/api/coursebuy/list?page=${page}&per_page=${rowsPerPages}&search=${searchTerm}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },

    body: {},
  };
  return invokeApi(reqObj);
};
export const fetchPaymentDetail = async (id) => {
  const reqObj = {
    path: `/api/coursebuy/details/${id}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },

    body: {},
  };
  return invokeApi(reqObj);
};
export const fetchBanners = async (page, rowsPerPages) => {
  const reqObj = {
    path: `/api/banner/all?page=${page}&per_page=${rowsPerPages}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },

    body: {},
  };
  return invokeApi(reqObj);
};
export const fetchDashboard = async () => {
  const reqObj = {
    path: `/api/statics`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },

    body: {},
  };
  return invokeApi(reqObj);
};
export const fetchPaidCourses = async () => {
  const reqObj = {
    path: `/api/admin/paidcourse/list`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },

    body: {},
  };
  return invokeApi(reqObj);
};