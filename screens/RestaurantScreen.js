import React, { useLayoutEffect } from 'react';
import {
    View as RNView,
    Text as RNText,
    TouchableOpacity as RNTouchableOpacity,
    Image as RNImage,
    ScrollView as RNScrollView,
} from 'react-native';

import { styled } from 'nativewind';
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';

const View = styled(RNView);
const Text = styled(RNText);
const Image = styled(RNImage);
const TouchableOpacity = styled(RNTouchableOpacity);
const ScrollView = styled(RNScrollView);


const RestaurantScreen = () => {
    const navigation = useNavigation();

    const { params: {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        lng,
        lat,
    } } = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <ScrollView>
            <View className='relative'>
                <Image source={{ uri: urlFor(imgUrl).url() }}
                    className='h-56 w-full bg-gray-300 p-4' />
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className='absolute top-10 left-5 p-2 bg-gray-100 rounded-full'>
                    <ArrowLeftIcon
                        height={20} width={20} color="#00CCBB" />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default RestaurantScreen