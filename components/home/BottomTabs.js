import { StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import React from 'react';
import { bottomTabs } from '../../Data/bottomTabs';
import { Image } from 'react-native-elements/dist/image/Image';
import { users } from '../../Data/users';

const BottomTabs = () => {
  return (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }}>
      {bottomTabs.map((tab, i)=>(
          <TouchableOpacity key={i}>
              <Image
              source= {{
                  uri: tab.uri
              }}
              style={{
                  color: 'white',
                  width: 30,
                  height: 30
              }}
              />
          </TouchableOpacity>
      ))}
      <TouchableOpacity key='pic'>
              <Image
              source= {{
                  uri: users[0].image
              }}
              style={{
                  color: 'white',
                  width: 30,
                  height: 30,
                  borderRadius: 40
              }}
              />
          </TouchableOpacity>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
