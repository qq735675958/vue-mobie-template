import { $api, formatParams, config } from "./axiosConfig";

export function getData(params) {
  return $api(
    Object.assign(formatParams("POST", params), {
      url: `${config.proxy}/social/promotReward/list`
    })
  );
}
