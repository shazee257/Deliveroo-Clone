import React from 'react';
import {
    Text as RNText,
    View as RNView,
    Image as RNImage,
    TouchableOpacity as RNTouchableOpacity,
    StyleSheet,
} from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import { styled } from 'nativewind';
import { StarIcon, MapPinIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';


const Text = styled(RNText);
const View = styled(RNView);
const Image = styled(RNImage);
const SafeAreaView = styled(RNSafeAreaView);
const TouchableOpacity = styled(RNTouchableOpacity);

const RestaurantCard = ({
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
}) => {

    return (
        <TouchableOpacity className='bg-white mr-3' activeOpacity={0.8}>
            <Image className='h-36 w-64' source={{
                uri: urlFor(imgUrl).url(),
            }} />

            <View className='px-3 pb-4'>
                <Text className='font-bold text-lg pt-2'>{title}</Text>
                <View className='flex-row items-center space-x-1'>
                    <StarIcon size={22} color="green" opacity={0.5} />
                    <Text className='text-xs text-gray-500'>
                        <Text className='text-green-500'>{rating}</Text> - {genre}
                    </Text>
                </View>


                <View className='flex-row items-center space-x-1'>
                    <MapPinIcon size={22} color="gray" opacity={0.4} />
                    <Text className='text-xs text-gray-500'>Nearby - {address}</Text>

                </View>
            </View>

        </TouchableOpacity>
    )
}

export default RestaurantCard