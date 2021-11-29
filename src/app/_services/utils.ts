export const sortBy = (arr: any[], key: string) => {
  return arr.sort((a, b) => b[key] - a[key]);
};
