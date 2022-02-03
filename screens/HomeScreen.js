import { SafeAreaView, ScrollView, StyleSheet, Text, View,  } from 'react-native';
import React from 'react';
import Header from '../components/home/Header'
import Stories from '../components/home/Stories';
import Post from '../components/home/Post';
import { posts } from '../Data/posts';
import BottomTabs from '../components/home/BottomTabs';
const HomeScreen = () => {
  return (
   <SafeAreaView style={styles.container}>
      <Header/>
      <Stories/>
      <ScrollView showsVerticalScrollIndicator={false}>
          {
              posts.map((post, index)=>{
                  return  <Post post={post} key={index}/>
              })
          }
      </ScrollView>
      <BottomTabs/>
   </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1
    }
});
