import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Logo from  '../../assets/Vector.png'
export default function Header() {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
      <Image styles={styles.logo}
        source={Logo}/>
        </TouchableOpacity>
        <View style={styles.iconsContainer}
        >
            <TouchableOpacity>
            <Image style={styles.icon} 
            source = {
                {
                uri: 'https://img.icons8.com/ios/50/ffffff/plus-2-math.png'
            }}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={styles.icon} 
            source = {
                {
                uri: "https://img.icons8.com/ios/50/ffffff/like--v1.png"
            }}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.unreadBadge}>
                    <Text style={styles.unreadBadgeText}>11</Text>
                </View>
            <Image style={styles.icon} 
            source = {
                {
                uri: "https://img.icons8.com/ios/50/ffffff/facebook-messenger--v1.png"
            }}/>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection:'row'
    },
    iconsContainer: {
        flexDirection: 'row',
    },
    logo: {
        flex: 1,
        width: 1,
        height: 10,
        resizeMode: 'contain'
    },
    icon:{
        color: 'white',
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: 'contain'
    },
    unreadBadge:{
        backgroundColor: '#FF3250',
        position: "absolute",
        left: 20,
        bottom: 18,
        width: 18,
        height: 18,
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100
    },
    unreadBadgeText: {
        color: 'white',
        fontWeight: '600'
    }

});
