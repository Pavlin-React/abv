import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Gaming from '../assets/gaming.svg';

const onboardingScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{marginTop: 30}} >
        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#20315f'}}>
          GAMEON
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Gaming
          width={300}
          height={300}
          style={{transform: [{rotate: '-15deg'}]}}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{
          backgroundColor: '#ad40af',
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          borderRadius: 5,
          marginBottom: 50
        }}>
        <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
          Let's Begin
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default onboardingScreen
