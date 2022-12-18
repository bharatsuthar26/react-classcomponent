// import axios from "axios";
import instance from "../Api/Api_instance";
// const API = "http://localhost:5000/";
const getAllProducts = () => {
  console.log("iside");
  return instance.get(`getproducts`);
};
const postData = (data) => {
  return instance.post(`addproduct`, data);
};
const updateData = (id , data) => {
  return instance.put(`editproduct/${id}`, data);
};
const deleteData = (id) => {
  return instance.delete(`deleteproduct/${id}`);
};
const getProductById = (id) => {
  return instance.get(`getproductbyid/${id}`);
};
export { getAllProducts, postData, updateData, deleteData, getProductById };
