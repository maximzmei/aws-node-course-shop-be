'use strict';
import productList from "../data/productList.json"

export const getProductById = async (event: any) => {
  const productId = event.pathParameters.productId
  const foundProduct = productList.find(product => product.id === productId);
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(foundProduct,null,2),
  };
};
