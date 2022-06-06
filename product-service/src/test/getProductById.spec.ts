import { getProductById } from '../handlers/getProductById';
import { mockedEventForGetProductById } from './mocks';
import { mockedResponseGetProductById } from './mocks';

describe("getProductById function", () => {
  it('should give expected result', async () => {
    const result = await getProductById(mockedEventForGetProductById);
    expect(JSON.parse(result.body)).toStrictEqual(mockedResponseGetProductById.body);
  });
});