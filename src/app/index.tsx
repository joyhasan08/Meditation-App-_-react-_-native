import { Link } from "expo-router";
import { FlatList, Text, View , Image} from "react-native";
import { meditation, } from "../data";

const data = meditation[2]

function meditationList(data) {
    return(
        <View className="p-4 m-4 rounded-xl border-2 border-slate-400 bg-teal-100  " >
            <Image  height={50} width={50} resizeMode="contain" className="m-4 " source={require("./../../assets/favicon.png")} />
            <Text className="bg-slate-100 text-xl    rounded-xl font-semibold p-2" >{data.title}</Text>
            <Text className="p-2">{data.description}</Text>
        </View>
    )
}

export default function HomeScreen() {
    return(
        <View >
            <FlatList className="h-5/6 " data={meditation} renderItem={({item}) => meditationList(item)} />

            <Link className="text-2xl p-4 text-blue-500" href="/about">about page</Link>
        </View>
    )  
   
}