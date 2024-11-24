
import { Image,View,Text, Pressable } from "react-native";
import { Meditation } from "../types";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from "expo-router";



export  function meditationList(item : Meditation) {

    return(
        <Link href={`/meditationSreen/${item.id}`} asChild> 
        <Pressable className=" rounded-xl border-2 border-slate-400 bg-teal-100  " >
            {/* <Image  height={50} width={50} resizeMode="contain" className="m-4 " source={require("./../../assets/favicon.png")} /> */}
            <Text className="text-xl font-semibold p-2" >{item.title}</Text>
            <Text className="p-2">{item.description}</Text>

            <View className="flex-row items-center justify-end bg-green-300  rounded-b-xl">

                <View className="flex-row items-center p-2">
                 <AntDesign name="file1" size={16} color="black" />
                 <Text className="p-2">{item.type}</Text>
                </View>
            

                <View className="flex-row items-center p-2">
                 <AntDesign name="clockcircleo" size={16} color="black" />
                 <Text className="p-2">{item.duration} min </Text>
                </View>
          
            </View>
            
        </Pressable>
        </Link>
    )
}