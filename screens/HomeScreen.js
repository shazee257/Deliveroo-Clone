import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Text as RNText, View as RNView, Image as RNImage, TextInput, ScrollView } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import {
    ChevronDownIcon,
    UserIcon,
    AdjustmentsVerticalIcon,
    MagnifyingGlassIcon
} from 'react-native-heroicons/outline';

import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';

const Text = styled(RNText);
const View = styled(RNView);
const Image = styled(RNImage);
const SafeAreaView = styled(RNSafeAreaView);


export default function HomeScreen() {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "featured"] {
                ...,
                Restaurants[]->{
                  ...,
                  dishes[]->{
                    ...
                  }
                  
                }
              }`).then((data) => {
                console.log("featured Categories length: ", data.length);
                setFeaturedCategories(data);
            });
    }, []);

    return (
        <SafeAreaView className='pt-5'>
            {/* Header */}
            <View className='flex-row pb-3 items-center mx-4 space-x-2'>
                <Image className="w-7 h-7 bg-gray-200 rounded-full"
                    source={{ uri: 'https://links.papareact.com/wru' }} />
                <View className='flex-1'>
                    <Text className='font-bold text-gray-400 text-xs' >Deliver Now!</Text>
                    <Text className='font-bold text-xl'>
                        Current Location
                        <ChevronDownIcon size={18} color="#00CCBB" />
                    </Text>
                </View>

                <UserIcon size={35} color="#00CCBB" />
            </View>

            {/* Search */}
            <View className='flex-row items-center justify-between space-x-2 pb-2 mx-4'>
                <View className='flex-row flex-1 items-center space-x-2 bg-gray-200 p-3 rounded-md'>
                    <MagnifyingGlassIcon size={20} color="gray" />
                    <TextInput placeholder='Restaurants and Cuisines'
                        keyboardType='default' />

                </View>
                <AdjustmentsVerticalIcon color="#00CCBB" />
            </View>

            {/* Body */}
            <ScrollView>
                {/* Categories */}
                <Categories />

                {/* Featured Rows */}
                {featuredCategories?.map((category) => (
                    <FeaturedRow
                        key={category._id}
                        id={category._id}
                        title={category.name}
                        description={category.short_description}
                    />
                ))}
            </ScrollView>

        </SafeAreaView>
    )
}