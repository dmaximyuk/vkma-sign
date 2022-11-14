import { ParsedUrlQuery } from "querystring";

export interface IParams {
  vkmaSecretKey: string;
}

export interface IReturnData {
  isAuthorized: boolean;
  data?: ParsedUrlQuery & {
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
