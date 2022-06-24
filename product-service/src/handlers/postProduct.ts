'use strict';
import { dbOptions, headers } from '../config/constants';
import { Client } from 'pg';

export const postProduct = async (event: any) => {
  const { title, description, price, count } = JSON.parse(event.body);

  console.log(
    `POST request: {title: ${title}, description: ${description}, price: ${price}, count: ${count}`
  );

  const client = new Client(dbOptions);

  try {
    await client.connect();
    await client.query(`begin`);
    await client.query(
      `insert into products (title, description, price) values ('${title}', '${description}', ${price})`
    );
    await client.query(
      `insert into stocks (product_id, count) values ((select id from products where products.title='${title}'), ${count})`
    );
    await client.query('commit');

    return {
      statusCode: 202,
      headers,
      body: 'Successfully added',
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
