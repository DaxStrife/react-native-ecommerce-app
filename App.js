import { StatusBar } from "expo-status-bar";
import { Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useColorScheme } from "nativewind";
import Toast from "react-native-toast-message";

import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import ProductsList from "./components/ProductsList";

const Header = () => {
  const { colorScheme, toggleColorScheme, setColorScheme } = useColorScheme();
  return (
    <View className="flex flex-row justify-between items-center w-full gap-5">
      <Text className="text-black dark:text-white text-2xl font-bold">New collection</Text>
      {/* <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} /> */}

      {colorScheme === "dark" ? (
        <Entypo name="light-up" size={28} color="white" onPress={() => setColorScheme("light")} />
      ) : (
        <Feather name="moon" size={28} color="black" onPress={() => setColorScheme("dark")} />
      )}
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-gray-200 dark:bg-black">
      <Header />

      <ProductsList />

      <Toast />
      <StatusBar style="auto" />
      {/* <StatusBar style={colorScheme === "dark" ? "light" : "dark"} /> */}
    </SafeAreaView>
  );
}
