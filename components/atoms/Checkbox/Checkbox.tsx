import { Checkbox as CheckboxExpo } from "expo-checkbox";
import { Text, View } from "react-native";
import { useController, Control } from "react-hook-form";

export type CheckboxProps = {
  readonly label: string;
  readonly name: string;
  readonly textColor?: string;
  readonly control: Control<any>;
};

export function Checkbox({
  label,
  name,
  textColor = "text-white",
  control,
}: CheckboxProps) {
  const { field } = useController({
    control,
    name,
  });

  return (
    <View className="flex-row items-center gap-3">
      <CheckboxExpo
        value={field.value}
        onValueChange={field.onChange}
        className="text-white"
      />
      <Text className={`text-start text-[12px] ${textColor}`}>{label}</Text>
    </View>
  );
}
