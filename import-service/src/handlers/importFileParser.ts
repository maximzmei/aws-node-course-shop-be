import { headers } from './../utils/constants';
const AWS = require('aws-sdk');
import csv from 'csv-parser';

export const importFileParser = async (event: any): Promise<any> => {
  const s3 = new AWS.S3({ region: 'eu-west-1' });
  const sqs = new AWS.SQS();

  try {
    for (const record of event.Records) {
      const BUCKET = record.s3.bucket.name;
      const key = record.s3.object.key;

      await new Promise<void>((resolve) => {
        s3.getObject({
          Bucket: BUCKET,
          Key: key,
        })
          .createReadStream()
          .pipe(csv())
          .on('data', (chunk: any) => {
            console.log(chunk);

            sqs.sendMessage(
              {
                QueueUrl: process.env.SQS_URL,
                MessageBody: JSON.stringify(chunk),
              },
              (error: any, data: any) => {
                if (error) {
                  console.log('error', error);
                  return;
                }
                console.log(data.MessageId);
              }
            );
          })
          .on('end', async () => {
            await s3
              .copyObject({
                Bucket: BUCKET,
                CopySource: `${BUCKET}/${key}`,
                Key: key.replace('uploaded', 'parsed'),
              })
              .promise();

            console.log('Successfully upload csv file');

            await s3
              .deleteObject({
                Bucket: BUCKET,
                Key: key,
              })
              .promise();

            console.log('Successfully delete temporary file');

            resolve();
          });
      });

      return {
        statusCode: 202,
      };
    }
  } catch (error) {
    console.error('Internal server error', error);
    return {
      statusCode: 500,
      headers,
      body: 'Internal server error',
    };
  }
};
