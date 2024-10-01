import { TextInput, Text, View } from "react-native";
import { useController } from "react-hook-form";

export type InputProps = {
  readonly label?: string;
  readonly name: string;
  readonly placeholder?: string;
  readonly control: any;
  readonly password?: boolean;
  readonly numeric?: boolean;
  readonly textColor?: string;
  readonly borderColor?: string;
};

export function Input({
  label,
  name,
  placeholder,
  control,
  password,
  numeric,
  textColor = "text-white",
  borderColor = "border-white",
}: InputProps) {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name: name,
  });

  return (
    <View className="w-full">
      {label && (
        <Text className={`${textColor} text-start text-[14px] w-full`}>
          {label}
        </Text>
      )}
      <TextInput
        className={`w-full p-3 bg-stone-50 rounded-xl border ${borderColor} ${textColor}`}
        placeholder={placeholder}
        value={field.value}
        onChangeText={field.onChange}
        secureTextEntry={password}
        keyboardType={numeric ? "numeric" : "default"}
      />
      {error && (
        <Text className="text-red-500 text-xs mt-1">{error.message}</Text>
      )}
    </View>
  );
}
