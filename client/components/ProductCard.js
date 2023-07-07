import React, { useState } from 'react'
import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
// import { products } from "../products";
import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

// import Currency from 'react-currency-formatter'
import { useDispatch, useSelector } from 'react-redux'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline'
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from '../features/basket/basketSlice'

export default function ProductCard({
  image,
  category,
  title,
  price,
  description,
  id, 
  name, 
  jobType,
  product 
}) {
  const [count, setCount] = useState(1);
  const { colorScheme } = useColorScheme();
  const items = useSelector((state) => selectBasketItemsWithId(state, id))
  const dispatch = useDispatch()

  const [isPressed, setIsPressed] = useState(false)
  // const product = products[0];

  const addItemToBasket = () => {
    dispatch(addToBasket({ 
        id:product,
        image,
        name,
        price,
        description,
        product,
        image,
        amount:count
     }))
  }

  const removeItemFromBasket = () => {
    if (!items.length > 0) return

    dispatch(removeFromBasket({ id }))
  }

  return (
    <View className={"w-full bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-5"}>
      <View className="bg-white rounded-xl">
        <Image
          source={{ uri: image }}
          className={"w-full h-72"}
          style={{ resizeMode: "contain" }}
        />
      </View>
      <View className="mt-5">
        <Text className={"text-sm text-black/60 dark:text-white/70"}>
          {category}
        </Text>
        <Text className={"text-lg font-semibold dark:text-white"}>{title}</Text>
        <View className={"flex-row justify-between items-center my-3"}>
          <View className={"flex-row items-center gap-3"}>
            <AntDesign
              name="minuscircleo"
              size={24}
              color={colorScheme === "light" ? "black" : "white"}
              onPress={() => setCount(count - 1)}
            />
            <Text className={"text-xl dark:text-white"}>{count}</Text>
            <AntDesign
              name="pluscircleo"
              size={24}
              color={colorScheme === "light" ? "black" : "white"}
              onPress={() => setCount(count + 1)}
            />
          </View>
          <Text className={"text-2xl font-extrabold dark:text-white"}>
            KES. {price * count}
          </Text>
        </View>
        <Text
          numberOfLines={2}
          className={"text-sm text-black/60 dark:text-white/70"}
        >
          {description}
        </Text>
        <TouchableOpacity onPress={addItemToBasket} className="flex-row justify-center rounded-full bg-black/90 dark:bg-white/90 p-3 w-10/12 self-center mt-5">
          <Text className="text-white dark:text-black font-bold">
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
