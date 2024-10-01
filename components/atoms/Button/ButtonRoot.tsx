import React from "react";
import { TouchableOpacity, ActivityIndicator } from "react-native";
import { twMerge } from "tailwind-merge";

type ButtonRootProps = {
  children: React.ReactNode;
  variant: "outline" | "solid";
  color: string;
  onPress: () => void;
  isSubmitting?: boolean;
  disabled?: boolean;
};

export const ButtonRoot = ({
  children,
  variant,
  color,
  onPress,
  isSubmitting = false,
  disabled = false,
}: ButtonRootProps) => {
  const isDisabled = isSubmitting || disabled;

  const buttonClass = twMerge(
    "relative p-5 rounded-full items-center justify-center flex-row",
    isDisabled ? "opacity-50" : "opacity-100"
  );

  let bgColorClass = "";
  let borderColorClass = "";

  switch (color) {
    case "red":
      bgColorClass = "bg-red-500";
      borderColorClass = "border-red-500";
      break;
    case "green":
      bgColorClass = "bg-green-400";
      borderColorClass = "border-green-400";
      break;
    case "blue":
      bgColorClass = "bg-blue-500";
      borderColorClass = "border-blue-500";
      break;
    case "yellow":
      bgColorClass = "bg-yellow-500";
      borderColorClass = "border-yellow-500";
      break;
    case "darkgreen":
      bgColorClass = "bg-darkgreen";
      borderColorClass = "border-darkgreen";
      break;
    case "lightgreen":
      bgColorClass = "bg-lightgreen";
      borderColorClass = "border-lightgreen";
      break;
    case "neongreen":
      bgColorClass = "bg-neongreen";
      borderColorClass = "border-neongreen";
      break;
    case "black":
      bgColorClass = "bg-black";
      borderColorClass = "border-black";
      break;
    default:
      bgColorClass = "bg-white";
      borderColorClass = "border-white";
      break;
  }

  const finalClass = twMerge(
    buttonClass,
    variant === "outline"
      ? `${borderColorClass} border bg-transparent`
      : bgColorClass
  );

  return (
    <TouchableOpacity
      testID="button"
      onPress={onPress}
      className={finalClass}
      style={{ gap: 10 }}
      disabled={isDisabled}
    >
      {isSubmitting ? (
        <ActivityIndicator color={color === "white" ? "black" : "white"} />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};
