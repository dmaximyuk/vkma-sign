// Vendor
import crypto from 'crypto'
const qs = require('querystring');

// Types
import { TVKSign, TParams } from 'types';

export const sign = (token: string, params: TParams): TVKSign => {
  // If there is no token or secret key
  if (!token || !params.secretKeyVKMA) throw Error("specify the token or secret key VKMA Sign")

  // Getting parameters from a token
  const urlParams = qs.parse(token);
  const ordered: { [key: string]: string } = {};
  Object.keys(urlParams).sort().forEach((key) => {
      if (key.slice(0, 3) === 'vk_') {
          ordered[key] = urlParams[key];
      }
  });

  const stringParams = qs.stringify(ordered);
  
  // Signature verification
  const paramsHash = crypto
    .createHmac('sha256', `${params.secretKeyVKMA}`)
    .update(stringParams)
    .digest()
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=$/, '');

  const check = paramsHash == urlParams.sign;

  // Returning the test result
  return {
    auth: check,
    data: check ? urlParams : undefined,
  }
}
