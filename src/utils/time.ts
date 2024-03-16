import moment from "moment";

export const isExpiredTime = (time: string | number): boolean =>
  Number(moment(time).format("x")) < Number(moment().format("x"));
