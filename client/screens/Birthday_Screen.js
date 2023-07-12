import React, { useState, useEffect, useContext } from "react";
import { useTheme } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import Element from "../components/Birthday/birthday_swipable";
import Model from "../components/Birthday/birthdaymodel";
import { Context } from "../Context/BirthdayDataContext";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  LayoutAnimation,
  TouchableOpacity,
  Platform,
  UIManager,
} from "react-native";
import moment from "moment";

if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

function My_List() {
  const { state, add_birthday, delete_birthday, edit } = useContext(Context);
  const { colors } = useTheme();
  const [showmodel, setmodel] = useState(false);
  const [selecteditem, setselecteditem] = useState(null);


console.log(state, 'state')

function Age() {
  let years = Math.floor(moment().diff(moment(state.Date), "years", true));
  let days = Math.floor(moment().diff(moment(state.Date), "days", true));
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

  useEffect(() => {
    state.sort(function (a, b) {
      var keyA = new Date(a.Date).getTime(),
        keyB = new Date(b.Date).getTime();
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
  }, [state]);

  useEffect(() => {
    state.map((item) => {
      edit({ selecteditem: item, text: item.text, time: item.Date });
    });
  }, []);

  let itemRefs = new Map();

  const chnage_model = (item) => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        200,
        LayoutAnimation.Types.linear,
        LayoutAnimation.Properties.opacity
      )
    );
    setselecteditem(item);
    setmodel(!showmodel);
  };
  const hide_model = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        200,
        LayoutAnimation.Types.linear,
        LayoutAnimation.Properties.opacity
      )
    );
    setmodel(false);
    setselecteditem(null);
  };

  function emptylist() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={[
            styles.text,
            { fontSize: 25, textAlign: "center", color: colors.text },
          ]}
        >
          {"Click on the plus icon to add Birthday Reminder."}
        </Text>
      </View>
    );
  }

  function footer() {
    return (
      <View
        style={{
          height: 75,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            add_birthday();
          }}
        >
          <AntDesign name="plus" size={34} color={colors.text} />
        </TouchableOpacity>
      </View>
    );
  }
  if (showmodel) {
    return (
      <Model edit={edit} hide_model={hide_model} selecteditem={selecteditem} />
    );
  }
  function header() {
    return (
      <View style={styles.TitleContainer}>
        <Text style={[styles.text, { fontSize: 45, color: colors.text }]}>
           Check-Ups
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={header}
        ListEmptyComponent={emptylist}
        style={{ flex: 0.8 }}
        keyExtractor={(item) => item.key}
        data={state}
        renderItem={({ item, index }) => (
          <Element
            index={index}
            item={item}
            itemRefs={itemRefs}
            deleteItem={(item) => {
              delete_birthday(item);
            }}
            showmodel={chnage_model}
          />
//           <View
//           index={index}
//             item={item}
//             itemRefs={itemRefs}
//             deleteItem={(item) => {
//               delete_birthday(item);
//             }}
//             showmodel={chnage_model}
//           onPress={() => navigation.navigate('CategoryDetails')}
//           className='relative mt-2 pl-2 '
//         >
//           {/* <Image
//             source={{
//               uri: imgUrl,
//             }}
//             className='h-20 w-80 rounded'
//              source={require("../assets/Untitled.png")}
//             className='h-24 w-32 rounded'
//           /> */}
//           {/* <Text className='absolute bottom-10 left-4 text-white  text-lg font-extrabold'>
//             {item.text} 
//           </Text> */}


// <View style={[styles.row, { flex: 1, backgroundColor: colors.tab }]}>
//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "space-between",
//             flex: 1,
//           }}
//         >
//           <View style={{ flex: 1, marginVertical: 10, marginHorizontal: 5 }}>
//         <TouchableOpacity onPress={() => showmodel(item)}>
//          <Text style={[styles.text, { color: colors.text, flex: 1 }]}>
//             {item.text == "Tap to change the name"
//                   ? item.text
//                   : `${item.text}'s Birthday`}
//               </Text>
//               {Age()}
//               {/* <Text
//                 style={[
//                   styles.text,
//                   { color: colors.text, fontSize: 16, marginTop: 15 },
//                 ]}
//               >
//                 {Age()}
//               </Text> */}
//             </TouchableOpacity>
//           </View>
//           <View style={styles.sep} />
//           <View style={{ flex: 0.3 }}>
//             <Text
//               style={[
//                 styles.text,
//                 {
//                   color: colors.text,
//                   fontSize: 14,
//                   textAlign: "center",
//                   lineHeight: 22,
//                 },
//               ]}
//             >
//               {`${
//                 moment(item.Date).format("Do ") +
//                 "," +
//                 moment(item.Date).format("MMM")
//               }`}
//             </Text>
//           </View>
//           </View>
//           </View>
//         </View>
        )}
        ListFooterComponent={footer}
      />
    </View>
  );
}

export default My_List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  TitleContainer: {
    flex: 0.4,
    justifyContent: "center",
    marginHorizontal: 7,
    marginVertical: 20,
  },
  text: {
    fontWeight: "bold",
    color: "gray",
    fontSize: 24,
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


// import React, { useState, useEffect, useContext } from "react";
// import { useTheme } from "react-native-paper";
// import { AntDesign } from "@expo/vector-icons";
// // import Element from "../components/Birthday/birthday_swipable";
// import Model from "../components/Birthday/birthdaymodel";
// import { Context } from "../Context/BirthdayDataContext";
// import {
//   Text,
//   View,
//   StyleSheet,
//   FlatList,
//   LayoutAnimation,
//   TouchableOpacity,
//   Platform,
//   UIManager,
// } from "react-native";



// const Birthday_Screen = () => {
//   return (
//     <View>
//       <Text>Birthday_Screen</Text>
//     </View>
//   )
// }

// export default Birthday_Screen