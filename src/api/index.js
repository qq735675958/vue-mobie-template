import { $api, formatParams, config } from "./axiosConfig";
import Axios from "axios";
export function getData(params) {
  return $api(
    Object.assign(formatParams("POST", params), {
      url: `${config.proxy}/social/promotReward/list`
    })
  );
}

export function getlistData() {
  return Axios.get("/dingdong/list");
}
