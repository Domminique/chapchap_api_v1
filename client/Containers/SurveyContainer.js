import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { setSurveyResults } from "../Services/storageServices";

const Stack = createNativeStackNavigator();

const images = {
  activity_high: require("../assets/chapchap20.png"),
  activity_low: require("../assets/chapchap16.png"),
  activity_moderate: require("../assets/chapchap18.png"),
  group_alone: require("../assets/chapchap13.png"),
  group_group: require("../assets/chapchap14.png"),
  group_partner: require("../assets/chapchap15.png"),
  price_high: require("../assets/chapchap21.png"),
  price_low: require("../assets/chapchap22.png"),
  price_moderate: require("../assets/chapchap24.png"),
  travel_driving: require("../assets/chapchap9.png"),
  travel_subway: require("../assets/chapchap5.png"),
  travel_walking: require("../assets/chapchap1.png"),
  unsure: require("../assets/chapchap8.png"),
};

const SurveyButton = ({ image, text, onPress }) => (
  <View style={tw`w-1/2 p-2 h-64`}>
    <TouchableOpacity
      style={tw`flex flex-col py-4 w-full h-full bg-white items-center justify-center rounded-4 shadow-sm`}
      onPress={() => {
        onPress && onPress();
      }}
      activeOpacity={0.7}
    >
      <Image
        style={{
          flex: 1,
          width: "100%",
          resizeMode: "contain",
        }}
        source={image}
      />
      <Text style={tw`text-xl font-bold text-center`}>{text}</Text>
    </TouchableOpacity>
  </View>
);

const SurveyScreen = ({ title, children }) => {
  return (
    <View style={tw`flex items-center justify-center w-full h-full p-8`}>
      <Text style={tw`text-2xl font-bold text-center mb-4`}>{title}</Text>
      <View style={tw`flex flex-col w-full`}>
        {children &&
          [
            [0, 1],
            [2, 3],
          ].map((row) => (
            <View style={tw`flex flex-row w-full`} key={row[0]}>
              {row.map((index) => {
                return children[index];
              })}
            </View>
          ))}
      </View>
    </View>
  );
};

const TravelModeSurvey = ({ navigation }) => {
  const setTravelMode = (value) => setSurveyResults({ travelMode: value });
  const navigate = () => navigation.navigate("Survey2");

  return (
    <SurveyScreen title="How are you shipping today?">
      <SurveyButton
        image={images.travel_walking}
        text="Motorcycle"
        onPress={() => {
          setTravelMode("walking");
          navigate();
        }}
      />
      <SurveyButton
        image={images.travel_subway}
        text="Truck"
        onPress={() => {
          setTravelMode("transit");
          navigate();
        }}
      />
      <SurveyButton
        image={images.travel_driving}
        text="Container"
        onPress={() => {
          setTravelMode("driving");
          navigate();
        }}
      />
      <SurveyButton
        image={images.unsure}
        text="Unsure"
        onPress={() => {
          setTravelMode("walking");
          navigate();
        }}
      />
    </SurveyScreen>
  );
};

const GroupSizeSurvey = ({ navigation }) => {
  const setGroupSize = (value) => setSurveyResults({ groupSize: value });
  const navigate = () => navigation.navigate("Survey3");

  return (
    <SurveyScreen title="What products are you shipping?">
      <SurveyButton
        image={images.group_alone}
        text="Agriculture"
        onPress={() => {
          setGroupSize("alone");
          navigate();
        }}
      />
      <SurveyButton
        image={images.group_partner}
        text="Manufacturing"
        onPress={() => {
          setGroupSize("partner");
          navigate();
        }}
      />
      <SurveyButton
        image={images.group_group}
        text="Retail"
        onPress={() => {
          setGroupSize("group");
          navigate();
        }}
      />
      <SurveyButton
        image={images.unsure}
        text="Unsure"
        onPress={() => {
          setGroupSize(null);
          navigate();
        }}
      />
    </SurveyScreen>
  );
};

const ActivityLevelSurvey = ({ navigation }) => {
  const setActivityLevel = (value) =>
    setSurveyResults({ activityLevel: value });
  const navigate = () => navigation.navigate("Survey4");

  return (
    <SurveyScreen title={`How urgent do you\nwant to be?`}>
      <SurveyButton
        image={images.activity_low}
        text="Low"
        onPress={() => {
          setActivityLevel(1);
          navigate();
        }}
      />
      <SurveyButton
        image={images.activity_moderate}
        text="Moderate"
        onPress={() => {
          setActivityLevel(2);
          navigate();
        }}
      />
      <SurveyButton
        image={images.activity_high}
        text="High"
        onPress={() => {
          setActivityLevel(3);
          navigate();
        }}
      />
      <SurveyButton
        image={images.unsure}
        text="Unsure"
        onPress={() => {
          setActivityLevel(null);
          navigate();
        }}
      />
    </SurveyScreen>
  );
};

const PriceRangeSurvey = ({ navigation }) => {
  const setPriceRange = (value) => setSurveyResults({ priceRange: value });
  const navigate = () => navigation.navigate("MapScreen");

  return (
    <SurveyScreen title={`How much are you\nwilling to spend?`}>
      <SurveyButton
        image={images.price_low}
        text="Low"
        onPress={() => {
          setPriceRange(1);
          navigate();
        }}
      />
      <SurveyButton
        image={images.price_moderate}
        text="Moderate"
        onPress={() => {
          setPriceRange(2);
          navigate();
        }}
      />
      <SurveyButton
        image={images.price_high}
        text="High"
        onPress={() => {
          setPriceRange(3);
          navigate();
        }}
      />
      <SurveyButton
        image={images.unsure}
        text="Unsure"
        onPress={() => {
          setPriceRange(null);
          navigate();
        }}
      />
    </SurveyScreen>
  );
};

export const SurveyContainer = () => {
  return (
    <Stack.Navigator
      initialRouteName="Survey1"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Survey1" component={TravelModeSurvey} />
      <Stack.Screen name="Survey2" component={GroupSizeSurvey} />
      <Stack.Screen name="Survey3" component={ActivityLevelSurvey} />
      <Stack.Screen name="Survey4" component={PriceRangeSurvey} />
    </Stack.Navigator>
  );
};

export default SurveyContainer;
