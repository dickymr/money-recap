import locales from '@/locales';

import { CategoryTypeType, CategoryTypePickerType } from '../types';

const categoryTypes: CategoryTypeType[] = [
  {
    key: 'expense',
    icon: 'CircleArrowUp',
    label: locales.t('more.categories.choiceExpense'),
    desc: locales.t('more.categories.choiceExpenseDesc'),
  },
  {
    key: 'income',
    icon: 'CircleArrowDown',
    label: locales.t('more.categories.choiceIncome'),
    desc: locales.t('more.categories.choiceIncomeDesc'),
  },
];

const categoryTypesPicker: CategoryTypePickerType[] = [
  { label: locales.t('more.categories.detail.expense'), value: 'expense' },
  { label: locales.t('more.categories.detail.income'), value: 'income' },
];

export { categoryTypes, categoryTypesPicker };
