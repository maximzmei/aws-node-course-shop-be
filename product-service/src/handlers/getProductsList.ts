'use strict';
import { dbOptions, headers } from '../config/constants';
import { Client } from 'pg';

export const getProductsList = async () => {
  const client = new Client(dbOptions);

  try {
    await client.connect();
    const { rows } = await client.query(
      `SELECT p.id, p.description, p.price, p.title, s.count FROM products p LEFT JOIN stocks s on p.id=s.product_id`
    );
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(rows, null, 2),
    };
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
