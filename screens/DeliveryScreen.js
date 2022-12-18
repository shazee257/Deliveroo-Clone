import React, { useLayoutEffect, useMemo, useState } from 'react';
import {
    View as RNView,
    Text as RNText,
    TouchableOpacity as RNTouchableOpacity,
    Image as RNImage,
    SafeAreaView as RNSafeAreaView,
    ScrollView as RNScrollView,
    StyleSheet
} from 'react-native';

import { styled } from 'nativewind';
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import Currency from 'react-currency-formatter';
import { XMarkIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { useEffect } from 'react';
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';

const View = styled(RNView);
const Text = styled(RNText);
const Image = styled(RNImage);
const TouchableOpacity = styled(RNTouchableOpacity);
const SafeAreaView = styled(RNSafeAreaView);
const ScrollView = styled(RNScrollView);

const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);


    return (
        <View className='bg-[#00CCBB] flex-1'>
            <SafeAreaView className='z-50'>
                <View className='flex-row items-center justify-between p-5 mt-5'>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <XMarkIcon color="white" className='h-6 w-6' />
                    </TouchableOpacity>
                    <Text className='font-light text-white text-lg'>Order Help</Text>
                </View>

                <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
                    <View className='flex-row justify-between'>
                        <View>
                            <Text className='text-gray-400 text-lg'>Estimated Arrival</Text>
                            <Text className='font-bold text-4xl'>45-55 Minutes</Text>
                        </View>
                        <Image source={{
                            uri: "https://links.papareact.com/fls"
                        }}
                            className='h-20 w-20'
                        />
                    </View>

                    <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />

                    <Text className='mt-3 text-gray-400'>
                        Your order at {restaurant.title} is being prepared
                    </Text>
                </View>
            </SafeAreaView>

            <MapView
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.lng,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
                mapType='mutedStandard'
                style={styles.mapStyle}>

                <Marker
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.lng,
                    }}
                    title={restaurant.title}
                    description={restaurant.short_description}
                    identifier="origin"
                    pinColor="#00CCBB"
                />
            </MapView>

            <SafeAreaView className='bg-white flex-row items-center space-x-5 h-24'>
                <Image source={{ uri: "https://links.papareact.com/wru" }}
                    className='h-12 w-12 bg-gray-300 p-4 rounded-full ml-5' />
                <View className='flex-1'>
                    <Text className='text-lg'>M Shahzad</Text>
                    <Text className='text-gray-400'>Your Rider</Text>
                </View>

                <Text className='text-[#00CCBB] text-lg mr-5'>Call</Text>
            </SafeAreaView>

        </View>
    )
}

const styles = StyleSheet.create({
    mapStyle: {
        flex: 1,
        zIndex: -1,
        marginTop: -20
    }
})


export default DeliveryScreen