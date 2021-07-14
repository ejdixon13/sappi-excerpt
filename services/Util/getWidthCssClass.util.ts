export const defaultWidthKwd = 'default-width';
export const mediumWidthKwd = 'medium-width';

const getWidthCssClass = (widthKeyword: string | undefined | null): string => {
  if (!widthKeyword) {
    return '';
  }

  if (widthKeyword === defaultWidthKwd) {
    return widthKeyword;
  }

  if (widthKeyword === mediumWidthKwd) {
    return `${defaultWidthKwd} max-w-xs`;
  }

  return `w-${widthKeyword}`;
};

export default getWidthCssClass;
