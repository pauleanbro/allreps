import React from "react";
import { Text } from "react-native";
import { twMerge } from "tailwind-merge";

type ButtonTextProps = {
  children: React.ReactNode;
  color: string;
  isCentered?: boolean;
  bold?: boolean; // Nova prop para controlar se o texto é bold
};

export const ButtonText = ({
  children,
  color,
  isCentered = true,
  bold = true, // Definindo bold como true por padrão
}: ButtonTextProps) => {
  return (
    <Text
      testID="text-button"
      style={{ color }}
      className={twMerge(
        isCentered ? "text-center" : "",
        bold ? "font-bold" : "font-normal"
      )}
    >
      {children}
    </Text>
  );
};
