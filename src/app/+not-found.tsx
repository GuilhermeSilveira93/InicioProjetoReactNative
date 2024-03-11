import { Link, Stack } from "expo-router";
import { View, Text } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex-1 items-center justify-center p-5">
        <Text className="text-lg font-bold">Esta pagina não existe.</Text>

        <Link href="/">
          <Text className="text-sm text-blue-500">Volte para Home!</Text>
        </Link>
      </View>
    </>
  );
}
