import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';

import ID from '@/locales/translations/id.json';
import EN from '@/locales/translations/en.json';

const locales = new I18n({
  en: EN,
  id: ID,
});

const defaultLocale = 'en';

const locale = Localization.getLocales()[0];

locales.locale = locale?.languageCode || defaultLocale;
locales.locale = 'en';

locales.enableFallback = true;

export default locales;
