import Moment from 'moment';
import useLanguage from './useLanguage';

export enum DateFormat {
  BASIC = 'MMM DD, YYYY',
  BASIC_NUM = 'MM/DD/YYYY',
  BASIC_TIME = 'HH:mm',
}

const useDateFormatter = (): {
  format: (
    date: number | Date,
    format?: DateFormat,
    useLocalTimezone?: boolean
  ) => string;
} => {
  const lang = useLanguage();
  const formatDate = (
    date: number | Date,
    format?: DateFormat,
    useLocalTimezone?: boolean
  ): string => {
    return useLocalTimezone
      ? Moment(date)
          .locale(lang)
          .format(format || DateFormat.BASIC)
      : Moment(date)
          .locale(lang)
          .utc()
          .format(format || DateFormat.BASIC);
  };
  return {
    format: formatDate,
  };
};

export default useDateFormatter;
