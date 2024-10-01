import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { ArrowRight, NotificationBing, Setting } from "iconsax-react-native";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Profile() {
  return (
    <View className="flex-1 bg-[#f1f1f1] p-5">
      <View className="mt-10">
        <Text
          className="text-3xl text-slate-700"
          style={{
            fontFamily: "Rubik_700Bold",
          }}
        >
          Perfil
        </Text>
      </View>
      <View className="relative items-center justify-center mt-8">
        <Image
          source={require("../assets/images/profile.jpg")}
          placeholder={blurhash}
          contentFit="cover"
          transition={1000}
          className="rounded-[50px] w-36 h-36 mx-auto"
          blurRadius={10}
        />

        <Image
          source={require("../assets/images/profile.jpg")}
          placeholder={blurhash}
          contentFit="cover"
          transition={1000}
          className="absolute rounded-[50px] w-32 h-32 mx-auto"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: [{ translateX: -64 }, { translateY: -64 }],
          }}
        />
      </View>
      <View className="mt-2 items-center">
        <Text
          className="text-xl text-slate-700"
          style={{
            fontFamily: "Rubik_700Bold",
          }}
        >
          Jhon
        </Text>
        <Text className="text-lg text-slate-400">john@gmail.com</Text>
      </View>
      <TouchableOpacity
        onPress={() => {}}
        className="mt-10 p-4 bg-white rounded-xl flex-row justify-between"
      >
        <View className="flex-row gap-2 items-center">
          <NotificationBing size="32" color="#FF8A65" />
          <Text
            className="text-lg text-slate-500"
            style={{
              fontFamily: "Rubik_400Regular",
            }}
          >
            Notificações
          </Text>
        </View>
        <ArrowRight size="32" color="#FF8A65" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {}}
        className="mt-5 p-4 bg-white rounded-xl flex-row justify-between"
      >
        <View className="flex-row gap-2 items-center">
          <Setting size="32" color="#FF8A65" />
          <Text
            className="text-lg text-slate-500"
            style={{
              fontFamily: "Rubik_400Regular",
            }}
          >
            Configurações
          </Text>
        </View>
        <ArrowRight size="32" color="#FF8A65" />
      </TouchableOpacity>
    </View>
  );
}
