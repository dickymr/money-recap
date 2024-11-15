import { FlashList } from '@shopify/flash-list';

import WalletCard from '../components/WalletCard';

import { wallets } from '../mocks';

const WalletCardList = () => {
  const totalItems = wallets.reduce((count, wallet) => {
    return count + 1 + (wallet.accounts ? wallet.accounts.length : 0);
  }, 0);

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
      estimatedItemSize={totalItems}
    />
  );
};

export default WalletCardList;
