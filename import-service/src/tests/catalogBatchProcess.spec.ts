import { catalogBatchProcess } from '../handlers/catalogBatchProcess';
const AWS = require('aws-sdk');

describe('catalogBatchProcess function', () => {
  it('should call AWS.S3 function when performing importFileParser func', async () => {
    AWS.SNS = jest.fn();
    await catalogBatchProcess({ Records: [{ body: 'mockedBody' }] });
    expect(AWS.SNS).toBeCalled();
  });
});
