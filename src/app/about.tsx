import { Button, Text } from "react-native";
import { View,Image } from "react-native";
export default function HomeScreen() {
    return  (
        <View style={{flex:1,display:"flex",justifyContent:"center",alignItems:"center", backgroundColor:"#fff"}}>
            <Image height={50} width={50} resizeMode="contain" className="m-4" source={require("./../../assets/favicon.png")} />
            <Text className="text-2xl">About This App</Text>
            <Text className="text-lg p-4 w-full leading-8 tracking-wide">Culpa quis mollit eu sunt consectetur in ea pariatur. Qui do deserunt magna adipisicing esse ullamco aliqua anim et anim. Excepteur commodo eu pariatur ad labore elit esse est. Laboris incididunt excepteur incididunt adipisicing magna enim mollit nisi cillum.</Text>
            <Text className="text-xs font-bold pt-10 pb-4">
               Author:  Zarjij Hasan Joy 
            </Text>
            <Button   title="Go Back"  />
            
        </View>
    
    )
}