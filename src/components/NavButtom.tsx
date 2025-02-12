import { View, Text } from 'react-native'
import React from 'react'
import { Link } from "expo-router";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function NavButtom() {
  return (
    <View>
         <View className="flex flex-row items-center justify-around w-full border-t-2 border-slate-400">
                 <Link className="text-xl font-bold p-4 m-2" href="/">  <Icon name="home" size={30} color="#000" /></Link>
                 <Link className="text-xl font-bold p-4 m-2" href="/about"> <Icon name="info" size={30} color="black" /> </Link>
                 <Link className="text-xl font-bold p-4 m-2" href="/profile"> <Icon name="person" size={30} color="black" /> </Link>
                 <Link className="text-xl font-bold p-4 m-2" href="/search"> <Icon name="search" size={30} color="black" /> </Link>
              </View>
    </View>
  )
}