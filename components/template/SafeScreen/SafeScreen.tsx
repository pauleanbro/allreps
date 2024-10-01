import { StatusBar, View } from "react-native";
import type { PropsWithChildren } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useThemeColor } from "@/hooks/useThemeColor"; // Certifique-se de importar a função useThemeColor

function SafeScreen({ children }: PropsWithChildren) {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor({}, "background"); // Obtém a cor de fundo do tema

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        backgroundColor: backgroundColor, // Aplica a cor de fundo
      }}
    >
      <StatusBar
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={backgroundColor} // Define a cor de fundo da StatusBar
      />
      {children}
    </View>
  );
}

export default SafeScreen;
