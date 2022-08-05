export const calculateText = (text, value) => {
  if (text.length <= value) {
    return text;
  }
  return `${text.substring(0, value)}...`;
};
