// import * as URL from "../helpers/Constants";
// import axios from "axios";

// export default class ProductService {
//     static getAllProducts(page, size,id,productName,form, companyName,featured ) {
//         return axios.get(URL.GET_ALL_PRODUCTS, { ...ProductService.getAuthHeader(), params: { page, size, id,productName,form, companyName, featured  } });
//     }
//     static getAllFeaturedProducts(page, size, id, productName, form, companyName, featured) {
//         return axios.get(URL.GET_ALL_FEATURED_PRODUCTS, { ...ProductService.getAuthHeader(), params: { page, size, id, productName, form, companyName, featured } });
//     }

//     static getAllPendingProducts(page, size, id, productName, form, companyName) {
//         return axios.get(URL.GET_ALL_PENDING_PRODUCTS, { ...ProductService.getAuthHeader(), params: { page, size, id, productName, form, companyName } });
//     }

//     static getProductById(id) {
//         return axios.get(`${URL.GET_PRODUCT_BY_ID}/${id}`, ProductService.getAuthHeader());
//     }

//     static addProduct(data) {
//         return axios.post(URL.POST_PRODUCT, data, ProductService.getAuthHeader());
//     }

//     static addProductForPharmacyOwner(data) {
//         return axios.post(URL.POST_PRODUCT_REQUEST, data, ProductService.getAuthHeader());
//     }

//     static updateProduct(data, id) {
//         return axios.put(`${URL.UPDATE_PRODUCT}/${id}`, data, ProductService.getAuthHeader());
//     }

//     static verifyProduct(verified, id) {
//         return axios.patch(`${URL.VERIFY_PRODUCT}/${id}`, null, { ...ProductService.getAuthHeader(), params: { verified } });
//     }

//     static updateProductAsPopular(popular, id) {
//         return axios.patch(`${URL.UPDATE_PRODUCT_AS_POPULAR}/${id}`, null, { ...ProductService.getAuthHeader(), params: { popular } });
//     }

//     static deleteProduct(id) {
//         return axios.delete(`${URL.DELETE_PRODUCT}/${id}`, ProductService.getAuthHeader());
//     }

//     static getAuthHeader() {
//         const accessToken = localStorage.getItem("oushodsheba_access_token");
//         const options = { headers: { "Authorization": `Bearer ${accessToken}` } }
//         return options;
//     }

// }
