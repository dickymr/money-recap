import { FlashList } from '@shopify/flash-list';

import CategoryCard from './CategoryCard';

import { CategoriesType } from '../types';

type CategoryFormLayoutProps = {
  data: CategoriesType[];
};

const CategoryCardList = ({ data }: CategoryFormLayoutProps) => {
  const totalItems = data.reduce((count, category) => {
    return count + 1 + (category.children ? category.children.length : 0);
  }, 0);

  return (
    <FlashList
      data={data}
      renderItem={({ item, index }) => (
        <CategoryCard
          key={index}
          id={item.id}
          name={item.name}
          color={item.color}
          icon={item.icon}
          type={item.type}
          children={item.children}
        />
      )}
      estimatedItemSize={totalItems}
    />
  );
};

export default CategoryCardList;
