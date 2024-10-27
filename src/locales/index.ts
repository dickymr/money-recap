import { I18n } from 'i18n-js';

import ID from '@/locales/translations/id.json';
import EN from '@/locales/translations/en.json';

const locales = new I18n({
  en: EN,
  id: ID,
});

locales.defaultLocale = 'en';

locales.enableFallback = true;

export default locales;
