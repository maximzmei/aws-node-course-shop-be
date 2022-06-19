'use strict';
import productList from '../data/productList.json';
import { headers } from '../config/constants';

export const getProductById = async (event: any) => {
  const productId = event.pathParameters.productId;
  const foundProduct = productList.find((product) => product.id === productId);
  if (foundProduct) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(foundProduct, null, 2),
    };
  } else {
    return {
      statusCode: 404,
      headers,
      body: JSON.stringify(`Product with id: ${productId} not found`),
    };
  }
};
