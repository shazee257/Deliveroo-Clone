import React, { useLayoutEffect, useState } from 'react';
import {
    View as RNView,
    Text as RNText,
    TouchableOpacity as RNTouchableOpacity,
    Image as RNImage,
} from 'react-native';

import { styled } from 'nativewind';
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import Currency from 'react-currency-formatter';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';

const View = styled(RNView);
const Text = styled(RNText);
const Image = styled(RNImage);
const TouchableOpacity = styled(RNTouchableOpacity);

const BasketIcon = ({ id, name, description, price, image }) => {
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);
    const navigation = useNavigation();

    if (items.length === 0) return null;

    return (
        <View className='absolute bottom-10 w-full z-50'>
            <TouchableOpacity
                onPress={() => navigation.navigate('Basket')}
                className='mx-5 p-4 flex-row items-center space-x-1 bg-[#459a97]  rounded-lg'>
                <Text className='text-white font-extrabold text-lg bg-[#347777] py-1 px-2'>{items.length}</Text>
                <Text className='flex-1 text-white font-extrabold text-lg text-center'>View Basket</Text>
                <Text className='text-lg text-white font-extrabold'>
                    <Currency quantity={basketTotal} currency='GBP' />
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketIcon