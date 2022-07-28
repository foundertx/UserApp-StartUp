import  {View,Text,Image,FlatList,StyleSheet,Pressable} from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import {useNavigation} from "@react-navigation/native";


const   DishListItem=({ dish})=>{
    const navigation =useNavigation();
    return (
        <Pressable onPress={()=> navigation.navigate("Dish",{id:dish.id})}
        style={styles.container}>
        <View style={{flex:1}}>
        <Text style={styles.name}>{dish.name}</Text> 
        <Text style={styles.description} numberOfLines={2}>{dish.description}</Text> 
        <Text style={styles.price}>R {dish.price} <FontAwesome name="money" size={18} color="green" /></Text> 
        </View>
        { dish.image && <Image source={{uri:dish.image}} style={styles.image}/>}
        </Pressable>
        );
};
const styles = StyleSheet.create({
    container: {
        paddingVertical:10,
        marginVertical:10,
        marginHorizontal:20,
        borderBottomColor : "red ",
        borderBottomWidth: 1,
       flexDirection : "row",
    },
    name:{
        fontSize:18,
        fontWeight : "500",
        letterSpacing: 0.5,

    },
    description:{
        fontSize:16,
        marginVertical: 5,
    },
    price:{
        fontSize:16,
    },
    image:{
        height: 75,
        aspectRatio:1,
    },
});

export default DishListItem;