## Description
The purpose of this package was to take and transfer the subscription example from Vkontakte to the package. Everything is as simple as possible. Specify the user token and the secret key of the service and get some data at the output, namely:

    auth:  boolean;
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

## Usage

    import vkmaSign from "@dmaksimyk/vkma-sign";
    // const vkmaSign = require("@dmaksimyk/vkma-sign"); // es5 and below
    
    const token = "qwerty"; // the token you received from the service
    const secretKeyFromApp = "12321312321"; // secret key for your service
    
    const auth = vkmaSign(token, {
	    secretKeyVKMA: secretKeyFromApp 
    });
    
    if (auth.auth) { // if token true
	    console.log(auth?.data); // your "data" from token
	}

## Typescript
TypeScript support out of the box.