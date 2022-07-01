import { importFileParser } from '../handlers/importFileParser';
const AWS = require('aws-sdk');

describe('importFileParser function', () => {
  it('should call AWS.S3 function when performing importFileParser func', async () => {
    AWS.S3 = jest.fn();
    await importFileParser({});
    expect(AWS.S3).toBeCalled();
  });
});
