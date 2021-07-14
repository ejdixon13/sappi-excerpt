import Option from '../../types/Option.type';

const generateOptions = <T>(
  items: T[] = [],
  optionGen: (item: T, index: number, array: T[]) => Option,
  defaultOption?: Option
): Option[] => {
  const optionsFromItems = items.map(optionGen);

  return defaultOption
    ? [defaultOption, ...optionsFromItems]
    : optionsFromItems;
};

export default generateOptions;
