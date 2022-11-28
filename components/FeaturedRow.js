import {
    View as RNView,
    Text as RNText,
    TouchableOpacity as RNTouchableOpacity,
    Image as RNImage,
    ScrollView as RNScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import { styled } from 'nativewind';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import sanity from '../sanity';

const View = styled(RNView);
const Text = styled(RNText);
const Image = styled(RNImage);
const TouchableOpacity = styled(RNTouchableOpacity);
const ScrollView = styled(RNScrollView);

const FeaturedRow = ({ title, description, id }) => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        sanity.fetch(
            `*[_type == "featured" && _id == "${id}"] {
                ...,
                restaurants[]->{
                  ...,
                  dishes[]->,
                    type-> {
                        name
                    }
                }
              }[0]`, { id }
        ).then((data) => {
            setRestaurants(data?.restaurants);
        });
    }, []);

    return (
        <View>
            <View className='mt-4 flex-row items-center justify-between px-4'>
                <Text className='font-bold text-lg'>{title}</Text>
                <ArrowRightIcon size={20} color="#00CCBB" />
            </View>
            <Text className='text-sm text-gray-400 px-4'>{description}</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                className='pt-4'>

                {/* Restaurant Cards */}
                {restaurants?.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant._id}
                        id={restaurant._id}
                        imgUrl={restaurant.image}
                        title={restaurant.name}
                        rating={restaurant.rating}
                        genre={restaurant.type?.name}
                        address={restaurant.address}
                        short_description={restaurant.short_description}
                        dishes={restaurant.dishes}
                        lng={restaurant.lng}
                        lat={restaurant.lat}
                    />
                ))}


            </ScrollView>

        </View>
    )
}

export default FeaturedRow