export const isExpiredTime = (time: string): boolean => {
  const currentTime = Date.now();
  const regExp = /^\d+$/gi;
  if (regExp.test(time)) {
    return Number(time) < currentTime;
  }

  return +new Date(time) < currentTime;
};
