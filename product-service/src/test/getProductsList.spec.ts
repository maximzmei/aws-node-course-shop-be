import { getProductsList } from '../handlers/getProductsList';
import { mockedResponseForGetProductsList } from './mocks';

describe("getProductsList function", () => {
  it('should give expected result', async () => {
    const result = await getProductsList();
    expect(JSON.parse(result.body)).toStrictEqual(mockedResponseForGetProductsList.body);
  });
});