// import React, {createContext, useContext, useState} from 'react';
// import ProductService from "../services/ProductService";
// import confirmationModal from "../components/common/ConfirmationModal";
// import {UserContext} from './UserContextProvider';

// export const ProductContext = createContext();


// const ProductContextProvider = ({ children }) => {

//     const [products, setProducts] = useState(null);
//     const [product, setProduct] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [errorMsg, setErrorMsg] = useState('');

//     async function getAllProducts({page, size, id, productName, form, companyName, featured}) {

//         try {
//             setLoading(true);
//             setErrorMsg('');
//             const res = await ProductService.getAllProducts(page,size,id,productName,form, companyName,featured);
//             setProducts(res.data.content);
//             setTotalElements(res.data.totalElements);
//             setLoading(false);
//             return res.data.content;
//         } catch (error) {
//             setLoading(false);
//             setErrorMsg("Can not load Products. Please check the console.");
//             console.log("error", error)
//             return false;
//         }

//     }

//     const getAllFeaturedProducts = async ({page, size, id, productName, form, companyName, featured}) => {

//         try {
//             setLoading(true);

//             setErrorMsg('');
//             const res = await ProductService.getAllFeaturedProducts(page, size, id, productName, form, companyName, featured);
//             setFeaturedProducts(res.data.content);
//             setTotalElements(res.data.totalElements);
//             setLoading(false);
//             console.log(">>>>>>>>>>>>>>>",res.data.content)
//             return res.data.content;
//         } catch (error) {
//             setLoading(false);
//             setErrorMsg("Can not load Products. Please check the console.");
//             console.log("error", error)
//             return false;
//         }

//     }

//     async function getAllPendingProducts({page, size, id, productName, form, companyName}) {

//         try {
//             setLoading(true);

//             setErrorMsg('');
//             const res = await ProductService.getAllPendingProducts(page, size, id, productName, form, companyName);
//             setPendingProducts(res.data.content);
//             setTotalElements(res.data.totalElements);
//             setLoading(false);
//             return res.data.content;
//         } catch (error) {
//             setLoading(false);
//             setErrorMsg("Can not load Products. Please check the console.");
//             console.log("error", error)
//             return false;
//         }

//     }

//     const getProductById = async (id) => {

//         try {
//             setLoading(true);
//             setErrorMsg('');
//             const res = await ProductService.getProductById(id);
//             setProduct(res.data);
//             setLoading(false);
//             return res.data;
//         } catch (error) {
//             setLoading(false);
//             setErrorMsg("Can not load Products. Please check the console.");
//             console.log("error", error)
//             return error.response ? error.response.status : 500;
//         }

//     }

//     const addProduct = async (data) => {

//         // await ProductService.addProduct(data);

//         try {
//             setErrorMsg('');
//             setLoading(true);
//             const res = userContext.user.userType === 'PHARMACY_OWNER' ? await ProductService.addProductForPharmacyOwner(data) :
//                 await ProductService.addProduct(data);
//             console.log("=======================", res.data);
//             setProduct(res.data);
//             setLoading(false);
//             confirmationModal(`Product Id-${res.data.id} saved successfully.`, "success");
//             return true;
//         } catch (error) {
//             const message = error.response ? error.response.data.message : error.message;
//             setErrorMsg("Can not add Products. Please check the console.");
//             console.log("post product error", message);
//             confirmationModal("Can not save Product. " + message, "error");
//             return false;
//         }

//     }

//     const updateProduct = async (DATA, id) => {
//         try {

//             setLoading(true);
//             setErrorMsg('');
//             const res = await ProductService.updateProduct(DATA, id);
//             console.log("update product =============> ",res.data)
//             setProduct(res.data);
//             setLoading(false);
//             confirmationModal(`Product Id-${res.data.id} updated successfully!`, "success");
//             return res.data;
//         } catch (error) {
//             const message = error.response ? error.response.data.message : error.message;
//             setErrorMsg("Can not update Product. Please check the console.");
//             confirmationModal("Can not update Product. " + message, "error");
//             console.log("Product update error.", error);
//             return false;
//         }
//     }

//     async function verifyProduct(DATA, id) {
//         try {

//             setLoading(true);
//             setErrorMsg('');
//             let data = await ProductService.updateProduct(DATA, id);
//             const res = await ProductService.verifyProduct(true, id);

//             const updatedProducts = [...products.map(e => {
//                 if (e.id === res.data.id) {
//                     e = res.data;
//                 }
//                 return e;
//             })]

//             setProducts(updatedProducts);


//             setLoading(false);
//             confirmationModal(`Product Id-${res.data.id} verified successfully!`, "success");
//             return data;
//         } catch (error) {
//             const message = error.response ? error.response.data.message : error.message;
//             setErrorMsg("Can not update Product. Please check the console.");
//             confirmationModal("Can not verify Product. " + message, "error");
//             console.log("Product update error.", error);
//             return false;
//         }
//     }

//     async function updateProductAsPopular(popular, id) {
//         try {

//             setLoading(true);
//             setErrorMsg('');
//             const data = await ProductService.updateProductAsPopular(popular, id);
//             setProducts(products.map(e => {
//                 if (e.id == id) {
//                     e.popular = popular;
//                 }
//                 return e;
//             }))
//             setLoading(false);
//             confirmationModal("Product updated successfully.", "success");
//             return data;
//         } catch (error) {
//             const message = error.response ? error.response.data.message : error.message;
//             setErrorMsg("Can not update Product. Please check the console.");
//             confirmationModal("Can not update Product. " + message, "error");
//             console.log("Product update error.", error);
//             return false;
//         }
//     }

//     async function deleteProduct(id) {

//         // if (!window.confirm("Are you sure you want to delete this Product ?")) return;

//         try {
//             setLoading(true);
//             setErrorMsg('');
//             await ProductService.deleteProduct(id);
//             let updatedProducts = products;
//             updatedProducts = products.filter(e => e.id !== id);
//             setProducts(updatedProducts);
//             setLoading(false);
//             return true;
//         } catch (error) {
//             setErrorMsg("Can not delete Products. Please check the console.");
//             console.log("Product delete error.", error);
//             return false;
//         }
//     }

//     return (
//         <ProductContext.Provider
//             value={{
//                 products,
//                 featuredProducts,
//                 pendingProducts,
//                 product,
//                 totalElements,
//                 loading,
//                 errorMsg,
//                 getAllProducts,
//                 getAllPendingProducts,
//                 getAllFeaturedProducts,
//                 addProduct,
//                 updateProduct,
//                 updateProductAsPopular,
//                 deleteProduct,
//                 getProductById,
//                 verifyProduct
//             }}
//         >
//             {children}
//         </ProductContext.Provider>
//     );
// }

// export default ProductContextProvider;
