"use strict";

const API_BASE_URL = "Http://localhost:3000/api"; // Helper function to fetch JSON data
/**
 * Fetches JSON data from the specified URL.
 *
 * @param {string} url - The URL to fetch JSON data from.
 * @param {string} [errorMsg='Something went wrong..'] - The error message to display if the fetch fails.
 * @returns {Promise} A promise that resolves to the JSON data.
 * @throws {Error} If the fetch fails, an error with the specified error message and status code will be thrown.
 */
// const getJSON = function (url, errorMsg = "Something went wrong..") {
//   return fetch(url).then((response) => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// };

export async function fetchCategories() {
  try {
    const response = await fetch(`${API_BASE_URL}/categories`);
    if (!response.ok) throw new Error("Failed to fetch categories");
    return await response.json();
  } catch (error) {
    throw error;
  }
}

// Remember
// export async function fetchTest(){
//    try{
//       const data = await getJSON(`${API_BASE_URL}/categories`)
//    }
// }

export async function fetchProduct() {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) throw new Error("Failed to fetch categories");
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export async function fetchProductById(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    if (!response.ok) throw new Error("Failed to fetch product by ID");
    return await response.json();
  } catch (err) {
    console.error(`${err}`);
    throw err;
  }
}

export async function updateProduct(id, product) {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    if (!response.ok) throw new Error("Failed to update product");
    return await response.json();
  } catch (error) {
    throw error;
  }
}

// jh-fa (JH Fetch-Update)
export async function addProduct(productData) {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    if (!response.ok) throw new Error("Failed to add product");
    return await response.json();
  } catch (error) {
    throw error;
  }
}

//jh-fu (JH-Fetch-Update)
export async function deleteProduct(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete product");
    return true;
  } catch (error) {
    throw error;
  }
}
