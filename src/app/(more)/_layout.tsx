import { Stack } from 'expo-router';

const MoreLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="wallets" options={{ headerShown: true }} />
      <Stack.Screen
        name="wallets-add"
        options={{ headerShown: true, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="categories"
        options={{ headerShown: true, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="categories-add"
        options={{ headerShown: true, animation: 'slide_from_right' }}
      />
    </Stack>
  );
};

export default MoreLayout;
