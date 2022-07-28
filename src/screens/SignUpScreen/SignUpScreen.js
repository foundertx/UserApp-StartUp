import { View, Text ,StyleSheet,ScrollView,Alert} from 'react-native';
import { useState } from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from '@react-navigation/native';
import {useForm,Controller} from "react-hook-form";
import {Auth } from "aws-amplify";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {

const {control,handleSubmit,watch}=useForm();
const pwd =watch('password');
const navigation =useNavigation();


const onRegisterPressed = async data => {
  const {username, password, email, name} = data;
  try {
    await Auth.signUp({
      username,
      password,
      attributes: {email, name, preferred_username: username},
    });

    navigation.navigate('ConfirmEmail', {username});
  } catch (e) {
    Alert.alert('Oops', e.message);
  }
};
const onSignInPressed =()=>{
  navigation.navigate("SignIn");
};
const onTermsOfUsePressed = () =>{
  navigation.navigate("TermsOfService");
};
const onPrivacyPolicyPressed = () =>{
  navigation.navigate("TermsOfService");
};
  return (
    <ScrollView>
    <View style={styles.root}>
    <Text style={styles.title}>Create an Account</Text>

    <CustomInput 
      name="name"
      placeholder="Full Name"
       control={control}
        rules={{
        required:'Name is required',
        minLength:{
        value:3,
        message:'Name should have at least 3 characters long',
        },
        maxLength:{
        value:24,
        message:'Name should be max of 24 characters long',
        },
        }}
       />


    <CustomInput 
      name="username"
      placeholder="Username"
       control={control}
        rules={{
        required:'Username is required',
        minLength:{
        value:3,
        message:'Username should have at least 3 characters long',
        },
        maxLength:{
        value:24,
        message:'Username should be max of 24 characters long',
        },
        }}
       />
       <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          rules={{
            required: 'Email is required',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
        />
  
  <CustomInput 
      name="password"
      placeholder="Enter your Password"
       control={control}
       
        rules={{
        required:'Password is required',
        minLength:{
        value:8,
        message:'Password should have at least 8 characters long',
        },
        }}
       />
        <CustomInput 
      placeholder="Repeat Password" 
      name="password-repeat"
      control={control}
      secureTextEntry
      rules={{
        validate: value => value === pwd || 'Password do not match',
      }}
      />
      <CustomButton
        text="Register"
        onPress={handleSubmit(onRegisterPressed)} 
        />
        <Text style={styles.text}>
        By registering ,you confirm that you have accepted our{" "}
        <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text>{" "}and{" "} 
           <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text>
        </Text>
       <SocialSignInButtons/>
        <CustomButton
        text="Have an account? Sign in"
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

export default SignUpScreen;