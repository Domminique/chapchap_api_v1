import React from "react";
// import SwipeableItem, { UnderlayParams } from "react-native-swipeable-item";
import { FontAwesome } from "@expo/vector-icons";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import moment from "moment";
// const { multiply, sub } = Animated;
// import Animated from "react-native-reanimated";
import { useTheme } from "react-native-paper";

export default function renderItem({
  item,
  index,
  itemRefs,
  deleteItem,
  showmodel,
}) {
  const { colors } = useTheme();

  function Age() {
    let years = Math.floor(moment().diff(moment(item.Date), "years", true));
    let days = Math.floor(moment().diff(moment(item.Date), "days", true));
    let text = "";
    if (years == 0 && days == 0) {
      return null;
    } else if (days == 0) {
      text = `Check-up, ${state.text} is ${years} old`;
    } else if (years == 0) {
      text = `Check-up in the last ${days} days`;
    } else {
      text = "Check-up in the last " + days + " Days, \n" + years + " Years old";
    }
    return (
      <Text
        style={[
          styles.text,
          { color: colors.text, fontSize: 16, marginTop: 15 },
        ]}
      >
        {text}
      </Text>
    );
  }
 

  return (
    <View  key={item.key} >
<View style={[styles.row, { flex: 1, backgroundColor: colors.tab }]}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <View style={{ flex: 1, marginVertical: 10, marginHorizontal: 5 }}>
            <TouchableOpacity onPress={() => showmodel(item)}>
              <Text style={[styles.text, { color: colors.text, flex: 1 }]}>
                {item.text == "Tap to change the name"
                  ? item.text
                  : `${item.text}'s Check-up`}
              </Text>
              {Age()}
              {/* <Text
                style={[
                  styles.text,
                  { color: colors.text, fontSize: 16, marginTop: 15 },
                ]}
              >
                {Age()}
              </Text> */}
            </TouchableOpacity>
          </View>

          <View style={styles.sep} />
          <View style={{ flex: 0.3 }}>
            <Text
              style={[
                styles.text,
                {
                  color: colors.text,
                  fontSize: 14,
                  textAlign: "center",
                  lineHeight: 22,
                },
              ]}
            >
              {`${
                moment(item.Date).format("Do ") +
                "," +
                moment(item.Date).format("MMM")
              }`}
            </Text>
          </View>
        </View>
      </View>

    </View>
   
    // <SwipeableItem
    //   key={item.key}
    //   item={item}
    //   ref={(ref) => {
    //     if (ref && !itemRefs.get(item.key)) {
    //       itemRefs.set(item.key, ref);
    //     }
    //   }}
    //   onChange={({ open }) => {
    //     if (open) {
    //       // Close all other open items
    //       [...itemRefs.entries()].forEach(([key, ref]) => {
    //         if (key !== item.key && ref) ref.close();
    //       });
    //     }
    //   }}
    //   overSwipe={30}
    //   // renderUnderlayLeft={renderUnderlayLeft}
    //   // renderUnderlayRight={renderUnderlayRight}
    //   snapPointsLeft={[150]}
    //   snapPointsRight={[175]}
    // >
      // <View style={[styles.row, { flex: 1, backgroundColor: colors.tab }]}>
      //   <View
      //     style={{
      //       flexDirection: "row",
      //       alignItems: "center",
      //       justifyContent: "space-between",
      //       flex: 1,
      //     }}
      //   >
      //     <View style={{ flex: 1, marginVertical: 10, marginHorizontal: 5 }}>
      //       <TouchableOpacity onPress={() => showmodel(item)}>
      //         <Text style={[styles.text, { color: colors.text, flex: 1 }]}>
      //           {item.text == "Tap to change the name"
      //             ? item.text
      //             : `${item.text}'s Birthday`}
      //         </Text>
      //         {Age()}
      //         {/* <Text
      //           style={[
      //             styles.text,
      //             { color: colors.text, fontSize: 16, marginTop: 15 },
      //           ]}
      //         >
      //           {Age()}
      //         </Text> */}
      //       </TouchableOpacity>
      //     </View>

      //     <View style={styles.sep} />
      //     <View style={{ flex: 0.3 }}>
      //       <Text
      //         style={[
      //           styles.text,
      //           {
      //             color: colors.text,
      //             fontSize: 14,
      //             textAlign: "center",
      //             lineHeight: 22,
      //           },
      //         ]}
      //       >
      //         {`${
      //           moment(item.Date).format("Do ") +
      //           "," +
      //           moment(item.Date).format("MMM")
      //         }`}
      //       </Text>
      //     </View>
      //   </View>
      // </View>
    // </SwipeableItem>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  TitleContainer: {
    flex: 0.2,
    justifyContent: "center",
    marginHorizontal: 7,
  },
  row: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "gray",
  },
  text: {
    fontWeight: "bold",
    fontSize: 24,
  },
  underlayRight: {
    flex: 1,
    justifyContent: "flex-start",
    borderWidth: 0,
  },
  underlayLeft: {
    flex: 1,
    justifyContent: "flex-end",
    borderWidth: 0,
  },
  sep: {
    borderWidth: 1,
    borderColor: "gray",
    marginHorizontal: 10,
    opacity: 0.5,
    alignSelf: "stretch",
    marginVertical: 10,
  },
});
//   <View style={{ flex: 1, marginVertical: 10, marginHorizontal: 5 }}>
//     <TouchableOpacity onPress={() => seteditable(!editable)}>
//       <TextInput
//         maxLength={150}
//         multiline
//         onBlur={() => seteditable(false)}
//         editable={editable}
//         onChangeText={(text) => change_text({ item, text })}
//         value={item.text}
//         style={[styles.text, { flex: 1 }]}
//       />
//     </TouchableOpacity>
//   </View>;

