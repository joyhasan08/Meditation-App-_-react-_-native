import { Link, } from "expo-router";
import { FlatList, Text, View, Image, SafeAreaView } from "react-native";
import { meditation, } from "../data";
import { meditationList } from "../components/MeditationCard";


export default function HomeScreen() {

   return (

      <SafeAreaView className="bg-white flex-1 ">

         <View className="flex flex-row items-center justify-between px-4" >

            <View>
               <Text className="text-2xl font-bold mb-1">
                  Hi, Joy Hasan
               </Text>
               <Text>
                  Welcome to Meditation App
               </Text>
            </View>

            <View className="border-2 border-green-400 rounded-full m-4 p-2">
               <Image
                  resizeMode="center"
                  style={{ height: 40, width: 40 }}
                  source={require("./../../assets/favicon.png")} />
            </View>


         </View>

         <FlatList
            className="h-5/6 "
            contentContainerClassName="gap-4 p-4 bg-white"
            data={meditation}
            renderItem={({ item }) => meditationList(item)} />

       

         <View className="flex flex-row items-center justify-around">
         <Link className="text-xl font-bold p-4 text-blue-500 bg-green-300 rounded-xl m-2 w-fit  " href="/about"> 🛒 </Link>
         <Link className="text-xl font-bold p-4 text-blue-500 bg-green-300 rounded-xl m-2 w-fit  " href="/about">Home </Link>
         <Link className="text-xl font-bold p-4 text-blue-500 bg-green-300 rounded-xl m-2 w-fit  " href="/about">Config </Link>
         </View>
         {/* <Link className="text-xl font-bold p-4 text-blue-500 bg-green-300 rounded-xl m-2 w-fit  " href="/about">about page</Link> */}


      </SafeAreaView>
   )

}