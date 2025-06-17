import { StyleSheet, View, TouchableOpacity, Image, TextInput, Text, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import IMAGES from '../../../assets';

import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function FreeBoardPostPage({ navigation }) {
    const [selectedOptions, setSelectedOptions] = useState({
        direct: false,
        delivery: false,
        university: false,
    });

    const toggleOption = (option) => {
        setSelectedOptions(prevState => ({
            ...prevState,
            [option]: !prevState[option],
        }));
    };

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <View style={styles.topView}>
                <TouchableOpacity onPress={() => navigation.navigate("RouteScreen")} style={{ marginLeft: 15 }}>
                    <Image
                        source={IMAGES.BACK}
                        resizeMode="contain"
                        tintColor="#474747"
                        style={{ width: 25, height: 25 }}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.middleView}>
                <ScrollView>

                    <View style={styles.titleEdit}>
                        <TextInput
                            style={{ marginLeft: 20 }}
                            placeholder="제목을 입력하세요."
                        />
                    </View>


                    <View style={styles.contentsEdit}>
                        <TextInput
                            style={{ padding: 20 }}
                            placeholder="내용을 입력하세요. (500자)"
                            maxLength={500}
                            multiline={true}
                        />
                    </View>
                </ScrollView>
            </View>

            <View style={styles.bottomView}>
                <TouchableOpacity style={styles.postBtn}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>작성 완료</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    topView: {
        backgroundColor: 'white',
        width: '100%',
        height: '10%',
        justifyContent: 'center',
    },
    middleView: {
        backgroundColor: 'white',
        width: '100%',
        height: '73%',
    },
    bottomView: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '100%',
        height: '9%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderTopColor: 'gray',
    },
    titleEdit: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: '90%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 15,
        marginBottom: 25,
        marginTop: 40,
    },
    contentsEdit: {
        alignSelf: 'center',
        width: '90%',
        height: 300,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 15,
    },
    postBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: 50,
        backgroundColor: '#67574D',
        borderRadius: 15,
    }
});
