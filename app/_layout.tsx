import SafeAreaWrapper from "@/components/SafeAreaWrapper";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SafeAreaWrapper>
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaWrapper>
    </ClerkProvider>
  );
}
// start from 2.18 hours
