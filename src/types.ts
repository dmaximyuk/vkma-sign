import { ParsedUrlQuery } from "querystring";

export type TVKSign =
  | {
      auth: true;
      data: ParsedUrlQuery & {
        vk_access_token_settings: string;
        vk_app_id: string;
        vk_are_notifications_enabled: string;
        vk_is_app_user: string;
        vk_is_favorite: string;
        vk_language: string;
        vk_platform: string;
        vk_ref: string;
        vk_ts: string;
        vk_user_id: string;
        sign: string;
      };
    }
  | {
      auth: false;
      data: undefined;
    };

export type TParams = {
  secretKeyVKMA: string;
}