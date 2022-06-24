'use strict';
import { dbOptions, headers } from '../config/constants';
import { Client } from 'pg';

export const getProductById = async (event: any) => {
  const client = new Client(dbOptions);

  try {
    await client.connect();
    const productId = event.pathParameters.productId;

    const { rows } = await client.query(
      `SELECT p.id, p.description, p.price, p.title, s.count FROM products p LEFT JOIN stocks s on p.id=s.product_id`
    );

    const foundProduct = rows.find((product) => product.id === productId);

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
  } catch (error) {
    console.error('Internal server error', error);
    return {
      statusCode: 500,
      headers,
      body: 'Internal server error',
    };
  } finally {
    client.end();
  }
};
