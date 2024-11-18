import { Stack } from 'expo-router';

const MoreLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="wallets/index" options={{ headerShown: true }} />
      <Stack.Screen
        name="wallets/[id]"
        options={{ headerShown: true, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="categories/index"
        options={{ headerShown: true, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="categories/[id]"
        options={{ headerShown: true, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="settings/index"
        options={{ headerShown: true, animation: 'slide_from_right' }}
      />
    </Stack>
  );
};

export default MoreLayout;
