import { FlashList } from '@shopify/flash-list';

import WalletCard from '../components/WalletCard';

import { wallets } from '../mocks';

const WalletCardList = () => {
  return (
    <FlashList
      data={wallets}
      renderItem={({ item, index }) => (
        <WalletCard
          key={index}
          category={item.category}
          total={item.total}
          accounts={item.accounts}
        />
      )}
      estimatedItemSize={5}
    />
  );
};

export default WalletCardList;
