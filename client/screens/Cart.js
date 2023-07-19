import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS } from "./Colors";
import { AntDesign } from "@expo/vector-icons";
import { Item, item } from "../components/Context";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  nav = useNavigation();
  let totalAmount = 0;

  const { myBag, setmyBag } = React.useContext(item);

  for (const i of myBag) {
    totalAmount = totalAmount + i.price;
  }

  return (
    <SafeAreaView
      style={{
        paddingTop: 50,
        paddingHorizontal: 25,
        gap: 20,
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: "500" }}>
        {" "}
        {myBag.length} items in cart
      </Text>

      <View style={{ height: 250 }}>
        <FlatList
          data={myBag}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  height: 130,
                  borderRadius: 20,
                  marginBottom: 10,
                  flexDirection: "row",
                  gap: 5,
                  paddingHorizontal: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#FOEDF8",
                    width: "35%",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 20,
                  }}
                >
                  <Image
                    style={{ width: 90, height: 90, borderRadius: 50 }}
                    source={require("../images/avacado.jpg")}
                  />
                </View>

                <View
                  style={{
                    flex: 1,
                    paddingHorizontal: 15,
                    paddingvertical: 15,
                    justifyContent: "space-between",
                    borderRadius: 20,
                  }}
                >
                  <View style={{ gap: 5 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={{ fontSize: 16, fontWeight: "500" }}>
                        {item.name}
                      </Text>

                      <AntDesign
                        onPress={() => {
                          setmyBag(
                            myBag.filter((val) => val.name != item.name)
                          );
                        }}
                        name="closecircleo"
                        size={24}
                        color={COLORS.primary}
                      />
                    </View>

                    <Text
                      style={{
                        color: "#989420",
                        fontSize: 16,
                        fontWeight: "600",
                      }}
                    >
                      KES. {item.price}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      gap: 10,
                      alignItems: "center",
                    }}
                  >
                    <AntDesign
                      name="pluscircle"
                      size={20}
                      color={COLORS.primary}
                    />
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 16,
                        color: "black",
                      }}
                    >
                      1
                    </Text>
                    <AntDesign
                      name="minuscircle"
                      size={20}
                      color={COLORS.primary}
                    />
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>

      <Text style={{ fontSize: 22, fontWeight: "500" }}>
        Order Instructions
      </Text>

      <View
        style={{
          height: 90,
          borderRadius: 20,
          borderWidth: 2,
          borderColor: "black",
          paddingHorizontal: 10,
          paddingvertical: 10,
        }}
      >
        <TextInput style={{ height: 55, fontSize: 17 }} />
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 19, fontWeight: "500" }}>Total:</Text>

        <Text style={{ color: "#989420", fontSize: 17, fontWeight: "800" }}>
          KES. {totalAmount}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => nav.replace("Order")}
        style={{
          backgroundColor: COLORS.primary,
          height: 60,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 19, fontWeight: "700" }}>
          Checkout
        </Text>
      </TouchableOpacity>

      <Text
        onPress={() => {
          nav.navigate("Home");
        }}
        style={{ fontSize: 19, textAlign: "center", fontWeight: "600" }}
      >
        Back to Menu
      </Text>
    </SafeAreaView>
  );
};

export default Cart;
