import { Link } from "expo-router";
import { FlatList, Text, View, Image, SafeAreaView } from "react-native";
import { meditation } from "../data";
import { meditationList } from "../components/MeditationCard";
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function HomeScreen() {
   return (
      <SafeAreaView className="bg-white flex-1">
         <View className="flex flex-row items-center justify-between px-4">
            <View>
               <Text className="text-2xl font-bold mb-1">
                  Hi, Joy Hasan
               </Text>
               <Text>Welcome to Meditation App</Text>
            </View>

            <View className="border-2 border-green-400 rounded-full m-4 p-2">
               <Image
                  resizeMode="center"
                  style={{ height: 40, width: 40 }}
                  source={require("./../../assets/favicon.png")}
               />
            </View>
         </View>
         

         <FlatList
            className="h-5/6"
            contentContainerClassName="gap-4 p-4 bg-white"
            data={meditation}
            renderItem={({ item }) => meditationList(item)}
         />
       

        

         {/* Bottom Navigation Bar */}
         <View className="flex flex-row items-center justify-around">
       
            <Link className="text-xl font-bold p-4 m-2" href="/">  <Icon name="home" size={30} color="#000" /></Link>
            <Link className="text-xl font-bold p-4 m-2" href="/about"> <Icon name="info" size={30} color="black" /> </Link>
            <Link className="text-xl font-bold p-4 m-2" href="/profile"> <Icon name="person" size={30} color="black" /> </Link>
            <Link className="text-xl font-bold p-4 m-2" href="/search"> <Icon name="search" size={30} color="black" /> </Link>
         </View>
      </SafeAreaView>
   );
}
