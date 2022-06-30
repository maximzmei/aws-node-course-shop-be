import { headers } from './../utils/constants';
const AWS = require('aws-sdk');
const BUCKET = 'import-service-shop-be';

export const importProductsFile = async (event: any): Promise<any> => {
  const s3 = new AWS.S3({ region: 'eu-west-1' });

  const params = {
    Bucket: BUCKET,
    Key: `uploaded/${event.queryStringParameters.name}`,
    Expires: 60,
    ContentType: 'text/csv',
  };

  try {
    const signedURL = await new Promise((res, rej) => {
      return s3.getSignedUrl('putObject', params, (error: any, url: string) => {
        if (error || !url) {
          rej(error);
        }

        res(url);
      });
    });

    return {
      statusCode: 200,
      headers,
      body: signedURL,
    };
  } catch (error) {
    console.error('Internal server error', error);
    return {
      statusCode: 500,
      headers,
      body: 'Internal server error',
    };
  }
};
