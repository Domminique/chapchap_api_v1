import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Onboarding from "react-native-onboarding-swiper";
import Payments from "./Payments";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const [completeOnboarding, SetCompleteOnboarding] = useState(false);

  useEffect(() => {
    if (completeOnboarding) navigation.navigate("Tabs");
  }, [completeOnboarding]);

  // const completeOnboarding = async () =>{
  //   // addt o user profile using realm local db
  //   // Flip onbaording
  //    await AsyncStorage.setItem('hasOnBoarded', JSON.stringify({
  //      hasOnboarded:true
  //   }));
  //   // Navigate
  //   props.navigation.navigate("Home")
  // }

  console.log(completeOnboarding, "completeOnboarding");
  return (
    <View style={{ flex: 1 }}>
      <Onboarding
        onDone={() => SetCompleteOnboarding(!completeOnboarding)}
        onSkip={() => SetCompleteOnboarding(!completeOnboarding)}
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <Image
                style={{ width: 400, height: 400 }}
                source={require("../images/chapchap5.png")}
              />
            ),
            title: "Discover the Best Agriculture Marketplace.",
            subtitle: "Get Started' to join our community and start buying or selling fresh farm produce today.",
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                style={{ width: 400, height: 400 }}
                source={require("../images/chapchap6.png")}
              />
            ),
            title: "Register with your email or phone number to get started.",
            subtitle: "By signing up, you agree to our Terms of Service and Privacy Policy.",
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                style={{ width: 400, height: 400 }}
                source={require("../images/chapchap7.png")}
              />
            ),
            title: "Welcome to chapchap!",
            subtitle: "Join our community and start buying or selling fresh farm produce today.",
            nextLabel: <Payments />,
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;
