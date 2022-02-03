import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { footerIcons } from '../../Data/footerIcons';

const Footer = ({ post }) => {
    return (
        <View>
            <View style={
                {
                    flexDirection: 'row'
                }
            }>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start'
                }}>
                    {footerIcons.map((icon, index) => {
                        return (
                            <TouchableOpacity>
                                <Image
                                    source={{ uri: icon.uri }}
                                    style={{
                                        width: 22,
                                        height: 22,
                                        margin: 10
                                    }}
                                />
                            </TouchableOpacity>

                        )
                    })}
                </View>
                <View style={{
                    flex: 1,
                    alignItems: 'flex-end'
                }}>
                    <TouchableOpacity>
                        <Image
                            source={{
                                uri: "https://img.icons8.com/windows/50/ffffff/bookmark-ribbon--v1.png"
                            }}
                            style={{
                                width: 25,
                                height: 25,
                                margin: 10
                            }} />
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <Text
                    style={{
                        color: 'white',
                        marginLeft: 10
                    }}
                >{post.likes} likes</Text>
            </View>
            {/* Captions */}
            <View>
                <Text
                    style={{
                        color: 'white',
                        marginLeft: 10
                    }}
                >
                    <Text style={{ fontWeight: '500' }}>{post.user}</Text>
                    <Text>  {post.caption}</Text>
                </Text>
            </View>
            {/* commnets */}
            {!!post.comments.length &&
                <View>

                    <Text
                        style={{
                            color: 'white',
                            opacity: .6,
                            marginLeft: 10,
                            marginTop: 5
                        }}
                    >
                        View{post.comments.length > 1 ? 'all' : ''} {post.comments.length} {post.comments.length > 1 ? "comments" : 'comment'}
                    </Text>
                    {/* Actual Comments */}
                    {post.comments.map((comment, index) => {
                        return (
                            <View key={index}
                                style={{
                                    flexDirection: 'row'
                                }}
                            >
                                <Text
                                    style={{
                                        fontWeight: '500',
                                        color: '#fff',
                                        marginLeft: 10,
                                        marginTop: 5
                                    }}
                                >{comment.user}</Text>
                                <Text
                                    style={{
                                        color: '#fff',
                                        marginLeft: 10,
                                        marginTop: 5
                                    }}
                                >{comment.comment}</Text>
                            </View>
                        )
                    })}
                </View>}
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({});
