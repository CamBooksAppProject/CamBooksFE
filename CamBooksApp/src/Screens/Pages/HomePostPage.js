import { StyleSheet, View, TouchableOpacity, Image, TextInput, Text, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import IMAGES from '../../../assets';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';

export default function HomePostPage({ navigation }) {
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

    const openPhotoModal = () => {
        setPhotoModalVisible(true);
    };


    const closePhotoModal = () => {
        setPhotoModalVisible(false);
    };

    const handleSelectPhoto = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setProfileImage(result.uri);  // 선택한 이미지로 프로필 업데이트
            closePhotoModal();  // 이미지 선택 후 모달 닫기
        }
    };

    // 프로필 사진 삭제
    const handleDeletePhoto = () => {
        setProfileImage(require('../../../assets/SwapLOGO.png'));  // 프로필 기본으로 변경하기
        closePhotoModal();
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
                    <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', alignItems: 'center', marginBottom: 25 }}>
                        <View style={styles.photoEdit}>
                            <TouchableOpacity>
                                <FontAwesome name="camera" size={20} color="black" />
                                <Text style={{ fontSize: 12 }}>0/4</Text>
                            </TouchableOpacity>
                        </View>

                        <View>

                            <TouchableOpacity style={styles.modalMenu} onPress={handleSelectPhoto}>
                                <Text style={styles.menuFont}>앨범에서 사진 선택</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.modalMenu} onPress={handleDeletePhoto}>
                                <Text style={styles.menuFont}>프로필 사진 삭제</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.cBtn} onPress={closePhotoModal}>
                                <Text style={styles.cBtnText}>닫기</Text>
                            </TouchableOpacity>
                        </View>





                        <View style={[styles.optionsBtn, {
                            marginLeft: 35,
                            backgroundColor: selectedOptions.direct ? '#67574D' : 'white'
                        }]}>
                            <TouchableOpacity onPress={() => toggleOption('direct')}>
                                <Text style={{
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    color: selectedOptions.direct ? 'white' : 'black'
                                }}>직거래</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.optionsBtn, {
                            backgroundColor: selectedOptions.delivery ? '#67574D' : 'white'
                        }]}>
                            <TouchableOpacity onPress={() => toggleOption('delivery')}>
                                <Text style={{
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    color: selectedOptions.delivery ? 'white' : 'black'
                                }}>택배거래</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.optionsBtn, {
                            backgroundColor: selectedOptions.university ? '#67574D' : 'white'
                        }]}>
                            <TouchableOpacity onPress={() => toggleOption('university')}>
                                <Text style={{
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    color: selectedOptions.university ? 'white' : 'black'
                                }}>타대학</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.titleEdit}>
                        <TextInput
                            style={{ marginLeft: 20 }}
                            placeholder="제목을 입력하세요."
                        />
                    </View>

                    <View style={styles.priceEdit}>
                        <TextInput
                            style={{ marginLeft: 20 }}
                            placeholder="₩ 가격을 입력하세요."
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
    photoEdit: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 15,
    },
    optionsBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        width: 70,
        height: 30,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 10,
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
    },
    priceEdit: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: '90%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 15,
        marginBottom: 25,
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
