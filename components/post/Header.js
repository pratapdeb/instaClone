import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Header = ({post}) => {
  return (
    <View style={{
        flexDirection: 'row',
        justifyContent:'space-between',
        margin: 5,
        alignItems: 'center',
    }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source = {{uri: post.profile_picture}} 
          style= {styles.icon}/>
          <Text style= {
              {
                  color: 'white',
                  fontWeight: '700',
                  marginLeft: 10
              }
          }>{post.user}</Text>
      </View>
      <View style={{}}>
        <Text style={{color:'#fff', fontWeight:'900'}}>...</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    icon: {
        width: 50,
        height: 50,
        borderRadius: 80,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: "#ff8501"
    }
});
