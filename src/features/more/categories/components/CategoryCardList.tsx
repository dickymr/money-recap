import { FlashList } from '@shopify/flash-list';

import CategoryCard from './CategoryCard';

import { CategoriesType } from '../types';

type CategoryFormLayoutProps = {
  data: CategoriesType[];
};

const CategoryCardList = ({ data }: CategoryFormLayoutProps) => {
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
      estimatedItemSize={5}
    />
  );
};

export default CategoryCardList;
