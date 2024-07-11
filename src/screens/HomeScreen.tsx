import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constantes/color'
import { useNavigation } from '@react-navigation/native';
import { fonts } from '../constantes/fonts';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../constantes/types';

const HomeScreen = () => {
     // typage de useNavigation
  const navigation =
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handleLogin = () => {
        navigation.navigate('LOGIN')
    }

    const handleSignup = () => {
        navigation.navigate("SIGNUP");
    };
  return (
    <View style={styles.container}>
      <ImageBackground 
      source={require("../../assets/onboarding.jpeg")} 
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      
      <Text style={styles.title}>NUTRISPORT</Text>
      <Text style={styles.subTitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore 
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.loginButtonWrapper,
            { backgroundColor: colors.primary },
          ]}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.loginButtonWrapper]}
          onPress={handleSignup}
        >
          <Text style={styles.signupButtonText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontFamily: fonts.SemiBold,
        paddingHorizontal: 20,
        textAlign: "center",
        color: colors.white,
        marginTop: 40,
      },
      subTitle: {
        fontSize: 18,
        paddingHorizontal: 20,
        textAlign: "center",
        color: colors.secondary,
        fontFamily: fonts.Medium,
        marginVertical: 20,
      },
      buttonContainer: {
        marginTop: 20,
        flexDirection: "row",
        borderWidth: 2,
        borderColor: colors.primary,
        width: "80%",
        height: 60,
        borderRadius: 100,

      },
      loginButtonWrapper: {
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        borderRadius: 100,
      },
      loginButtonText: {
        color: colors.white,
        fontSize: 18,
        fontFamily: fonts.SemiBold,
      },
      signupButtonText: {
        fontSize: 18,
        fontFamily: fonts.SemiBold,
        color: colors.white,
      },
})