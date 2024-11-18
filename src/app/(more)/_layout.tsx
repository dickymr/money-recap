import { Stack } from 'expo-router';

const MoreLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="account/index"
        options={{ headerShown: true, animation: 'slide_from_right' }}
      />
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
        name="debts/index"
        options={{ headerShown: true, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="tools/index"
        options={{ headerShown: true, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="settings/index"
        options={{ headerShown: true, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="feedback/index"
        options={{ headerShown: true, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="about/index"
        options={{ headerShown: true, animation: 'slide_from_right' }}
      />
    </Stack>
  );
};

export default MoreLayout;
