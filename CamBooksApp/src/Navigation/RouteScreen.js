import React from 'react';
import { StatusBar, StyleSheet, View, Text, Image, Platform, SafeAreaView, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { MaterialIcons } from "@expo/vector-icons";


import IMAGES from '../../assets';

import HomeScreen from '../Screens/HomeScreen';
import ChatScreen from '../Screens/ChatScreen';
import ScrapScreen from '../Screens/ScrapScreen';
import CommunityScreen from '../Screens/CommunityScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const BottomTab = createBottomTabNavigator();

const Header = ({ name, navigation }) => (
    <SafeAreaView style={{ backgroundColor: "white" }}>
        <View style={styles.header}>
            {name === "채팅" ? (
                <View style={styles.topContainer}>
                    <Text style={styles.topFont}>채팅</Text>
                    <TouchableOpacity
                        style={styles.setButton}
                        onPress={() => navigation.navigate("SettingPage")}
                    >
                        <MaterialIcons name="settings" size={26} color="#67574D" />
                    </TouchableOpacity>
                </View>
            ) : name === "마이페이지" ? (
                <View style={{ marginLeft: "auto" }}>
                    <TouchableOpacity onPress={() => navigation.navigate("SettingPage")}>
                        <Image
                            source={IMAGES.SETTING}
                            resizeMode="contain"
                            style={styles.setting}
                        />
                    </TouchableOpacity>
                </View>
            ) : (
                <>
                    <Image
                        source={IMAGES.SWAPLOGOV2}
                        resizeMode="contain"
                        style={styles.logo}
                    />
                    <View
                        style={{
                            flexDirection: "row",
                            marginLeft: "auto",
                            alignItems: "center",
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.navigate("SearchingPage")}
                        >
                            <Image
                                source={IMAGES.SEARCH}
                                resizeMode="contain"
                                style={styles.search}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("NotificationPage")}
                        >
                            <Image
                                source={IMAGES.BELL}
                                resizeMode="contain"
                                style={styles.notificationIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </View>
    </SafeAreaView>
);

const BottomTabIcon = (name, focused) => {
    const icons = {
        중고거래: IMAGES.HOME,
        커뮤니티: IMAGES.COMMUNITY,
        채팅: IMAGES.CHAT,
        스크랩: IMAGES.SCRAP,
        마이페이지: IMAGES.PROFILE,
    };

    return (
        <View style={styles.bottomTabIconContainer}>
            <Image
                source={icons[name]}
                resizeMode="contain"
                style={[styles.bottomTabIcon, { tintColor: focused ? '#474747' : '#D1D1D1' }]}
            />
            <Text style={[styles.bottomTabFont, { color: focused ? '#474747' : '#D1D1D1' }]}>{name}</Text>
        </View>
    );
};

const TotalTab = (name, component, key, headerShown = true) => (
    <BottomTab.Screen
        name={key}
        component={component}
        options={({ navigation }) => ({
            header: headerShown ? () => <Header name={name} navigation={navigation} /> : undefined,
            tabBarIcon: ({ focused }) => BottomTabIcon(name, focused),
        })}
    />
)

export default function RouteScreen({ navigation }) {
    return (
        <BottomTab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: styles.bottomTabStyle,
            }}>
            {TotalTab('중고거래', HomeScreen, 'HomeScreen')}
            {TotalTab('커뮤니티', CommunityScreen, 'CommunityScreen')}
            {TotalTab('채팅', ChatScreen, 'ChatScreen')}
            {TotalTab('스크랩', ScrapScreen, 'ScrapScreen')}
            {TotalTab('마이페이지', ProfileScreen, 'ProfileScreen')}
        </BottomTab.Navigator>
    );
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        width: wp(95),
        height: hp(10),
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
    },
    topContainer: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    topFont: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000000",
    },
    setButton: {
        padding: 5,
    },
    logo: {
        width: wp(20),
        height: hp(6),
    },
    search: {
        width: wp(6),
        height: wp(6),
        tintColor: '#474747',
        marginRight: wp(3),
    },
    notificationIcon: {
        width: wp(6.5),
        height: wp(6.5),
    },
    setting: {
        width: wp(6.5),
        height: wp(6.5),
    },
    bottomTabIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        top: hp(1),
    },
    bottomTabIcon: {
        width: wp(8),
        height: wp(8),
    },
    bottomTabFont: {
        fontSize: wp(3.2),
    },
    bottomTabStyle: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000000',
        shadowOpacity: 0.2,
        shadowRadius: 20,
        paddingHorizontal: wp(2.5),
        height: hp(10),
    },
});
