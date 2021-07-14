// import { useCookies } from 'react-cookie';
import Locale from '../types/Locale.enum';
import useUrlSearchParams from './useUrlSearchParams';

export default function useLanguage(): Locale {
  // const [cookies] = useCookies(['EcommLocale']);
  const urlParams = useUrlSearchParams();

  // First try to get language code from URL params if available.
  let lang = urlParams.get('lang') as Locale;

  // Next try to get language code from cookie if available.
  // if (!lang) {
  //   lang = cookies.EcommLocale as Locale;
  // }

  // Fall back to English as default.
  return lang || Locale.en;
}
