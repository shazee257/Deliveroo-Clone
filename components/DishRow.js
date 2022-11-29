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
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItemsWithId } from '../features/basketSlice';

const View = styled(RNView);
const Text = styled(RNText);
const Image = styled(RNImage);
const TouchableOpacity = styled(RNTouchableOpacity);

const DishRow = ({ id, name, description, price, image }) => {
    const [isPressed, setIsPressed] = useState(false);
    const items = useSelector((state) => selectBasketItemsWithId(state, id));

    const dispatch = useDispatch();

    const addItemToBasket = () => {
        dispatch(addToBasket({
            id,
            name,
            description,
            price,
            image,
        }));
    }

    const removeItemFromBasket = () => {
        if (!items.length > 0) return;

        dispatch(removeFromBasket({ id }));
    }



    return (
        <>
            <TouchableOpacity onPress={() => setIsPressed(!isPressed)}
                className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}>
                <View className='flex-row'>
                    <View key={id} className='flex-1 pr-2'>
                        <Text className='text-base mb-1'>{name}</Text>
                        <Text className='text-gray-400 text-xs'>{description}</Text>
                        <Text className='text-gray-400 mt-2'>
                            <Currency quantity={price} currency='GBP' />
                        </Text>
                    </View>
                    <View>
                        <Image
                            style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
                            source={{ uri: urlFor(image).url() }}
                            className='w-20 h-20 rounded-full p-2'
                        />
                    </View>
                </View>
            </TouchableOpacity>

            {isPressed && (
                <View className='bg-white px-4'>
                    <View className='flex-row items-center space-x-2 pb-3'>
                        <TouchableOpacity onPress={removeItemFromBasket}
                            className=''>
                            <MinusCircleIcon size={40} color="#0077ff" />
                        </TouchableOpacity>
                        <Text className='text-gray-400'>{items.length}</Text>
                        <TouchableOpacity onPress={addItemToBasket}
                            className=''>
                            <PlusCircleIcon size={40} color="#0077ff" />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </>
    )
}

export default DishRow