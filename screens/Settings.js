import { View,Text
} from "react-native";

const  Settings = () =>{
   return(
       <View style={{position:'absolute', width:330,height:45,left:15,top:600,backgroundColor:'#F6FA00',borderRadius:5 }}>
               <Text style={{ fontWeight:'700',lineHeight:25,width:318,height:38,fontSize:15, textAlign:'center',alignItems:'center',top:10, color: "black" }}>

            Settings

               </Text>
             </View>
   )
}
export default Settings;