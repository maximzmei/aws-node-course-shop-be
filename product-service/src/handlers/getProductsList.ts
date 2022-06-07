'use strict';
import productList from '../data/productList.json';
import { headers } from '../config/constants';

export const getProductsList = async () => {
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(productList, null, 2),
  };
};
