import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function CustomDrawer(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#8200d6'}}>
        <ImageBackground
          source={require('../assets/images/menu-bg.jpeg')}
          style={{padding: 20}}>
          <Image
            source={require('../assets/images/user-profile.jpg')}
            style={{width: 80, height: 80, borderRadius: 40, marginBottom: 10}}
          />
          <Text style={{color: 'white', fontSize: 18}}>Steve Jobs</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'white'}}>280 coins</Text>
            <View style={{paddingLeft: 15}} >
              <FontAwesome5 name="coins" size={22} color="white" />
            </View>
          </View>
        </ImageBackground>
        <View style={{backgroundColor: 'white'}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="share-social-outline" size={22} />
            <View style={{paddingLeft: 5}}>
              <Text style={{fontSize: 15}} >Tell a friend </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <View style={{paddingLeft: 5}}>
              <Text style={{fontSize: 15}} >Sign Out </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
