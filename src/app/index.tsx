import { Link } from "expo-router";
import { Text, View } from "react-native";
import { meditation, } from "../data";

const data = meditation[2]

export default function HomeScreen() {
    return(
        <View style={{flex:1,display:"flex",justifyContent:"flex-start",alignItems:"flex-start",backgroundColor:"#fff", paddingTop:16 , 
        }}>
            
    {
         meditation.map((item) => {
             return(

          

            <View key={item.id} className="flex flex-col border-gray-100 border-2  w-full bg-teal-50 rounded-xl   p-4 m-1 gap-4">
                  <Text className="bg-slate-100 text-xl    rounded-xl" >{item.title}</Text>
                  <Text >{item.description}</Text>
            </View>
            
                )
         })
    }


            <Link className="text-2xl p-4 text-blue-500" href="/about">about page</Link>
        </View>
    )  
   
}