import { useState } from "react";

import { View, Text, Image, TouchableOpacity, Alert, ToastAndroid } from "react-native";
import Toast from "react-native-toast-message";
import { useColorScheme } from "nativewind";
import { AntDesign } from "@expo/vector-icons";

const AddOrSubtract = ({ count, setCount }) => {
  const { colorScheme } = useColorScheme();
  return (
    <View className="flex flex-row items-center gap-3">
      <AntDesign
        name="minuscircleo"
        size={28}
        color={colorScheme === "light" ? "black" : "white"}
        onPress={() => setCount(count - 1)}
      />
      <Text className="text-2xl dark:text-white">{count}</Text>
      <AntDesign
        name="pluscircleo"
        size={28}
        color={colorScheme === "light" ? "black" : "white"}
        onPress={() => setCount(count + 1)}
      />
    </View>
  );
};

const ProductCard = ({ image, category, title, price, description }) => {
  const [count, setCount] = useState(1);

  const buttonAlert = () =>
    Alert.alert("Producto agregado", `${count} X ${title}`, [
      // {
      //   text: "Cancel",
      //   onPress: () => console.log("Cancel Pressed"),
      //   style: "cancel",
      // },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const showToastAndroid = () => {
    ToastAndroid.show(`Se agrego ${count} x ${title}`, ToastAndroid.SHORT);
  };

  const showToast = () => {
    Toast.show({
      type: "success", //info - success - error
      position: "bottom", // top - bottom
      text1: "Producto agregado",
      text2: `Se agrego ${count} x ${title}`,
    });
  };

  return (
    <View className="w-full bg-white dark:bg-slate-500/40 rounded-3xl p-5 my-5">
      <View className="bg-white rounded-xl">
        <Image source={{ uri: image }} className="w-full h-72" style={{ resizeMode: "contain" }} />
      </View>
      <View className="mt-5">
        <Text className="text-sm text-black/60 dark:text-white/70">{category}</Text>
        <Text className="text-lg font-semibold  dark:text-white">{title}</Text>

        <View className="flex flex-row justify-between my-3">
          <AddOrSubtract count={count} setCount={setCount} />
          <Text className="text-2xl font-extrabold dark:text-white">$ {price * count}</Text>
        </View>

        <Text numberOfLines={2} className="text-sm text-black/60 dark:text-white/70">
          {description}
        </Text>

        <TouchableOpacity
          onPress={showToast}
          className="flex flex-row justify-center self-center bg-black dark:bg-white p-3 rounded-full mt-5 w-10/12"
        >
          <Text className="text-white dark:text-black font-bold">Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;
