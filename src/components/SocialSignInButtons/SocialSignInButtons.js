import { View, Text } from 'react-native';
import CustomButton from '../CustomButton';
const SocialSignInButtons = () => {
    const onSignInApple = ()=>{
        console.warn('Sign in with Apple');
      };
      const onSignInFaceBook = ()=>{
        console.warn('Sign in with FaceBook');
      };
      const onSignInGoogle = ()=>{
        console.warn('Sign in with Google');
      };
  return (
    <>
      <CustomButton
        text="Sign in with Google"
        onPress={onSignInGoogle}
        bgColor="#FAEAF4"
        fgColor="#DD4044"
           
        />
        <CustomButton
        text="Sign in with FaceBook"
        onPress={onSignInFaceBook}
        bgColor="#FAEAF4"
        fgColor="#4765A9"
        />
      <CustomButton
        text="Sign in with Apple"
        onPress={onSignInApple} 
        bgColor="#FAE9EA"
        fgColor="#363636" 
        />
    </>
  )
}
export default SocialSignInButtons;