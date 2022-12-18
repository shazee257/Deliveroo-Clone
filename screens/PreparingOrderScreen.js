import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
    View as RNView,
    Text as RNText,
    TouchableOpacity as RNTouchableOpacity,
    Image as RNImage,
    SafeAreaView as RNSafeAreaView,
    ScrollView as RNScrollView,
    StyleSheet
} from 'react-native';
// stylesheet


import { styled } from 'nativewind';
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import Currency from 'react-currency-formatter';
import { MinusCircleIcon, PlusCircleIcon, XCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';


const View = styled(RNView);
const Text = styled(RNText);
const Image = styled(RNImage);
const TouchableOpacity = styled(RNTouchableOpacity);
const SafeAreaView = styled(RNSafeAreaView);
const ScrollView = styled(RNScrollView);

const PreparingOrderScreen = () => {
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


    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Delivery');
        }, 4000);
    }, [])

    return (
        <SafeAreaView className='flex-1 bg-[#00CCBB] justify-center items-center'>
            <Progress.Circle size={60} indeterminate={true} color="white" />
            <Animatable.Text
                animation="slideInUp"
                iterationCount={1}
                className=""
                style={styles.textAnimate}>
                Waiting for Restaurant to accept your order!
            </Animatable.Text>

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    textAnimate: {
        color: "white",
        fontSize: 16,
        marginTop: 20
    }
})

export default PreparingOrderScreen