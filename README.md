## Description
The purpose of this package was to take and transfer the subscription example from Vkontakte to the package. Everything is as simple as possible. Specify the user token and the secret key of the service and get some data at the output, namely:

```typescript
isAuthorized:  boolean;
data:  ParsedUrlQuery  & {
	vk_access_token_settings:  string;
	vk_app_id:  string;
	vk_are_notifications_enabled:  string;
	vk_is_app_user:  string;
	vk_is_favorite:  string;
	vk_language:  string;
	vk_platform:  string;
	vk_ref:  string;
	vk_ts:  string;
	vk_user_id:  string;
	sign:  string;
};
```

## Usage
This is just an example. Don't take him seriously. The goal is to show how to use the library, then think for yourself =)

```javascript
import Sign from "@dmaksimyk/vkma-sign";
// const Sign = require("@dmaksimyk/vkma-sign"); // es5 and below

const vkmaSecretKey = process.env.VKMA_SECRET_KEY; // vkma secrey key from the service
const userToken = "dG9rZW4KMTIzMT=="; // the token you received from the service

if (!vkmaSecretKey || !userToken) throw new Error("VKMA Secret Key or User Token is undefined.");

const sign = new Sign(vkmaSecretKey); 
const { isAuthorized, data } = sign.identify(userToken);

if (isAuthorized) {
	console.log(data);
}
```

## Typescript
TypeScript support out of the box.