import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import { useState } from "react";
import { Text, View, ScrollView, Image } from "react-native";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <ScrollView>
      <View>
        <View>
          <Image source={images.signUpCar} className="w-full h-[250px] z-0" />
          <Text className="font-JakartaBold text-2xl absolute bottom-5 left-5">Welcome 👋</Text>
        </View>
        <View className="p-5">
          <InputField
            icon={icons.email}
            label={"Email"}
            placeholder="Enter your email"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            icon={icons.lock}
            label={"Password"}
            placeholder="Enter your password"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          <CustomButton title="Sign In" className="mt-5" />
          <OAuth />
          <Link href="/sign-up" className="text-lg text-center text-general-200 mt-10">
            <Text>Don`t have an account?</Text>
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
