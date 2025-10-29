
import { View, Text, Pressable } from "react-native";
import { Meditation } from "../types";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from "expo-router";

export function meditationList(item: Meditation) {
  return (
    <Link href={`/meditationScreen/${item.id}`} asChild>
      <Pressable className="rounded-2xl border border-slate-200 bg-white overflow-hidden mx-4 shadow-sm">
        <View className="p-3">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-semibold flex-1" numberOfLines={1}>{item.title}</Text>
            {item.pro && (
              <View className="bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-full ml-2">
                <Text className="text-amber-700 text-xs">PRO</Text>
              </View>
            )}
          </View>

          <Text className="text-gray-600 mt-1" numberOfLines={2}>{item.description}</Text>
          <Text className="italic text-gray-700 mt-2">“{item.quote}”</Text>
        </View>

        <View className="flex-row items-center justify-between bg-teal-50 px-3 py-2">
          <View className="flex-row items-center">
            <MaterialIcons name="category" size={16} color="#0f766e" />
            <Text className="text-teal-700 ml-1 capitalize">{item.type}</Text>
          </View>
          <View className="flex-row items-center">
            <AntDesign name="clockcircleo" size={16} color="#0f766e" />
            <Text className="text-teal-700 ml-1">{item.duration} min</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  )
}
