import { View,Image,StyleSheet,useWindowDimensions,ScrollView,TextInput,Alert} from 'react-native';
import Logo from "../../../assets/images/Logo.png";
import { useState } from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from '@react-navigation/native';
import {Auth} from "aws-amplify";
import {useForm,Controller} from "react-hook-form";

const SignInScreen = () => {

  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const [loading,setLoading]=useState(false);

const {control,handleSubmit,formState:{errors},}=useForm();

console.log(errors);

  const onSignInPressed = async (data)=>{
    if(loading){
      return;
    }
    setLoading(true);
    navigation.navigate("HomeTabs");
    try {
      const response = await Auth.signIn(data.username,data.password);
      console.log(response);
    }catch(e){
      Alert.alert('Oops',e.message);
    }
      setLoading(false);
  };
  const onForgotPasswordPressed = ()=>{
    
    navigation.navigate("ForgotPassword");
  };
 
const onSignUpPressed =()=>{
  navigation.navigate("SignUp");

}

  return (
    <ScrollView>
    <View style={styles.root}>
    <Image 
      source={Logo} 
    style={[styles.logo,{height: height * 0.3}]} 
        resizeMode="contain"
      />
     
      <CustomInput 
      name="username"
      placeholder="Username"
       control={control}
        rules={{required:'Username is required'
        
        }}
       />
      <CustomInput 
      placeholder="Password" 
      name="password"
      control={control}
      secureTextEntry
      rules={{required:'Password is required',minLength:{
          value:3,
        message:'Password should have 8 characters and special symbols and numbers'
        },}}
      />

     
     
      <CustomButton
        text={loading ? 'Loading...' :"Sign In"}
        onPress={handleSubmit(onSignInPressed)} 
        />
       <CustomButton
        text="Forgot Password"
        onPress={onForgotPasswordPressed}
        type="TERTIARY"
      />
     <SocialSignInButtons/>
        <CustomButton
        text="Don't have an account? Create one"
        onPress={onSignUpPressed}
        type="TERTIARY"
      />
      </View>
      </ScrollView>
    
  );
};
const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        padding:20 ,
  
    },
     logo: {
         width: "70%",
         maxWidth:300,    
         maxHeight: 200,
      },
     
});

export default SignInScreen;