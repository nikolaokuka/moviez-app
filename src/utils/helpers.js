export const calculateTitle = (title) => {
  if (title.length <= 20) {
    return title;
  }
  return `${title.substring(0, 20)}...`;
};
