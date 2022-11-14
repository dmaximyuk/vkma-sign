import crypto from "crypto";
const qs = require("querystring");

import { IParams, IReturnData } from "./types";

class Sign {
  private signKey: string;
  static signKey: string;

  constructor(vkmaSignKey: string) {
    this.signKey = vkmaSignKey;
  }

  public static parse(userToken: string): IReturnData {
    const urlParams = qs.parse(userToken);
    const ordered: { [key: string]: string } = {};
    Object.keys(urlParams)
      .sort()
      .forEach((key) => {
        if (key.slice(0, 3) === "vk_") {
          ordered[key] = urlParams[key];
        }
      });

    const stringParams = qs.stringify(ordered);

    const paramsHash = crypto
      .createHmac("sha256", `${this.signKey}`)
      .update(stringParams)
      .digest()
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=$/, "");

    const check = paramsHash == urlParams.sign;

    return {
      isAuthorized: !!check,
      ...(!!check && { data: urlParams }),
    };
  }
}

export { IParams, IReturnData };
export default Sign;
