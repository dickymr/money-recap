import locales from '@/locales';

import { WalletTypeSelectionType, CurrencyType } from '../types';

const walletTypes: WalletTypeSelectionType[] = [
  {
    key: 'saving',
    icon: 'PiggyBank',
    label: locales.t('more.wallets.choiceSaving'),
    desc: locales.t('more.wallets.choiceSavingDesc'),
  },
  {
    key: 'basic',
    icon: 'Wallet',
    label: locales.t('more.wallets.choiceBasic'),
    desc: locales.t('more.wallets.choiceBasicDesc'),
  },
];

const currencies: CurrencyType[] = [
  { label: 'IDR', value: 'idr', flag: '🇮🇩' },
  { label: 'USD', value: 'usd', flag: '🇺🇸' },
];

export { walletTypes, currencies };
