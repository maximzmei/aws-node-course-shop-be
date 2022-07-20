export const decryptToken = (token: string) => {
  const partToDecode = token.split(' ')[1];
  const string = Buffer.from(partToDecode, 'base64').toString('utf-8');
  console.log(`Token decoded: ${string}`);
  const [userName, password] = string.split(':');

  return [userName, password];
};
