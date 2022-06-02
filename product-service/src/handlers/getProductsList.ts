'use strict';
import productList from "../data/productList.json"

export const getProductsList = async () => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(productList,null,2),
  };
};
