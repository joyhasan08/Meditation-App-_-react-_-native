import { Link, } from "expo-router";
import { FlatList, Text, View , Image} from "react-native";
import { meditation, } from "../data";
import { meditationList } from "../components/MeditationCard";


export default function HomeScreen() {

    return(
        <View className="bg-white flex-1" >

            <FlatList
             className="h-5/6 " 
             contentContainerClassName="gap-4 p-4 bg-white"
             data={meditation} 
             renderItem={({item}) => meditationList(item)} />

        <Link className="text-xl font-bold p-4 text-blue-500 bg-green-300   " href="/about">about page</Link>
        </View>
    )  
   
}