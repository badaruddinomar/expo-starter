import { COLORS } from "@/constants/colors";
import { View, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SafeAreaWrapper({
  children,
  style,
  ...props
}: ViewProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingHorizontal: 16,
          flex: 1,
          backgroundColor: COLORS.background,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}
