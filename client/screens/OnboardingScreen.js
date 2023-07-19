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
            title: "Onboarding 1",
            subtitle: "Done with React Native onboarding swiper",
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                style={{ width: 400, height: 400 }}
                source={require("../images/chapchap6.png")}
              />
            ),
            title: "Onboarding 2",
            subtitle: "Done with React Native onboarding swiper",
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                style={{ width: 400, height: 400 }}
                source={require("../images/chapchap7.png")}
              />
            ),
            title: "Onboarding 3",
            subtitle: "Done with React Native onboarding swiper",
            nextLabel: <Payments />,
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;
