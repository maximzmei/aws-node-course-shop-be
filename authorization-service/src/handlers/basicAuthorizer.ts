import { decryptToken } from '../utils/decryptToken';
import { generatePolicy } from '../utils/generatePolicy';

export const basicAuthorizer = (event: any, _: any, cb: any) => {
  const DENY = 'Deny';
  const ALLOW = 'Allow';
  const TOKEN = 'TOKEN';

  console.log('Event', JSON.stringify(event, null, 2));

  const token = event.authorizationToken;

  if (event.type !== TOKEN || !token) {
    cb(
      'Unauthorized',
      'You have not provided authorization token in the request or you have provided invalid token'
    );
  }

  const [userName, password] = decryptToken(token);

  console.log(`User name: ${userName} Password: ${password}`);

  const isValid = userName && password && process.env[userName] === password;

  const effect = isValid ? ALLOW : DENY;
  const policy = generatePolicy(userName, effect, event.methodArn);

  return cb(null, policy);
};
