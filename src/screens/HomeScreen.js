import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView style={{padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 16}}>Hello Steve Jobs</Text>
          <ImageBackground
            source={require('../assets/images/user-profile.jpg')}
            style={{width: 35, height: 35}}
            imageStyle={{borderRadius: 25}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderColor: '#c6c6c6',
            borderWidth: 1,
            padding: 10,
            borderRadius: 7
          }}>
          <Feather
            name="search"
            size={20}
            color="#c6c6c6"
            style={{marginRight: 5}}
          />
          <TextInput placeholder="Search" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 20,
          }}
        >
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Upcoming Games</Text>
          <TouchableOpacity onPress={() => {}} >
          <Text style={{color: '#0aada8'}} >see all</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
