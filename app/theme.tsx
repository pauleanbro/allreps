import SafeScreen from "@/components/template/SafeScreen/SafeScreen";
import { Text, View } from "react-native";

export default function ThemePage() {
  return (
    <SafeScreen>
      <View className="flex-1 items-center justify-center">
        <Text
          style={{
            fontFamily: "Rubik_700Bold",
          }}
          className="text-2xl text-primary"
        >
          Themeeeee
        </Text>
      </View>
    </SafeScreen>
  );
}
