import React, { useLayoutEffect, useMemo, useState } from 'react';
import {
    View as RNView,
    Text as RNText,
    TouchableOpacity as RNTouchableOpacity,
    Image as RNImage,
    SafeAreaView as RNSafeAreaView,
    ScrollView as RNScrollView
} from 'react-native';

import { styled } from 'nativewind';
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import Currency from 'react-currency-formatter';
import { MinusCircleIcon, PlusCircleIcon, XCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketItems } from '../features/basketSlice';
import { useEffect } from 'react';


const View = styled(RNView);
const Text = styled(RNText);
const Image = styled(RNImage);
const TouchableOpacity = styled(RNTouchableOpacity);
const SafeAreaView = styled(RNSafeAreaView);
const ScrollView = styled(RNScrollView);

const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const dispatch = useDispatch();

    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

    useEffect(() => {
        const groupedItems = items.reduce((acc, item) => {
            const existingItem = acc.find(accItem => accItem.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
                return acc;
            } else {
                return [...acc, { ...item, quantity: 1 }];
            }
        }, []);
        console.log("groupedItems ===> ", groupedItems);
        setGroupedItemsInBasket(groupedItems);
    }, [items])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);


    return (
        <SafeAreaView className='flex-1 bg-white'>
            <View className='flex-1 bg-gray-100'>
                <View className='p-5 border-b border-[#00CCBB] bg-white shadow-sm'>
                    <View>
                        <Text className='text-lg font-bold text-center'>Basket</Text>
                        <Text className='text-center text-gray-400'>{restaurant.title}</Text>
                    </View>

                    <TouchableOpacity onPress={navigation.goBack}
                        className="rounded-full bg-gray-100 absolute top-3 right-5">
                        <XCircleIcon color="#00CCBB" height={50} width={50} />
                    </TouchableOpacity>
                </View>

                <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
                    <Image source={{ uri: "https://links.papareact.com/wru" }}
                        className='h-7 w-7 bg-gray-300 p-4 rounded-full' />
                    <Text className='flex-1'>Deliver in 50-75 min</Text>
                    <TouchableOpacity>
                        <Text className='text-[#00CCBB]'>Change</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView className='divide-y divide-gray-200'>
                    {groupedItemsInBasket.map((item, index) => (
                        <View key={index} className='flex-row items-center space-x-3 px-5 py-2 bg-white'>
                            <Text>{item.quantity} x</Text>
                            <Image source={{ uri: urlFor(item.image).url() }}
                                className='h-12 w-12 rounded-full' />
                            <Text className='flex-1'>{item.name}</Text>

                            <Text className='text-gray-600'>
                                <Currency quantity={item.price} currency="GBP" />
                            </Text>

                            <TouchableOpacity>
                                <Text className='text-[#00CCBB] text-xs'
                                    onPress={() => dispatch(removeFromBasket({ id: item.id }))}>Remove</Text>

                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>


            </View>
        </SafeAreaView>
    )
}

export default BasketScreen