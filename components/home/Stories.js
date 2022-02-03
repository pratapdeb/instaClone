import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { users } from '../../Data/users';

const Stories = () => {
  return (
    <View style ={styles.container}>
        <ScrollView
        horizontal showsHorizontalScrollIndicator ={false}
        >
            {
                users.map((story, index)=> {
                    return (
                        <View style={{alignItems:'center'}}>
                        <Image
                        source={{
                            uri: story.image
                        }}
                        style = {styles.story}
                    />
                    <Text style={{color: "#fff"}}>{story.name}</Text>
                    </View>
                    )
                })
}
        </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
    container: {
        marginBottom: 13,
        marginTop: 15
    },
    story: {
        width: 70,
        height: 70,
        borderRadius: 80,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: "#ff8501"
    }
});
