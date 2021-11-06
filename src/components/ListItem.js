import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import { freeGames } from '../model/data';
import { paidGames } from '../model/data';

const ListItem = ({photo, title, subtitle, price, isFree}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
      }}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={photo}
          style={{width: 55, height: 55, borderRadius: 10, marginRight: 8}}
        />
        <View>
          <Text style={{fontSize: 14, color: '#333'}}>{subtitle}</Text>
          <Text
            style={{fontSize: 14, color: '#333', textTransform: 'uppercase'}}>
            {title}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          paddingVertical: 10,
          backgroundColor: '#0aada8',
          width: 100,
          borderRadius: 10,
        }}>
        <Text style={{textAlign: 'center', color: 'white', fontSize: 14}}>
          {isFree == 'Yes' && 'Play'}
          {isFree == 'No' && {price}}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;
