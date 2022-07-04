import { importProductsFile } from './../handlers/importProductsFile';
const AWS = require('aws-sdk');

describe('importProductsFile function', () => {
  it('should call AWS.S3 function when performing importProductsFile func', async () => {
    AWS.S3 = jest.fn();
    await importProductsFile({ queryStringParameters: { name: 'text' } });
    expect(AWS.S3).toBeCalled();
  });
});
