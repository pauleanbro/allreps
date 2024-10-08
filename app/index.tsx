import React, { useState } from "react";
import {
  View,
  Dimensions,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";
import Svg, { Path, Image as SvgImage, ClipPath } from "react-native-svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useRouter } from "expo-router";
import { Button, Input } from "@/components/atoms";

const { width } = Dimensions.get("window");

type LoginFormProps = {
  email: string;
  password: string;
};

export default function HomeScreen() {
  const { control, handleSubmit } = useForm<LoginFormProps>();

  const navigation = useRouter();

  const onSubmit: SubmitHandler<LoginFormProps> = (data) => {
    console.log(data);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 bg-white relative">
          <View className="h-[400px]">
            <View className="absolute ml-[-28] mt-[-100]">
              <Svg height={500} width={width + 50} viewBox="0 0 189 202">
                <ClipPath id="clip">
                  <Path
                    d="M 111.5 60.751 L 111.5 57.501 Q 111.5 54.751 113.25 53.001 A 5.908 5.908 0 0 1 116.986 51.286 A 8.017 8.017 0 0 1 117.75 51.251 L 130.5 51.251 Q 133.25 51.251 135 53.001 A 5.908 5.908 0 0 1 136.714 56.737 A 8.017 8.017 0 0 1 136.75 57.501 L 136.75 108.001 Q 136.75 113.383 138.293 117.062 A 12.995 12.995 0 0 0 140.375 120.501 A 11.837 11.837 0 0 0 149.054 124.724 A 16.171 16.171 0 0 0 150 124.751 A 15.411 15.411 0 0 0 153.186 124.441 Q 155.244 124.006 156.808 122.961 A 8.96 8.96 0 0 0 157.875 122.126 Q 160.75 119.501 161.875 115.626 A 29.132 29.132 0 0 0 162.785 111.385 A 23.532 23.532 0 0 0 163 108.251 Q 163.25 102.751 163.375 95.626 Q 163.5 88.501 163 80.751 A 98.102 98.102 0 0 0 161.146 66.88 Q 159.016 56.819 154.75 49.126 A 40.824 40.824 0 0 0 138.12 32.916 A 53.461 53.461 0 0 0 132.75 30.376 Q 117.75 24.251 92.25 24.251 Q 75.573 24.251 63.438 28.639 A 54.023 54.023 0 0 0 57.125 31.376 Q 43.25 38.501 35.625 51.251 A 69.757 69.757 0 0 0 27.626 71.401 A 86.587 86.587 0 0 0 26 80.751 A 62.346 62.346 0 0 0 25.773 83.095 Q 25.564 85.737 25.454 89.31 A 236.523 236.523 0 0 0 25.375 92.751 Q 25.25 100.501 25.375 108.376 A 250.794 250.794 0 0 0 25.461 112.118 Q 25.602 116.69 25.899 119.964 A 72.008 72.008 0 0 0 26 121.001 A 77.299 77.299 0 0 0 30.377 139.74 A 55.774 55.774 0 0 0 45.75 162.251 Q 58.752 173.7 81.546 176.262 A 125.102 125.102 0 0 0 95.5 177.001 A 216.541 216.541 0 0 0 104.709 176.818 Q 113.514 176.442 119.642 175.293 A 59.456 59.456 0 0 0 120.5 175.126 A 75.494 75.494 0 0 0 126.68 173.617 Q 129.544 172.779 131.937 171.779 A 34.336 34.336 0 0 0 135.375 170.126 A 111.001 111.001 0 0 0 141.658 166.371 A 88.874 88.874 0 0 0 145.5 163.751 Q 147.219 162.462 148.661 161.542 A 33.841 33.841 0 0 1 149.125 161.251 Q 150.572 160.36 152.714 160.263 A 11.805 11.805 0 0 1 153.25 160.251 L 171 160.251 Q 173.5 160.251 175.375 162.001 A 5.045 5.045 0 0 1 177.027 165.687 Q 177.038 166.082 177 166.501 Q 177 167.501 176.625 168.376 A 7.359 7.359 0 0 1 176.225 169.165 Q 175.998 169.558 175.704 169.972 A 13.144 13.144 0 0 1 175.5 170.251 A 78.945 78.945 0 0 1 166.619 178.857 A 104.596 104.596 0 0 1 157.875 185.376 Q 147.914 192.055 133.778 196.318 A 126.678 126.678 0 0 1 131.875 196.876 A 106.794 106.794 0 0 1 116.787 199.942 Q 109.435 200.924 101.137 201.169 A 190.782 190.782 0 0 1 95.5 201.251 A 154.456 154.456 0 0 1 74.049 199.845 Q 62.575 198.233 52.97 194.776 A 81.842 81.842 0 0 1 44.625 191.251 A 76.189 76.189 0 0 1 24.354 177.043 A 68.004 68.004 0 0 1 13.625 163.251 A 95.039 95.039 0 0 1 2.135 132.074 A 114.417 114.417 0 0 1 0.75 122.251 Q 0.526 119.12 0.303 114.189 A 636.771 636.771 0 0 1 0.25 113.001 Q 0 107.251 0 100.751 A 302.718 302.718 0 0 1 0.098 92.919 A 251.989 251.989 0 0 1 0.25 88.501 Q 0.441 84.098 0.633 81.162 A 143.138 143.138 0 0 1 0.75 79.501 Q 2.25 63.751 8.625 49.376 Q 15 35.001 26.375 23.876 Q 37.75 12.751 54.125 6.376 A 90.179 90.179 0 0 1 73.04 1.402 Q 82.055 0.001 92.25 0.001 A 191.962 191.962 0 0 1 110.59 0.827 Q 119.538 1.688 127.227 3.445 A 95.945 95.945 0 0 1 136 5.876 Q 153.75 11.751 164.875 22.501 Q 176 33.251 181.5 47.876 A 110.085 110.085 0 0 1 187.632 73.209 A 127.405 127.405 0 0 1 188.25 79.501 A 111.713 111.713 0 0 1 188.701 87.015 A 131.325 131.325 0 0 1 188.75 90.626 A 507.242 507.242 0 0 1 188.654 100.62 A 459.214 459.214 0 0 1 188.625 102.001 A 308.862 308.862 0 0 1 188.555 104.626 Q 188.438 108.376 188.25 111.001 A 52.584 52.584 0 0 1 186.772 120.836 Q 185.18 127.087 182 132.001 A 37.266 37.266 0 0 1 173.773 141.147 A 33.964 33.964 0 0 1 168.125 144.751 Q 159.75 149.001 150 149.001 Q 141.75 149.001 135.5 146.751 A 53.245 53.245 0 0 1 131.147 144.975 Q 128.948 143.956 127.15 142.832 A 26.936 26.936 0 0 1 125.375 141.626 Q 122.652 139.606 120.855 137.771 A 20.382 20.382 0 0 1 119.5 136.251 A 40.272 40.272 0 0 1 117.648 138.791 Q 116.129 140.723 114.125 142.876 A 19.884 19.884 0 0 1 110.598 145.832 Q 108.79 147.04 106.536 148.081 A 39.901 39.901 0 0 1 104.375 149.001 A 30.226 30.226 0 0 1 99.446 150.424 Q 94.3 151.484 87.225 151.5 A 96.196 96.196 0 0 1 87 151.501 A 39.958 39.958 0 0 1 73.248 149.231 A 34.366 34.366 0 0 1 57.75 137.751 A 47.423 47.423 0 0 1 49.563 121.125 Q 47.651 114.299 47.165 106.178 A 95.145 95.145 0 0 1 47 100.501 A 87.915 87.915 0 0 1 48.198 85.513 Q 50.526 72.078 57.375 63.001 A 33.328 33.328 0 0 1 81.752 49.466 A 45.971 45.971 0 0 1 86.25 49.251 A 50.282 50.282 0 0 1 92.085 49.568 Q 95.066 49.917 97.545 50.65 A 21.309 21.309 0 0 1 102 52.501 A 30.61 30.61 0 0 1 110.718 59.753 A 29.361 29.361 0 0 1 111.5 60.751 Z M 91.75 127.251 A 24.314 24.314 0 0 0 97.63 126.584 A 15.564 15.564 0 0 0 106.625 120.751 A 20.197 20.197 0 0 0 109.499 115.143 Q 111.5 109.309 111.5 100.501 A 62.046 62.046 0 0 0 111.114 93.33 Q 110.218 85.65 107.238 81.016 A 17.2 17.2 0 0 0 106.625 80.126 Q 101.75 73.501 91.75 73.501 A 21.739 21.739 0 0 0 85.751 74.284 A 15.854 15.854 0 0 0 77.25 80.126 A 20.838 20.838 0 0 0 74.215 86.06 Q 72.25 91.88 72.25 100.501 Q 72.25 109.001 74.375 115.001 Q 76.5 121.001 80.875 124.126 A 16.417 16.417 0 0 0 87.347 126.846 A 22.867 22.867 0 0 0 91.75 127.251 Z"
                    fill="white"
                  />
                </ClipPath>
                <SvgImage
                  href={require("@/assets/images/casa4.jpg")}
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#clip)"
                />
              </Svg>
            </View>
          </View>

          <View className="p-4">
            <Text
              className="text-2xl text-center text-slate-600"
              style={{
                fontFamily: "Rubik_700Bold",
              }}
            >
              Bem-vindo(a) ao <Text>A</Text>llreps
            </Text>
            <View className="mt-5">
              <Input
                name="email"
                placeholder="Email"
                textColor="text-stone-50"
                borderColor="border-stone-200"
                control={control}
              />
            </View>
            <View className="mt-5">
              <Input
                name="password"
                placeholder="Senha"
                textColor="text-stone-50"
                borderColor="border-stone-200"
                control={control}
              />
            </View>
            <View className="mt-5">
              <Button.Root
                variant="solid"
                color="black"
                onPress={handleSubmit(onSubmit)}
              >
                <Button.Text color="white" bold={false}>
                  Entrar
                </Button.Text>
              </Button.Root>
            </View>
            <Link href="/profile" className="mt-5 text-center">
              <Text className="text-slate-600">
                Não possui uma conta? Registre-se
              </Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
