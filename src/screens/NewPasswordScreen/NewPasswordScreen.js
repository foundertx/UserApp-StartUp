import { View, Text ,StyleSheet,ScrollView} from 'react-native';
import { useState } from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {Auth} from "aws-amplify";


const NewPasswordScreen = () => {
  const {control, handleSubmit} = useForm();

const navigation = useNavigation();
  const onSubmitPressed = async()=>{
    try{
      await Auth.forgotPasswordSubmit(data.username,data.code,data.password);
      navigation.navigate("SignIn");
     }catch(e){
       Alert.alert("Oops",e.message)
     }
   };
   
const onSignInPressed =()=>{
  navigation.navigate("SignIn");
};


  return (
    <ScrollView>
    <View style={styles.root}>
    <Text style={styles.title}>Reset your Password</Text>
    <CustomInput
          placeholder="Username"
          name="username"
          control={control}
          rules={{required: 'Username is required'}}
        />
      <CustomInput
          placeholder="Code"
          name="code"
          control={control}
          rules={{required: 'Code is required'}}
        />
   
        <CustomInput
          placeholder="Enter your new password"
          name="password"
          control={control}
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />
      <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />
     
        <CustomButton
        text="Back to Sign In"
        onPress={onSignInPressed}
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
      title:{
        fontSize:24,
        fontWeight: "bold",
        color:"#051C60",
        margin:40.
      },
      text:{
        color: "gray"
      },
      link:{
        color: "#FD8075",
      },
});

export default NewPasswordScreen;