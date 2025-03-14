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
export const fetchServices = async (limit,page) => {
  const reqObj = {
    path: `/service/live?limit=${limit}&page=${page}`,
    method: "GET",
    headers: {
    
    },

    postData: {},
  };
  return invokeApi(reqObj);
};

export const fetchTestimonialsList = async (limit,page) => {
  const reqObj = {
    path: `/testimonial/live?limit=${limit}&page=${page}`,
    method: "GET",
    headers: {
    
    },

    postData: {},
  };
  return invokeApi(reqObj);
};
export const fetchBlogDetail= async (title) => {
  const reqObj = {
    path: `/blog/view/${title}`,
    method: "GET",
    headers: {
    
    },

    postData: {},
  };
  return invokeApi(reqObj);
};

export const fetchTestimonial = async (title) => {
  const reqObj = {
    path: `/testimonial/view/${title}`,
    method: "GET",
    headers: {
    
    },

    postData: {},
  };
  return invokeApi(reqObj);
};
export const getComments = async (data) => {
  const reqObj = {
    path: `/comment/approved-comment`,
    method: "GET",
    headers: {
    
    },

    postData: {data},
  };
  return invokeApi(reqObj);
};
export const getTeam= async () => {
  const reqObj = {
    path: `/team/live`,
    method: "GET",
    headers: {
    
    },

    postData: {},
  };
  return invokeApi(reqObj);
};