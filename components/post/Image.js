import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const PostImage = ({post}) => {
  return (
    <Image 
    style={{
        width:'100%',
        height: 300,
        padding: 5
    }}
    source={{uri: post.imageUrl}}
    />
    
  );
};

export default PostImage;

const styles = StyleSheet.create({});
