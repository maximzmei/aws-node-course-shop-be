import { headers } from './../utils/constants';
import AWS from 'aws-sdk';
import { Client } from 'pg';
import { dbOptions } from '../utils/constants';

export const catalogBatchProcess = async (event: any): Promise<any> => {
  const client = new Client(dbOptions);
  await client.connect();
  const sns = new AWS.SNS({ region: 'eu-west-1' });

  const dataMessageQueue = await event.Records.map(({ body }: any) => body);

  console.log('dataMessageQueue', JSON.parse(dataMessageQueue));

  try {
    for (let dataMessage of dataMessageQueue) {
      const { price, title, description, count } = JSON.parse(dataMessage);
      console.log(
        `product: {title: ${title}, description: ${description}, price: ${price}, count: ${count}`
      );

      await client.query(`begin`);
      await client.query(
        `insert into products (title, description, price) values ('${title}', '${description}', ${price})`
      );
      await client.query(
        `insert into stocks (product_id, count) values ((select id from products where products.title='${title}'), ${count})`
      );
      await client.query('commit');

      sns.publish(
        {
          Subject: 'You are invited in processing',
          Message: JSON.stringify(dataMessageQueue),
          TopicArn: process.env.SNS_ARN,
        },
        () => {
          console.log('Send email for:' + JSON.stringify(dataMessageQueue));
        }
      );

      return {
        statusCode: 201,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
          'Content-Type': 'application/JSON',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
        },
        body: JSON.stringify(dataMessageQueue),

        isBase64Encoded: false,
      };
    }
  } catch (error) {
    await client.query('rollback');
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
