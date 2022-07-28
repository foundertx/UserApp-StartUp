import  {View,Text,StyleSheet,FlatList} from "react-native";

 const BasketDishItem = ({basketDish})=>{
  
     return (
                <View style={styles.row}>
                <View style={styles.quantityContainer}>
                    <Text> {basketDish.quantity}</Text>
                </View>
                <Text style={{fontWeight: "600"}}>{basketDish.Dish.name}</Text>
                <Text style={{marginLeft: "auto"}}>R{basketDish.Dish.price}</Text>
            </View>
     );
 };
 const styles = StyleSheet.create({
    
    name:{
        fontSize: 24,
        fontWeight: "700",
        marginVertical:10,
    },
    
    row:{
        flexDirection: "row",
        alignItems : "center",
        marginVertical: 15,
        paddingHorizontal:10,

    },
    
    quantityContainer:{
        backgroundColor : "lightblue",
        paddingHorizontal:5,
        paddingVertical: 2,
        marginRight:10,
        borderRadius:3,
    },
});
 export default BasketDishItem;