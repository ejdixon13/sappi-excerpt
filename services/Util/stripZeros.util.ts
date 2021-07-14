const regex = /^0+(\d+)/;
const stripZeros = (value: string): string => {
  if (value) {
    const match = regex.exec(value);
    if (match !== null && match.length === 2) {
      return match[1];
    }
    return value;
  }
  return '';
};

export default stripZeros;
