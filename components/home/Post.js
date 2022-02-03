import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import Header from '../post/Header';
import PostImage from '../post/Image';
import Footer from '../post/Footer';
const Post = ({post}) => {
  return (
    <View style={{marginBottom: 30}}>
      <Divider width={1} orientation='vertical'/>
     <Header post={post}></Header>
     <PostImage post={post}/>
     <Footer post={post}/>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
