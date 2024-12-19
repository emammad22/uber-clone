
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-[19px] italic">Home Page!</Text>
    </SafeAreaView>
  );
};

export default Home;